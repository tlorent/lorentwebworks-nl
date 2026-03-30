import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lorentwebworks.nl"),
  title: "Website laten maken voor zzp & MKB | Lorent Webworks Amsterdam",
  description:
    "Freelance webdesigner Tim Lorent bouwt websites die klanten opleveren — voor zzp'ers en kleine bedrijven in heel Nederland. Inclusief teksten, SEO en hosting. Binnen 2–4 weken live.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website laten maken voor zzp & MKB | Lorent Webworks Amsterdam",
    description:
      "Freelance webdesigner voor zzp'ers en MKB. One-pager, complete website of webshop — inclusief teksten, SEO en hosting. Binnen 2–4 weken live.",
    url: "https://lorentwebworks.nl",
    siteName: "Lorent Webworks",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lorent Webworks — Website laten maken voor zzp en MKB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten maken voor zzp & MKB | Lorent Webworks",
    description:
      "Freelance webdesigner voor zzp'ers en kleine bedrijven. Inclusief teksten, SEO en hosting. Binnen 2–4 weken live.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
