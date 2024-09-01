"use client";
import { Banners } from "@/components/Banners/Banners";
import { WhiteCardContainer } from "@/components/Cards";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { ProductListing } from "@/components/ProductListing/ProductListing";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { useSpaceConfiguration } from "@/contexts";
import Link from "next/link";
import { Suspense } from "react";

export default function HomePage() {
  const { spaceConfiguration } = useSpaceConfiguration();
  return (
    <main>
      <Suspense>
        <Layout className="grid">
          <Section>
            <Container>
              <h1 className="font-medium text-sm">
                Welcome to{" "}
                <span
                  style={{ color: spaceConfiguration.brandColor }}
                  className={`text-[${spaceConfiguration.brandColor}]`}
                >
                  {spaceConfiguration.name}
                </span>
              </h1>
            </Container>
          </Section>
          <Section>
            <Banners />
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
