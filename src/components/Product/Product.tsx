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
    setIsInCart(Boolean(props.primaryImage));
  }, []);

  return (
    <div className="rounded-lg borders h-60 md:h-72 flex justify-between flex-col gap-1 row-span-2 overflow-hidden">
      <div className="grid gap-1 text-sm">
        <Link href={props.slug}>
          <div className="overflow-hidden h-32 sm:h-40 md:h-44 flex">
            <img
              src={props.primaryImage.key}
              className="object-cover object-center w-full"
            />
          </div>
        </Link>
        <div className="flex justify-between items-start">
          <Link href={props.slug}>
            <h3 className="font-medium">{Text.truncate(props.name, 24)}</h3>
          </Link>

          <IconContainer
            className="cursor-pointer"
            onClick={handleCartButtonClick}
          >
            {isInCart ? <PiShoppingCartSimpleFill /> : <PiShoppingCartSimple />}
          </IconContainer>
        </div>
        <p>{Numerics.format(props.price, { symbol: "NGN" })}</p>
      </div>
      <div>
        <Button className="w-full md:w-fit">Buy now</Button>
      </div>
    </div>
  );
};
