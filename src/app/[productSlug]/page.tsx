"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { ProductDetails } from "@/components/ProductDetails";
import { Suspense } from "react";

export default function ProductDetailPage() {
  return (
    <main>
      <Suspense>
        <Layout>
          <Container>
            <ProductDetails />
          </Container>
        </Layout>
      </Suspense>
    </main>
  );
}
