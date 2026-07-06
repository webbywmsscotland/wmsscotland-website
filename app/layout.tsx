import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WMS Scotland | Mobile Mechanic | Dunbar & East Lothian",
  description:
    "Professional mobile mechanic covering Dunbar and East Lothian. Servicing, diagnostics, repairs, brakes, batteries, suspension and roadside assistance. We come to you.",
  keywords: [
    "Mobile Mechanic",
    "Mobile Mechanic Dunbar",
    "Mobile Mechanic East Lothian",
    "Car Repairs Dunbar",
    "Vehicle Servicing",
    "Diagnostics",
    "Brake Repairs",
    "Roadside Assistance",
    "WMS Scotland",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}