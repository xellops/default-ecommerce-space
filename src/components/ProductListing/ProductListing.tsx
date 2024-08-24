import { useEffect, useState } from "react";
import { Product } from "../Product/Product";
import { ProductListingProps } from "@/interfaces/product-listing.interface";
import { Section } from "../Section";

export const ProductListing = (props: ProductListingProps) => {
  const [products, setProducts] = useState<any[]>([]);

  const getData = async () => {
    setTimeout(() => {}, 3000);
    const data = [
      {
        name: "Product A",
        slug: "product-a",
        price: 30,
        primaryImage: {
          key: "./images/banner-2.png",
          isPrimary: true,
        },
      },
      {
        name: "Product Bsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        slug: "product-b",
        price: 30,
        primaryImage: {
          key: "./images/banner-1.jpg",
          isPrimary: false,
        },
      },
      {
        name: "Product B",
        slug: "product-b",
        price: 30,
        primaryImage: {
          key: "./images/banner-1.jpg",
          isPrimary: false,
        },
      },
      {
        name: "Product B",
        slug: "product-b",
        price: 30,
        primaryImage: {
          key: "./images/banner-1.jpg",
          isPrimary: false,
        },
      },
      {
        name: "Product B",
        slug: "product-b",
        price: 30,
        primaryImage: {
          key: "./images/banner-1.jpg",
          isPrimary: false,
        },
      },
    ];

    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Section>
        <ul className="grid gap-4 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <li key={`product-list-item-${Date.now()}-${i}`}>
              <Product {...product} />
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};
