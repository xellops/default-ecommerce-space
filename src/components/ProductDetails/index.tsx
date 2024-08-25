"use client";
import { Section } from "../Section";
import { useEffect, useState } from "react";
import { ProductObject } from "@/interfaces";
import { useParams } from "next/navigation";
import { Loader } from "../Loader/Loader";
import { ProductSummary } from "./ProductSummary";
import { WhiteCardContainer } from "../Cards";

export const ProductDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductObject>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchProduct = async () => {
    setLoading(true);
    try {
      // const result = await marketplacesApi.findProduct(
      //   params.productSlug as string
      // );
      // setProduct(result);
      const res: any = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({});
        }, 5000);
      });

      setProduct(res);
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
        <div className="max-w-4xl mx-auto">
          <Section>
            <h1 className="text-4xl">{params.productSlug}</h1>
            <ProductSummary product={product!} onUpdate={setProduct} />
          </Section>

          <Section>
            <WhiteCardContainer>
              <p>Some description</p>
            </WhiteCardContainer>
          </Section>

          <Section>
            <WhiteCardContainer>
              <p>Some description</p>
            </WhiteCardContainer>
          </Section>

          <Section>
            <WhiteCardContainer>
              <p>Similar products</p>
            </WhiteCardContainer>
          </Section>
        </div>
      ) : (
        <p className="text-center font-semibold text-xl">Product not found</p>
      )}
    </>
  );
};
