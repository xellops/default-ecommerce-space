import { useEffect, useState } from "react";
import { Product } from "../Product/Product";

export const ProductListing = () => {
  const [products, setProducts] = useState<any[]>([]);

  const getData = async () => {
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
    <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, i) => (
        <li>
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
};
