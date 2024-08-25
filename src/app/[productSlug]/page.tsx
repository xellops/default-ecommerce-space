"use client";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { ProductDetails } from "@/components/ProductDetails";
import { Section } from "@/components/Section";
import { Suspense } from "react";

export default function ProductDetailPage() {
  return (
    <main>
      <Suspense>
        <div className="grid">
          <Section>
            <Header />
          </Section>

          <Section>
            <Container>
              <ProductDetails />
            </Container>
          </Section>
        </div>
      </Suspense>
    </main>
  );
}
