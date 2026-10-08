import type { Metadata } from "next";
import { Jost, Kumbh_Sans } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bonte Pure | Natural Products from Ghana",
  description: "Discover thoughtfully sourced natural products from Ghana.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${kumbhSans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
