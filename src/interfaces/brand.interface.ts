import { IndustryObject } from "./industry.interface";

export interface BrandObject extends IndustryObject {}

export interface CreateBrandInput {
  name: string;
}

export interface UpdateBrandInput extends CreateBrandInput {}

export interface UpdateBrandFormProps {
  spaceId: string;
  brandId: string;
  input: UpdateBrandInput;
  onSubmit: (brand: BrandObject) => void;
}