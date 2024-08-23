import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/contexts/ToastProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZoneX - Marketplaces",
  description: "Your favorite marketplaces online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901,1,2&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
