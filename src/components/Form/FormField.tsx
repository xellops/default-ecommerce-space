import { HTMLAttributes } from "react";

export const FormField = (props: HTMLAttributes<any>) => {
  return (
    <div {...props} className={`grid gap-0.5 ${props.className}`}>
      {props.children}
    </div>
  );
};
