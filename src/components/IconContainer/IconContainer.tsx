import { HtmlHTMLAttributes, ReactNode } from "react";

export interface IconContainerProps extends HtmlHTMLAttributes<any> {
  children: ReactNode;
}

export const IconContainer = (props: IconContainerProps) => {
  return (
    <div {...props} className={`text-2xl md:text-3xl ${props.className || ""}`}>
      {props.children}
    </div>
  );
};
