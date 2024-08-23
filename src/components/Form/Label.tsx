import { LabelHTMLAttributes } from "react";

export const Label = (props: LabelHTMLAttributes<any>) => {
  return (
    <label
      {...props}
      className={`text-stone-700 font-semibold text-sm ${props.className}`}
    >
      {props.children}
    </label>
  );
};
