export interface ProductSearchParams {
  q?: string;
  startPrice?: number;
  endPrice?: number;
  brandId?: string;
  categoryId?: string;
  specificationGroupId?: string;
  spaceId?: string;
  /** Takes the format: "lat:long:mile-radius" */
  location?: string;
  /** Takes the format: "specificationId1:specificationValue1,specificationId2:specificationValue2,..."  */
  specs?: string;
}

export interface ProductListingProps {
  layout?: "grid" | "horizontal";
  showNumHits?: boolean;
  params: ProductSearchParams;
}
