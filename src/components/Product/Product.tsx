import Link from "next/link";
import { Numerics, Text } from "@/utils";
import { Button } from "../Button";
import { BiCart, BiCartAdd } from "react-icons/bi";
import { IconContainer } from "../IconContainer/IconContainer";
import { BsCart2, BsCart3, BsCart4, BsCartPlus } from "react-icons/bs";
import {
  PiShoppingCart,
  PiShoppingCartSimple,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";
import { useEffect, useState } from "react";
import { ProductObject } from "@/interfaces";
import { toast } from "react-toastify";

export const Product = (props: ProductObject) => {
  const [isInCart, setIsInCart] = useState<boolean>(false);

  const handleCartButtonClick = async () => {
    try {
      if (isInCart) {
        // Call API to add to cart
      } else {
        // Call API to remove from cart
      }

      toast.success("Cart updated");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsInCart(!isInCart);
    }
  };

  useEffect(() => {
    // setIsInCart(Boolean(props));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "3fr 2fr",
      }}
      className="bg-white rounded-md h-60 sm:h-72 overflow-hidden hover:shadow-md transition-all"
    >
      <div className="overflow-hidden relative flex bg-red-200">
        <Link href={props.slug}>
          <img
            src={props.primaryImage.key}
            className="object-cover absolute object-center w-full h-full"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between p-2 gap-2">
        <Link href={props.slug}>
          <h3 className="text-sm mb-1">{Text.truncate(props.name, 20)}</h3>
          <p className="text-sm font-medium">
            {Numerics.format(props.price, { symbol: "NGN" })}
          </p>
        </Link>

        <div className="grid gap-2">
          <Button
            className="w-full uppercase"
            onClick={handleCartButtonClick}
            variant={isInCart ? "secondary" : "default"}
          >
            {isInCart ? "Remove" : "Add to cart"}
          </Button>
          {/* <Button className="w-full uppercase">Buy now</Button> */}
        </div>
      </div>
    </div>
  );
};
