"use client";
import { Container } from "@/components/Container";
import { Checkbox, Radio } from "@/components/Form";
import { Header } from "@/components/Header";
import { IconContainer } from "@/components/IconContainer/IconContainer";
import { ProductListing } from "@/components/ProductListing/ProductListing";
import { Section } from "@/components/Section";
import { ProductSearchParams } from "@/interfaces/product-listing.interface";
import { Numerics } from "@/utils";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { GoFilter } from "react-icons/go";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [productListingSearchParams, setProductListingSearchParams] =
    useState<ProductSearchParams>({});

  const handleFilter = (params: any) => {
    setProductListingSearchParams({ ...productListingSearchParams, ...params });
  };

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setProductListingSearchParams({ q });
  }, []);

  return (
    <main>
      <Suspense>
        <div className="grid">
          <Section>
            <Header />
          </Section>

          <Section>
            <Container>
              {/* <div>
                {productListingSearchParams.q ? (
                  <Section>
                    <h2 className="text-lg font-semibold">
                      {productListingSearchParams.q}
                    </h2>
                  </Section>
                ) : null}
              </div> */}

              <div className="md:flex items-start gap-4">
                <div className="w-full max-w-48 pr-2 h-screen border-r flex flex-col gap-8">
                  <div className="flex items-center gap-0.5 font-semibold mb-0">
                    <IconContainer>
                      <GoFilter />
                    </IconContainer>
                    <span className="text-sm">Filters</span>
                  </div>

                  <ul className="flex flex-col gap-8">
                    <li className="grid gap-1">
                      <h4 className="font-semibold text-sm">Price (NGN)</h4>
                      <ul>
                        <li>
                          <Checkbox
                            options={[
                              {
                                name: `Less than ${Numerics.format(1000, {
                                  precision: 0,
                                })}`,
                                value: 1000,
                              },
                            ]}
                          />
                        </li>
                      </ul>
                    </li>
                    <li className="grid gap-1">
                      <h4 className="font-semibold text-sm">Brand</h4>
                      <ul>
                        <li>
                          <Radio
                            options={[
                              {
                                name: "Hisense",
                                value: "hisense-id",
                              },
                              {
                                name: "LG",
                                value: "lg-id",
                              },
                              {
                                name: "Dangote",
                                value: "dangote-id",
                              },
                            ]}
                          />
                        </li>
                      </ul>
                    </li>

                    <li className="grid gap-1">
                      <h4 className="font-semibold text-sm">Category</h4>
                      <ul className="max-h-24 overflow-y-scroll scroll-pb-12">
                        <li>
                          <Checkbox
                            options={[
                              {
                                name: "Refrigerators",
                                value: "hisense-id",
                              },
                              {
                                name: "Kitchen equipments",
                                value: "lg-id",
                              },
                              {
                                name: "Home appliances",
                                value: "dangote-id",
                              },
                              {
                                name: "School equipments",
                                value: "dangote-id",
                              },
                            ]}
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <hr />

                  <div>
                    <h4 className="text-sm mb-4">Specifications</h4>
                    <ul className="flex flex-col gap-8">
                      <li className="grid gap-1">
                        <h4 className="font-semibold text-sm">Weight (kg)</h4>
                        <ul>
                          <li>
                            <Checkbox
                              options={[
                                {
                                  name: `Less than ${Numerics.format(1000, {
                                    precision: 0,
                                  })}`,
                                  value: 1000,
                                },
                              ]}
                            />
                          </li>
                        </ul>
                      </li>

                      <li className="grid gap-1">
                        <h4 className="font-semibold text-sm">Size (kg)</h4>
                        <ul>
                          <li>
                            <Checkbox
                              options={[
                                {
                                  name: `Less than ${Numerics.format(1000, {
                                    precision: 0,
                                  })}`,
                                  value: 1000,
                                },
                              ]}
                            />
                          </li>
                        </ul>
                      </li>

                      <li className="grid gap-1">
                        <h4 className="font-semibold text-sm">Brand</h4>
                        <ul>
                          <li>
                            <Checkbox
                              options={[
                                {
                                  name: "Hisense",
                                  value: "hisense-id",
                                },
                                {
                                  name: "LG",
                                  value: "lg-id",
                                },
                                {
                                  name: "Samsung",
                                  value: "samsung-id",
                                },
                              ]}
                            />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <ProductListing params={productListingSearchParams} />
                </div>
              </div>
            </Container>
          </Section>
        </div>
      </Suspense>
    </main>
  );
}
