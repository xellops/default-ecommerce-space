import { ProductImageObject, ProductObject } from "@/interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";
import { marketplacesApi, Storage } from "@/utils";
import { UploadProductImageForm } from "../Forms/Product";
import { Loader } from "../Loader/Loader";
import { Section } from "../Section";
import { MdDelete, MdStar, MdStarOutline } from "react-icons/md";
import styles from "./ProductImages.module.scss";
import { toast } from "react-toastify";
import { ActionConfirmationDialogue } from "../ActionConfirmationDialogue";
import { GalleryCarousel } from "../GalleryCarousel";

export interface ProductImagesProps {
  product: ProductObject;
}

export const ProductImages = ({ product }: ProductImagesProps) => {
  const [images, setImages] = useState<ProductImageObject[]>([]);
  const [selected, setSelected] = useState<ProductImageObject>();
  const [loading, setLoading] = useState<boolean>(true);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showDeleteDialogue, setShowDeleteDialogue] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const result = await marketplacesApi.findProductImages(product.id);

      if (result.length) {
        setImages(result);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const setPrimaryImage = async (image: ProductImageObject) => {
    setLoading(true);
    try {
      await marketplacesApi.setPrimaryProductImage(image.productId, image.id);
      toast.success("Primary image updated successfully.");
      await fetchImages();
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOnProductImagesUpload = (
    newImages: ProductImageObject[] = []
  ) => {
    setImages([...images, ...newImages]);
  };

  const handleDeleteButtonClick = (image: ProductImageObject) => {
    setSelected(image);
    setShowDeleteDialogue(true);
  };

  const deleteProductImage = async () => {
    if (selected!.isPrimary) {
      return toast.error(
        "You can not delete the primary image of a product. You must set another image as primary first."
      );
    }

    setDeleting(true);
    try {
      await marketplacesApi.deleteProductImage(
        selected!.productId,
        selected!.id
      );
      await fetchImages();
      setShowDeleteDialogue(false);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setDeleting(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="max-w-3xld">
      <Section className="relative">
        {loading ? (
          <Loader size="md" className="mt-16" loaderText="Loading images" />
        ) : (
          <div>
            {images.length ? (
              <div>
                <Section>
                  <UploadProductImageForm
                    product={product}
                    onSubmit={handleOnProductImagesUpload}
                  />
                </Section>
                <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                  {images.map((image, i) => (
                    <li
                      key={`${product.slug}-image-${i}`}
                      className={`h-36 sm:h-40 md:h-48 lg:h-56 border rounded-lg cursor-pointer ${styles.productImageCard}`}
                    >
                      <div
                        className={`w-full absolute left-0 top-0 z-20 flex items-center justify-end gap-4 p-1 shadow shadow-stone-200 ${
                          image.isPrimary
                            ? ""
                            : styles.productImageActionContainer
                        }`}
                        style={{
                          background: "rgba(255, 255, 255, 0.9)",
                        }}
                      >
                        <div className="text-2xl">
                          {image.isPrimary ? (
                            <>
                              <MdStar
                                title="Primary image"
                                className="text-orange-400 cursor-pointer"
                              />
                            </>
                          ) : (
                            <>
                              <MdStarOutline
                                title="Set as primary"
                                onClick={() => setPrimaryImage(image)}
                                className="text-orange-400 cursor-pointer"
                              />
                            </>
                          )}
                        </div>
                        <MdDelete
                          className="text-red-600 text-xl delete"
                          onClick={() => handleDeleteButtonClick(image)}
                        />
                      </div>
                      <Image
                        src={Storage.get(image.key)}
                        alt={`${product.slug}-image-${i}`}
                        fill={true}
                        className="w-12 h-12 pointer"
                        objectFit="cover"
                        onClick={() => setSelectedIndex(i)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mt-24 flex flex-col justify-center items-center gap-4">
                <p className="text-center font-medium">
                  There are no images for his product.
                </p>

                <UploadProductImageForm
                  product={product}
                  onSubmit={handleOnProductImagesUpload}
                />
              </div>
            )}
          </div>
        )}
      </Section>

      <ActionConfirmationDialogue
        message={`You are about to delete a product image. Proceed?`}
        isOpen={showDeleteDialogue}
        onConfirm={deleteProductImage}
        onClose={setShowDeleteDialogue}
        confirmationButtonVariant="danger"
        loading={deleting}
      />

      <GalleryCarousel
        startIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
      >
        {images.map((image, i) => (
          <li
            key={`${product.slug}-image-${i}`}
            className={`h-36 sm:h-40 md:h-48 lg:h-96`}
          >
            <Image
              src={Storage.get(image.key)}
              alt={`${product.slug}-image-${i}`}
              fill={true}
              className="w-12 pointer"
              objectFit="cover"
            />
          </li>
        ))}
      </GalleryCarousel>
    </div>
  );
};
