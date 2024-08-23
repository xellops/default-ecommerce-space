import axios from "axios";

export interface RegisterAccountInput {
  name?: string;
  email: string;
  countryId: string;
}

class AuthApi {
  private baseUrl = process.env.NEXT_PUBLIC_AUTH_API_BASE_URL;

  private handleError(error: any) {
    let errMsg = "Unable to process your request. Please try again";

    if (error.response?.data) {
      if (error.response?.data?.errors) {
        errMsg = error.response?.data?.errors[0];
      } else {
        errMsg = error.response?.data?.message;
      }
    }

    throw new Error(errMsg || error?.message);
  }

  async register(input: RegisterAccountInput) {
    try {
      const { data } = await axios.post(`${this.baseUrl}/auth/register`, input);
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async forgorPassword(email: string) {
    try {
      const { data } = await axios.post(
        `${this.baseUrl}/auth/forgot-password`,
        {
          email,
        }
      );
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }
}

export const authApi = new AuthApi();
