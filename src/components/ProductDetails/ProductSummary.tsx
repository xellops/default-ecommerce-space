import { ProductObject } from "@/interfaces";
import { WhiteCardContainer } from "../Cards";

export interface ProductSummaryProps {
  product: ProductObject;
  onUpdate: (product: ProductObject) => void;
}

export const ProductSummary = ({ product, onUpdate }: ProductSummaryProps) => {
  return (
    <WhiteCardContainer>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-xl">{product?.name}</h2>
      </div>
    </WhiteCardContainer>
  );
};
