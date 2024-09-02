import { useState } from "react";
import { Button } from "../Button";
import { toast } from "react-toastify";
import { Loader } from "../Loader/Loader";

export interface CartButtonControlsProps {
  productId: string;
  availableUnits: number;
  onChange?: (unit: number) => void;
}

export const CartButtonControls = (props: CartButtonControlsProps) => {
  const [unitsInCart, setUnitsInCart] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = async (newValue: number) => {
    if (newValue > props.availableUnits || loading) return;
    setLoading(true);

    try {
      // Simulating adding to cart
      await new Promise((resolve) => {
        setTimeout(() => {
          setUnitsInCart(newValue);
          resolve(true);
        }, 2500);
      });

      if (typeof props.onChange === "function") {
        props.onChange(newValue);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative ${unitsInCart > 0 ? "w-fit" : "w-full"}`}>
      {unitsInCart > 0 ? (
        <div className="flex items-center gap-4">
          <Button
            onClick={() => handleChange(unitsInCart - 1)}
            className="uppercase px-4"
            disabled={loading}
          >
            -
          </Button>

          <p>{unitsInCart}</p>

          <Button
            onClick={() => handleChange(unitsInCart + 1)}
            className="uppercase px-4"
            disabled={unitsInCart === props.availableUnits || loading}
          >
            +
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => handleChange(1)}
          variant="secondary"
          className="uppercase w-full"
          disabled={props.availableUnits === 0 || loading}
        >
          Add to cart
        </Button>
      )}

      {loading ? (
        <div
          className="absolute top-1/2 -translate-y-1/2 w-full h-full rounded-md"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1",
          }}
        >
          <Loader
            color="black"
            size="sm"
            className="top-1/2 mb-48 -translate-y-1/4 w-full"
          />
        </div>
      ) : null}
    </div>
  );
};
