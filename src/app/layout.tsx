import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Website laten maken voor zzp en mkb | Lorent Webworks Amsterdam",
  description:
    "Senior frontend engineer Tim Lorent bouwt websites die klanten opleveren, voor zzp'ers en mkb in heel Nederland. Direct contact, geen bureau ertussen.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Website laten maken voor zzp en mkb | Lorent Webworks Amsterdam",
    description:
      "Websites die klanten opleveren. 8+ jaar ervaring bij bol.com, GrandVision, T-Mobile, nu toegepast voor zzp en mkb.",
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lorent Webworks, websites die klanten opleveren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten maken voor zzp en mkb | Lorent Webworks",
    description:
      "Websites die klanten opleveren. Senior-ervaring, nu toegepast voor zzp en mkb.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${manrope.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
