"use client";
import { Section } from "../Section";
import Link from "next/link";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { ProductObject } from "@/interfaces";
import { marketplacesApi } from "@/utils";
import { useParams } from "next/navigation";
import { Loader } from "../Loader/Loader";
import { BasicProductInformation } from "./BasicProductInformation";
import { ProductSummary } from "./ProductSummary";
import { ProductImages } from "./ProductImages";
import { ProductSpecifications } from "./ProductSpecifications";

export const ProductDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductObject>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const result = await marketplacesApi.findProduct(
        params.productId as string
      );
      setProduct(result);
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
        <div>
          <Section>
            <ProductSummary product={product!} onUpdate={setProduct} />
          </Section>

          <Section></Section>
        </div>
      ) : (
        <p className="text-center font-semibold text-xl">Product not found</p>
      )}
    </>
  );
};
