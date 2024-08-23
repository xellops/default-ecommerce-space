import { ButtonHTMLAttributes } from "react";

interface ButtonProp extends ButtonHTMLAttributes<any> {
  variant?: "default" | "warning" | "secondary" | "danger" | "grey" | "light";
}

const btnVariantStylings = {
  default: "bg-black text-white",
  secondary: "bg-transparent border border-blue-600 text-blue-600",
  danger: "bg-red-600 text-white",
  grey: "bg-stone-500 text-white",
  light: "bg-white text-black",
  warning: "bg-orange-500 text-white",
};

export const Button = (props: ButtonProp) => {
  const btnVariant = props.variant || "default";
  const btnVariantStyling = btnVariantStylings[btnVariant];

  return (
    <button
      {...props}
      className={`p-2 text-sm rounded-lg font-medium disabled:opacity-75 ${btnVariantStyling} ${props.className}`}
    >
      {props.children}
    </button>
  );
};
