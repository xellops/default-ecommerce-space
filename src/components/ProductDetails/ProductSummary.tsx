import { ProductObject } from "@/interfaces";
import { WhiteCardContainer } from "../Cards";
import { GalleryCarousel } from "../GalleryCarousel";
import Image from "next/image";
import { Numerics, Storage } from "@/utils";
import { Section } from "../Section";
import Link from "next/link";
import { Button } from "../Button";
import { MdHelpOutline } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";

export interface ProductSummaryProps {
  product: ProductObject;
}

export const ProductSummary = ({ product }: ProductSummaryProps) => {
  return (
    <WhiteCardContainer className="min-h-80">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="w-full">
          <GalleryCarousel startIndex={0} autoPlay={true}>
            {product.images.map((image, i) => (
              <li
                key={`${product.slug}-image-${i}`}
                className={`h-40 sm:h-40 md:h-48 lg:h-96`}
              >
                <Image
                  src={Storage.get(image.key)}
                  alt={`${product.slug}-image-${i}`}
                  fill={true}
                  className="w-full pointer"
                  objectFit="contain"
                />
              </li>
            ))}
          </GalleryCarousel>
        </div>

        <div>
          <Section>
            <h2 className="font-medium text-xl">{product?.name}</h2>

            <p className="text-sm">
              <span>In: </span>
              <Link
                className="text-blue-600"
                href={`/products?specGroup=${product.specificationGroup?.slug}`}
              >
                {product.specificationGroup?.name}
              </Link>
            </p>
          </Section>

          <Section>
            <p className="text-sm">
              <span className="font-medium">Class: </span>
              <span className="capitalize">{product?.class}</span>
            </p>

            <p className="text-sm">
              <span className="font-medium">Brand: </span>
              <Link
                className="text-blue-600"
                href={`/products?specGroup=${product.specificationGroup?.slug}`}
              >
                Terrace
              </Link>
            </p>
          </Section>

          <Section>
            <p className="font-bold md:text-lg">
              {Numerics.format(product.price, { symbol: "NGN " })}
            </p>
            <p
              className={`text-xs font-medium ${
                product.availableUnits < 10 ? "text-red-700" : "text-green-700"
              }`}
            >
              {product.availableUnits < 10
                ? `Only ${product.availableUnits} unit(s) left.`
                : "In stock"}
            </p>
          </Section>

          <Section>
            <div className="flex items-center gap-1 font-normal">
              <GrShieldSecurity className="text-green-700" />
              <p className="md:text-sm">Installment payment available.</p>
              <MdHelpOutline />
            </div>
          </Section>

          <Section className="grid gap-2">
            <Button variant="secondary" className="uppercase">
              Add to cart
            </Button>
            <Button className="bg-green-600 uppercase">Buy Now</Button>
          </Section>
        </div>
      </div>
    </WhiteCardContainer>
  );
};
