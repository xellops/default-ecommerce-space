import axios from "axios";
import { cookies } from "./cookies";
import {
  AddSpecificationInput,
  BrandObject,
  CategoryObject,
  CountryObject,
  CreateBrandInput,
  CreateCategoryInput,
  CreateProductInput,
  CreateSpaceInput,
  CreateSpecificationGroupInput,
  CurrencyObject,
  IndustryObject,
  PaginatedResult,
  ProductImageObject,
  ProductObject,
  ProductSpecificationInput,
  SpaceObject,
  SpecificationGroupObject,
  SpecificationObject,
  TokenValidationResult,
  UpdateBrandInput,
  UpdateSpaceInput,
  UpdateSpecificationGroupInput,
  WalletObject,
} from "@/interfaces";
import { auth } from "@/configs/firebase";

const AUTH_UI_BASE_URL = process.env.NEXT_PUBLIC_AUTH_UI_URL;

class MarketplacesAPI {
  private token = cookies.get("token");

  private readonly AUTH_API_BASE_URL =
    process.env.NEXT_PUBLIC_AUTH_API_BASE_URL;

  private readonly MARKETPLACES_API_BASE_URL =
    process.env.NEXT_PUBLIC_MARKETPLACES_API_BASE_URL;

  private readonly defaultHeaders = {
    authorization: `Bearer ${this.token}`,
  };

  handleError(error: any) {
    console.log(error.response);
    if (!error.response) {
      throw new Error(error.message);
    }

    const { message, errors, statusCode } = error.response.data;

    if (errors.length) {
      throw new Error(errors[0]);
    } else {
      throw new Error(message);
    }
  }

  // ------ AUTH ------ //

  async validateToken(): Promise<TokenValidationResult | any> {
    try {
      if (!this.token) {
        return { status: false };
      }

      const { data } = await axios.post(
        `${this.AUTH_API_BASE_URL}/auth/validate`,
        { token: this.token }
      );

      return {
        status: true,
        account: data,
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ COUNTRY ------ //

  async findCountries(queryParams = {}): Promise<CountryObject[] | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/countries`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ INDUSTRY ------ //

  async findIndustries(): Promise<IndustryObject[] | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/industries`,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findIndustry(id: string): Promise<IndustryObject | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/industries/${id}`,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ CURRENCY ------ //

  async findCurrencies(queryParams = {}): Promise<CurrencyObject[] | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/currencies`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ BRAND ------ //

  async findBrands(
    queryParams = {}
  ): Promise<PaginatedResult<BrandObject> | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/brands`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ CATEGORY ------ //

  async findCategories(
    queryParams = {}
  ): Promise<PaginatedResult<CurrencyObject> | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/categories`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ SPACE ------ //

  async createSpace(input: CreateSpaceInput): Promise<SpaceObject | any> {
    try {
      const { data } = await axios.post(
        `${this.MARKETPLACES_API_BASE_URL}/spaces`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findSpaces(
    queryParams = {}
  ): Promise<PaginatedResult<SpaceObject> | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/spaces`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findSpace(id: string): Promise<SpaceObject | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${id}`,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateSpace(
    id: string,
    input: UpdateSpaceInput
  ): Promise<SpaceObject | any> {
    try {
      const { data } = await axios.patch(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${id}`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ SPACE BRAND ------ //

  async createSpaceBrand(
    spaceId: string,
    input: CreateBrandInput
  ): Promise<BrandObject | any> {
    try {
      const { data } = await axios.post(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/brands`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findSpaceBrands(
    spaceId: string,
    queryParams = {}
  ): Promise<PaginatedResult<BrandObject> | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/brands`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateSpaceBrand(
    spaceId: string,
    brandId: string,
    input: UpdateBrandInput
  ): Promise<BrandObject | any> {
    try {
      const { data } = await axios.patch(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/brands/${brandId}`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteSpaceBrand(spaceId: string, brandId: string): Promise<void> {
    try {
      await axios.delete(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/brands/${brandId}`,
        { headers: this.defaultHeaders }
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ SPACE CATEGORY ------ //

  async createSpaceCategory(
    spaceId: string,
    input: CreateCategoryInput
  ): Promise<CategoryObject | any> {
    try {
      const { data } = await axios.post(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/categories`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findSpaceCategories(
    spaceId: string,
    queryParams = {}
  ): Promise<PaginatedResult<CategoryObject> | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/categories`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateSpaceCategory(
    spaceId: string,
    categoryId: string,
    input: UpdateBrandInput
  ): Promise<CategoryObject | any> {
    try {
      const { data } = await axios.patch(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/categories/${categoryId}`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteSpaceCategory(
    spaceId: string,
    categoryId: string
  ): Promise<void> {
    try {
      await axios.delete(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/categories/${categoryId}`,
        { headers: this.defaultHeaders }
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ SPACE WALLET ------ //

  async findSpaceWallets(
    spaceId: string,
    queryParams = {}
  ): Promise<WalletObject[] | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/spaces/${spaceId}/wallets`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ PRODUCT ------ //

  async createProduct(input: CreateProductInput): Promise<ProductObject | any> {
    try {
      const { data } = await axios.post(
        `${this.MARKETPLACES_API_BASE_URL}/products`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findProducts(
    spaceId: string,
    queryParams = {}
  ): Promise<PaginatedResult<ProductObject> | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/products`,
        { headers: this.defaultHeaders, params: { ...queryParams, spaceId } }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findProduct(productId: string): Promise<ProductObject | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/products/${productId}`,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateProduct(
    productId: string,
    input: UpdateBrandInput
  ): Promise<ProductObject | any> {
    try {
      const { data } = await axios.patch(
        `${this.MARKETPLACES_API_BASE_URL}/products/${productId}`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteProduct(productId: string): Promise<void> {
    try {
      await axios.delete(
        `${this.MARKETPLACES_API_BASE_URL}/products/${productId}`,
        { headers: this.defaultHeaders }
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ PRODUCT IMAGES ------ //

  async addProductImages(
    productId: string,
    input: any
  ): Promise<ProductImageObject[] | any> {
    try {
      // const { data } = await axios.post(
      //   `${this.MARKETPLACES_API_BASE_URL}/products/${productId}/images`,
      //   input,
      //   {
      //     headers: {
      //       ...this.defaultHeaders,
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      const res = await fetch(
        `${this.MARKETPLACES_API_BASE_URL}/products/${productId}/images`,
        {
          method: "post",
          body: input,
          headers: {
            ...this.defaultHeaders,
          },
        }
      );

      const data = await res.json();

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findProductImages(
    productId: string
  ): Promise<ProductImageObject[] | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/products/${productId}/images`,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async setPrimaryProductImage(
    productId: string,
    imageId: string
  ): Promise<ProductImageObject | any> {
    try {
      const { data } = await axios.patch(
        `${this.MARKETPLACES_API_BASE_URL}/products/${productId}/images/${imageId}/primary`,
        null,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteProductImage(productId: string, imageId: string): Promise<void> {
    try {
      await axios.delete(
        `${this.MARKETPLACES_API_BASE_URL}/products/${productId}/images/${imageId}`,
        { headers: this.defaultHeaders }
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ PRODUCT SPECIFICATION GROUP ------ //

  async setProductSpecificationGroup(
    productId: string,
    specificationGroupId: string,
    input: ProductSpecificationInput[] = []
  ): Promise<ProductObject | any> {
    try {
      const { data } = await axios.put(
        `${this.MARKETPLACES_API_BASE_URL}/products/${productId}/specification-group`,
        { specificationGroupId, specifications: input },
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ SPECIFICATION GROUP ------ //

  async createSpecificationGroup(
    input: CreateSpecificationGroupInput
  ): Promise<SpecificationGroupObject | any> {
    try {
      const { data } = await axios.post(
        `${this.MARKETPLACES_API_BASE_URL}/specification-groups`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findSpecificationGroups(
    spaceId: string,
    queryParams = {}
  ): Promise<PaginatedResult<SpecificationGroupObject> | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/specification-groups`,
        { headers: this.defaultHeaders, params: { ...queryParams, spaceId } }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findSpecificationGroup(
    specificationGroupId: string
  ): Promise<SpecificationGroupObject | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/specification-groups/${specificationGroupId}`,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateSpecificationGroup(
    specificationGroupId: string,
    input: UpdateSpecificationGroupInput
  ): Promise<SpecificationGroupObject | any> {
    try {
      const { data } = await axios.patch(
        `${this.MARKETPLACES_API_BASE_URL}/specification-groups/${specificationGroupId}`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteSpecificationGroup(specificationGroupId: string): Promise<void> {
    try {
      await axios.delete(
        `${this.MARKETPLACES_API_BASE_URL}/specification-groups/${specificationGroupId}`,
        { headers: this.defaultHeaders }
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async addSpecificationToGroup(
    specificationGroupId: string,
    input: AddSpecificationInput
  ): Promise<SpecificationObject | any> {
    try {
      const { data } = await axios.post(
        `${this.MARKETPLACES_API_BASE_URL}/specification-groups/${specificationGroupId}/specifications`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateSpecificationInGroup(
    specificationGroupId: string,
    specificationId: string,
    input: UpdateBrandInput
  ): Promise<SpecificationObject | any> {
    try {
      const { data } = await axios.patch(
        `${this.MARKETPLACES_API_BASE_URL}/specification-groups/${specificationGroupId}/specifications/${specificationId}`,
        input,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteSpecificationFromGroup(
    specificationGroupId: string,
    specificationId: string
  ): Promise<void> {
    try {
      await axios.delete(
        `${this.MARKETPLACES_API_BASE_URL}/specification-groups/${specificationGroupId}/specifications/${specificationId}`,
        { headers: this.defaultHeaders }
      );
    } catch (error) {
      this.handleError(error);
    }
  }
}

export const marketplacesApi = new MarketplacesAPI();
