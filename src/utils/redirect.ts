"use client";
import { ProviderUserCredential } from "@/configs/firebase";
import forge from "node-forge";

const defaultRedirectUrl = process.env.NEXT_PUBLIC_MARKET_UI_URL;

/**
 * Encodes the auth credential to base64 and redirects the client to the value of the `redirectUrl`.
 *
 * @param credential - The auth credential after a sign up or sign in process.
 * @param redirectUrl - The destination for a redirect.
 */
export const redirectClient = (
  credential: ProviderUserCredential,
  redirectUrl?: string | null
) => {
  let baseUrl = (redirectUrl || defaultRedirectUrl) as string;
  baseUrl = baseUrl.includes("?") ? baseUrl : `${baseUrl}?`;
  const encodedCredential = forge.util.encode64(JSON.stringify(credential));
  const finalUrl = `${baseUrl}&credential=${encodedCredential}`;
  window.location.replace(finalUrl);
};
