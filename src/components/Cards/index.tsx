import { HTMLAttributes, PropsWithChildren } from "react";

interface CardContainerProps extends HTMLAttributes<any> {
  className?: string;
}

export const CardContainer = (props: CardContainerProps) => {
  return (
    <div
      {...props}
      className={`drop-shadow-sm border rounded-md overflow-hidden p-2 md:p-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export const WhiteCardContainer = (props: CardContainerProps) => {
  return (
    <CardContainer {...props} className={`bg-white ${props.className}`}>
      {props.children}
    </CardContainer>
  );
};

export const PrimaryColoredCardContainer = (props: CardContainerProps) => {
  return (
    <CardContainer
      {...props}
      className={`bg-blue-700 text-white ${props.className}`}
    >
      {props.children}
    </CardContainer>
  );
};
