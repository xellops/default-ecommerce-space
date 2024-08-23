import { FormHTMLAttributes } from "react";

export const Form = (props: FormHTMLAttributes<any>) => {
  return (
    <form {...props} className={`grid gap-4 ${props.className}`}>
      {props.children}
    </form>
  );
};
