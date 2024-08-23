import { HTMLAttributes, PropsWithChildren } from "react";

interface CardContainerProps extends HTMLAttributes<any> {
  className?: string;
}

export const CardContainer = (props: CardContainerProps) => {
  return (
    <div
      {...props}
      className={`drop-shadow-sm border rounded-2xl overflow-hidden p-4 md:p-6 ${props.className}`}
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
