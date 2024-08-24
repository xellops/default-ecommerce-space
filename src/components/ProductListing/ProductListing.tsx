import { useEffect, useState } from "react";
import { Product } from "../Product/Product";
import { ProductListingProps } from "@/interfaces/product-listing.interface";
import { Section } from "../Section";
import { Loader } from "../Loader/Loader";

export const ProductListing = (props: ProductListingProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);

  const getData = async () => {
    setErrorMessage("");
    setLoading(true);

    try {
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

      const res: any = await new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve(data);
        }, 3000);
      });
      setProducts(res);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <div className="relative mt-8">
          <Loader size="sm" />
        </div>
      ) : (
        <ul className="grid gap-4 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <li key={`product-list-item-${Date.now()}-${i}`}>
              <Product {...product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
