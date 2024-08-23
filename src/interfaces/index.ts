export * from "./auth.interface";
export * from "./country.interface";
export * from "./industry.interface";
export * from "./space.interface";
export * from "./currency.interface";
export * from "./brand.interface";
export * from "./category.interface";
export * from "./wallet.interface";
export * from "./product.interface";
export * from "./specification-group.interface";

export interface PaginatedResult<T> {
  count: number;
  records: T[];
}
