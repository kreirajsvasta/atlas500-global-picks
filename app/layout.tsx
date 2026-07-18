import type { Metadata } from "next";
import "./globals.css";
import "./connected.css";

export const metadata: Metadata = {
  title: "Atlas500 Global Picks",
  description: "Verified Amazon product picks and e-commerce tools for worldwide shoppers and entrepreneurs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
