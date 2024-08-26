"use client";
import { Adverts } from "@/components/Adverts/Adverts";
import { WhiteCardContainer } from "@/components/Cards";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { ProductListing } from "@/components/ProductListing/ProductListing";
import { Section } from "@/components/Section";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <Suspense>
        <Layout className="grid">
          <Section>
            <Adverts />
          </Section>

          <Section>
            <Container>
              <WhiteCardContainer>
                <h2 className="text-xl font-semibold">Top sales</h2>
                <ProductListing params={{}} />
              </WhiteCardContainer>
            </Container>
          </Section>

          <Section>
            <Container>
              <WhiteCardContainer>
                <h2 className="text-xl font-semibold">Electronics</h2>
                <ProductListing params={{}} />
              </WhiteCardContainer>
            </Container>
          </Section>
        </Layout>
      </Suspense>
    </main>
  );
}