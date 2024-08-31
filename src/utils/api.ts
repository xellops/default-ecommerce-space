import axios from "axios";
import { cookies } from "./cookies";
import {
  BannerObject,
  BrandObject,
  CategoryObject,
  CountryObject,
  CurrencyObject,
  IndustryObject,
  PaginatedResult,
  ProductImageObject,
  ProductObject,
  SpaceObject,
  SpecificationGroupObject,
  TokenValidationResult,
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

  private readonly MARKETS_API_BASE_URL = `${process.env.NEXT_PUBLIC_MARKETPLACES_API_BASE_URL}/markets`;

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

  // ------ SPACE BRAND ------ //

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

  async findProducts(
    queryParams = {}
  ): Promise<PaginatedResult<ProductObject> | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETS_API_BASE_URL}/products`,
        { headers: this.defaultHeaders, params: queryParams }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findProduct(slug: string): Promise<ProductObject | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETS_API_BASE_URL}/products/${slug}`,
        { headers: this.defaultHeaders }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // ------ PRODUCT IMAGES ------ //

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

  // ------ SPECIFICATION GROUP ------ //
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

  // ------ BANNERS ------ //
  async findBanners(queryParams = {}): Promise<BannerObject[] | any> {
    try {
      const { data } = await axios.get(
        `${this.MARKETPLACES_API_BASE_URL}/markets/banners`,
        { headers: this.defaultHeaders, params: { ...queryParams } }
      );

      return data.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}

export const marketplacesApi = new MarketplacesAPI();
