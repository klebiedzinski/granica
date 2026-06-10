import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { site, testimonials } from "@/lib/site";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata: Metadata = {
  title: `${site.brand} ${site.area.base} - wycinka i pielęgnacja drzew | ${site.owner}`,
  description:
    "Wycinka drzew (także trudna i na wysokości), przycinanie i pielęgnacja, zrębkowanie gałęzi, frezowanie pni. Włocławek, woj. kujawsko-pomorskie, mazowieckie, wielkopolskie, łódzkie. Darmowa wycena - zadzwoń.",
  metadataBase: new URL("https://treeservice.com.pl"),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.brand} - wycinka i pielęgnacja drzew`,
    description:
      "Trudne wycinki, praca na wysokości, frezowanie pni, zrębkowanie. Sprawnie, bezpiecznie, z porządkiem po każdej pracy. Darmowa wycena.",
    type: "website",
    locale: "pl_PL",
    siteName: site.brand,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.brandFull,
  founder: site.owner,
  telephone: site.phone.display,
  vatID: site.nip,
  description: intro_for_schema(),
  image: "https://treeservice.com.pl/assets/images/realizacje/hero.jpg",
  areaServed: site.area.cities.map((name) => ({ "@type": "City", name })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "kujawsko-pomorskie",
    addressCountry: "PL",
    addressLocality: site.area.base,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value.replace(",", "."),
    reviewCount: site.rating.count,
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: t.text,
  })),
};

function intro_for_schema() {
  return "Wycinka drzew prosta i trudna, na wysokości i w ograniczonej przestrzeni, przycinanie i pielęgnacja, zrębkowanie gałęzi rębakiem, frezowanie pni frezarką.";
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <head>
        <link
          rel="preload"
          href="/assets/webfonts/bricolage/bricolage-700-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/webfonts/bricolage/bricolage-700-latin-ext.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/webfonts/inter/inter-400-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* biome-ignore lint: dane strukturalne SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden pb-16 lg:pb-0">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
