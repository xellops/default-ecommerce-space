"use client";
import { Section } from "../Section";
import { useEffect, useState } from "react";
import { ProductObject } from "@/interfaces";
import { useParams } from "next/navigation";
import { Loader } from "../Loader/Loader";
import { ProductSummary } from "./ProductSummary";
import { WhiteCardContainer } from "../Cards";
import { marketplacesApi } from "@/utils";
import { SectionHeading } from "../SectionHeading";
import { ProductListing } from "../ProductListing/ProductListing";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { IconContainer } from "../IconContainer/IconContainer";
import { Button } from "../Button";

export const ProductDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductObject>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await marketplacesApi.findProduct(
          params.productSlug as string
        );

        setProduct(data);
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.productSlug]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Section>
        {product ? (
          <div className="max-w-6xls mx-auto">
            <Section className="grid md:flex gap-4">
              <div className="md:w-[70%]">
                <ProductSummary product={product!} />
              </div>

              <WhiteCardContainer className="md:w-[30%]">
                <SectionHeading>Delivery & Returns</SectionHeading>
              </WhiteCardContainer>
            </Section>

            <Section className="grid md:flex gap-4">
              <div className="md:w-[70%]">
                <Section>
                  <WhiteCardContainer>
                    <SectionHeading>Description</SectionHeading>
                    <p>{product.description}</p>
                  </WhiteCardContainer>
                </Section>

                {product.specifications.length ? (
                  <Section>
                    <WhiteCardContainer>
                      <SectionHeading>Specifications</SectionHeading>

                      <ul>
                        {product.specifications.map((productSpec, i) => (
                          <li key={`prod-spec-${productSpec.id}-${i}`}>
                            <p className="text-sm">
                              <span className="font-medium">
                                {productSpec.metadata.name}:{" "}
                              </span>
                              <span>{productSpec.value?.raw}</span>
                            </p>
                          </li>
                        ))}
                      </ul>
                    </WhiteCardContainer>
                  </Section>
                ) : null}
              </div>

              <WhiteCardContainer className="md:w-[30%]">
                <SectionHeading>Payment Options</SectionHeading>
              </WhiteCardContainer>
            </Section>
          </div>
        ) : (
          <WhiteCardContainer className="min-h-24 flex flex-col items-center gap-2">
            <IconContainer>
              <BiSearch className="text-4xl font-thin" />
            </IconContainer>
            <p className="text-center font-normal text-md">
              Sorry! We could not find what you were looking for.
            </p>

            <Link href={"/products"}>
              <Button>You can explore</Button>
            </Link>
          </WhiteCardContainer>
        )}
      </Section>

      <Section>
        <WhiteCardContainer>
          <SectionHeading>Similar Items</SectionHeading>
          <ProductListing params={{}} />
        </WhiteCardContainer>
      </Section>

      {product?.specificationGroup && (
        <Section>
          <WhiteCardContainer>
            <SectionHeading>
              <span>Other items from</span>{" "}
              <Link
                className="text-blue-600"
                href={`/products?specGroup=${product.specificationGroup?.slug}`}
              >
                {product.specificationGroup?.name}
              </Link>
            </SectionHeading>
            <ProductListing params={{}} />
          </WhiteCardContainer>
        </Section>
      )}
    </>
  );
};
