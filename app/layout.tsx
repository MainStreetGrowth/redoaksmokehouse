import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Red Oak Smokehouse — Real Pit BBQ in Hernando, MS",
  description:
    "Low-and-slow pit BBQ smoked over red oak wood in Hernando, Mississippi. Brisket, ribs, pulled pork, and more. Open Tuesday–Sunday. Call (662) 555-1847.",
  openGraph: {
    title: "Red Oak Smokehouse",
    description: "Real pit BBQ in Hernando, Mississippi. Low & slow since 1994.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${barlowCondensed.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
