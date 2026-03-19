import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "AAVORide – Car Rentals & Outstation Trips with Driver",
  description:
    "Book trusted car rentals and comfortable outstation trips with professional drivers. Transparent pricing, verified drivers, and 24/7 support.",
  keywords: [
    "car rental",
    "outstation trips",
    "cab booking",
    "hire a car with driver",
    "airport transfer",
    "city car rental",
    "outstation cab",
    "AAVORide",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
