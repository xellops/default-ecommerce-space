"use client";
import { Adverts } from "@/components/Adverts/Adverts";
import { WhiteCardContainer } from "@/components/Cards";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { ProductListing } from "@/components/ProductListing/ProductListing";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
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
                <SectionHeading className="flex justify-between">
                  <span>New Arrivals</span>
                  <Link
                    className="text-sm underline"
                    href={"/products?collection="}
                  >
                    See all
                  </Link>
                </SectionHeading>
                <ProductListing params={{}} />
              </WhiteCardContainer>
            </Container>
          </Section>

          <Section>
            <Container>
              <WhiteCardContainer>
                <ProductListing params={{}} />
              </WhiteCardContainer>
            </Container>
          </Section>

          <Section>
            <Container>
              <WhiteCardContainer>
                <SectionHeading className="flex justify-between">
                  <span>Electronics</span>
                  <Link
                    className="text-sm underline"
                    href={"/products?collection="}
                  >
                    See all
                  </Link>
                </SectionHeading>
                <ProductListing params={{}} />
              </WhiteCardContainer>
            </Container>
          </Section>

          <Section>
            <Container>
              <WhiteCardContainer>
                <SectionHeading className="flex justify-between">
                  <span>Kitchen Appliance</span>
                  <Link
                    className="text-sm underline"
                    href={"/products?collection="}
                  >
                    See all
                  </Link>
                </SectionHeading>
                <ProductListing params={{}} />
              </WhiteCardContainer>
            </Container>
          </Section>
        </Layout>
      </Suspense>
    </main>
  );
}
