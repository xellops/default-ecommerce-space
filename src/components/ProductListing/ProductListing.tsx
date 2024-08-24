import { useEffect, useState } from "react";
import { Product } from "../Product/Product";
import { ProductListingProps } from "@/interfaces/product-listing.interface";
import { Section } from "../Section";
import { Loader } from "../Loader/Loader";

export const ProductListing = (props: ProductListingProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);
  const [hits, setHits] = useState<number>(0);

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
      setHits(res.length);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="relative h-16">
        <Loader size="sm" />
      </div>
    );
  }

  return (
    <>
      {hits ? (
        <div className="grid gap-2">
          <div className="text-md flex items-center gap-2 mb-2">
            <p>{props.params?.q || null}</p>
            <p className="text-stone-600">
              {props.showNumHits ? `(${hits} items found)` : null}
            </p>
          </div>
          <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, i) => (
              <li key={`product-list-item-${Date.now()}-${i}`}>
                <Product {...product} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>
            No results were found. Try modifying your search or the filters.
          </p>
        </div>
      )}
    </>
  );
};
