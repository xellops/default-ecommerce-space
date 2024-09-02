import { useEffect, useState } from "react";
import { Product } from "../Product/Product";
import { ProductListingProps } from "@/interfaces/product-listing.interface";
import { Loader } from "../Loader/Loader";
import { marketplacesApi } from "@/utils";
import { PaginatedResult, ProductObject } from "@/interfaces";

export const ProductListing = (props: ProductListingProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);
  const [hits, setHits] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      setErrorMessage("");
      setLoading(true);

      try {
        const res = (await marketplacesApi.findProducts(
          props.params
        )) as PaginatedResult<ProductObject>;

        setProducts(res.records);
        setHits(res.count);
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [props.params]);

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
          <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
