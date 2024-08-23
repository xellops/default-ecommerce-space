import { ProductObject } from "@/interfaces";
import { CardContainer, WhiteCardContainer } from "../Cards";
import { UpdateProductForm } from "../Forms/Product";

export interface BasicProductInformationProps {
  product: ProductObject;
  onUpdate: (product: ProductObject) => void;
}

export const BasicProductInformation = ({
  product,
  onUpdate,
}: BasicProductInformationProps) => {
  return (
    <WhiteCardContainer className="max-w-3xl">
      <UpdateProductForm product={product} onSubmit={onUpdate} />
    </WhiteCardContainer>
  );
};
