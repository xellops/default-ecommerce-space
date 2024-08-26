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

export const ProductDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductObject>();
  const [errorMessage, setErrorMessage] = useState<string>("");

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

  useEffect(() => {
    fetchProduct();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
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
                        <li>
                          <p className="text-sm">
                            <span className="font-medium">
                              {productSpec.metadata.name}:{" "}
                            </span>
                            <span>{productSpec.value.raw}</span>
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

          <Section>
            <WhiteCardContainer>
              <SectionHeading>Similar Items</SectionHeading>
            </WhiteCardContainer>
          </Section>
        </div>
      ) : (
        <p className="text-center font-semibold text-xl">Product not found</p>
      )}
    </>
  );
};
