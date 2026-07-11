import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyMobileBar from "./components/StickyMobileBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wmsscotland.com"),

  title: {
    default: "WMS Scotland | Mobile Mechanic in East Lothian",
    template: "%s | WMS Scotland",
  },

  description:
    "Professional mobile mechanic based in Dunbar, covering East Lothian. Servicing, diagnostics, brakes, suspension, agricultural machinery and marine engine repairs carried out at your home or workplace.",

  keywords: [
    "Mobile Mechanic",
    "Mobile Mechanic East Lothian",
    "Mechanic Dunbar",
    "Mechanic North Berwick",
    "Mechanic Haddington",
    "Car Servicing",
    "Vehicle Diagnostics",
    "Brake Repairs",
    "Suspension Repairs",
    "Agricultural Machinery Repairs",
    "Marine Engine Repairs",
    "WMS Scotland",
  ],

  authors: [
    {
      name: "WMS Scotland",
    },
  ],

  creator: "WMS Scotland",

  publisher: "WMS Scotland",

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://wmsscotland.com",
    siteName: "WMS Scotland",
    title: "WMS Scotland | Mobile Mechanic in East Lothian",
    description:
      "Professional mobile mechanic covering East Lothian. Repairs, servicing, diagnostics, agricultural and marine mechanical services at your home or workplace.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "WMS Scotland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WMS Scotland",
    description:
      "Professional Mobile Mechanic covering East Lothian.",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#08111F] text-white antialiased`}
      >
        <Navbar />

        {children}

        <FloatingWhatsApp />

        <StickyMobileBar />

        <Footer />
      </body>
    </html>
  );
}