import { SpaceObject } from "./space.interface";
import {
  SpecificationGroupObject,
  SpecificationObject,
} from "./specification-group.interface";

export enum ProductClass {
  good = "good",
  service = "service",
}

export interface ProductObject {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  class: ProductClass;
  brandId: string;
  availableUnits: number;
  tag: string;
  isPaymentOnDelivery: number;
  spaceId: string;
  accountId: string;
  createdAt: Date;
  updatedAt: Date;
  space?: SpaceObject;
  specificationGroupId?: string;
  specificationGroup?: SpecificationGroupObject;
  specifications: ProductSpecificationObject[];
  primaryImage: ProductImageObject;
}

export interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  class: ProductClass;
  brandId: string;
  availableUnits: number;
  tag: string;
  isPaymentOnDelivery: number;
  spaceId: string;
}

export interface UpdateProductFormProps {
  product: ProductObject;
  onSubmit: (product: ProductObject) => void;
}

export interface ProductImageObject {
  id: string;
  key: string;
  productId: string;
  isPrimary: number;
}

export interface UploadProductImageFormProps {
  product: ProductObject;
  onSubmit: (image: ProductImageObject[]) => void;
}

export interface ProductSpecificationValue {
  raw: string;
}

export interface ProductSpecificationObject {
  id: string;
  productId: string;
  specificationGroupId: string;
  specificationId: string;
  value: ProductSpecificationValue;
  metadata: SpecificationObject;
}

export interface ProductSpecificationsProps {
  productId: string;
  group: SpecificationGroupObject;
  specifications: ProductSpecificationObject[];
}

/** Product specification definition */
export interface ProductSpecificationInput {
  specificationId: string;
  value: ProductSpecificationValue;
  id?: string;
}

export interface ProductSpecificationInputWithMeta
  extends ProductSpecificationInput {
  metadata: SpecificationObject;
}

export interface ProductSpecificationFormFields {
  [specificationId: string]: string | number;
}

export interface ProductSpecificationsFormProps {
  productSpecifications: ProductSpecificationInputWithMeta[];
  onSubmit: (inputs: ProductSpecificationInput[]) => void;
  disabled?: boolean;
}

