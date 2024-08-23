export interface TokenValidationResult {
  status: boolean;
  account?: {
    id: string;
    email: string;
    name: string;
    countryId: string;
    provider: string;
    verified: number;
    createdAt: string;
    updatedAt: string;
  };
}
