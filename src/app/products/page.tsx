"use client";
import { WhiteCardContainer } from "@/components/Cards";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { ProductListing } from "@/components/ProductListing/ProductListing";
import { ProductSearchFilters } from "@/components/ProductSearchFilters/ProductSearchFilters";
import { ProductSearchParams } from "@/interfaces/product-listing.interface";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const SearchResultPage = () => {
  const searchParams = useSearchParams();
  const [productListingSearchParams, setProductListingSearchParams] =
    useState<ProductSearchParams>({});

  const handleFilter = (params: any) => {
    setProductListingSearchParams({ ...productListingSearchParams, ...params });
  };

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setProductListingSearchParams({ q });
  }, [searchParams]);

  return (
    <>
      <Container>
        <div className="md:flex items-start gap-4">
          <ProductSearchFilters />

          <WhiteCardContainer className="w-full min-h-screen bg-white p-4">
            <ProductListing params={productListingSearchParams} showNumHits />
          </WhiteCardContainer>
        </div>
      </Container>
    </>
  );
};

export default function ProductsPage() {
  return (
    <main>
      <Suspense>
        <Layout>
          <SearchResultPage />
        </Layout>
      </Suspense>
    </main>
  );
}
