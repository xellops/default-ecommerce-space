import Link from "next/link";
import { Numerics, Storage, Text } from "@/utils";
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
import { CartButtonControls } from "../CartButtonControls/CartButtonControls";
import Image from "next/image";

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
      className="bg-white border rounded-md h-60 sm:h-72 overflow-hidden hover:shadow-md transition-all"
    >
      <div className="overflow-hidden relative flex">
        <Link href={props.slug}>
          <Image
            src={
              props.images[0]
                ? Storage.get(props.images[0].key)
                : "/images/banner-1.jpg"
            }
            alt={props.slug}
            className="object-cover absolute object-center w-full h-full"
            fill={true}
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between p-2 gap-2">
        <Link href={props.slug}>
          <h3 className="text-sm mb-1">{Text.truncate(props.name, 32)}</h3>
          <p className="text-sm font-medium">
            {Numerics.format(props.price, { symbol: "NGN" })}
          </p>
        </Link>

        <div className="grid gap-2">
          <CartButtonControls
            productId={props.id}
            availableUnits={props.availableUnits}
          />
          {/* <Button className="w-full uppercase">Buy now</Button> */}
        </div>
      </div>
    </div>
  );
};
