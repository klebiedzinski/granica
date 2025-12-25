import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tree Service - Profesjonalna wycinka drzew Włocławek",
  description:
    "Profesjonalna wycinka drzew i pielęgnacja zieleni we Włocławku i województwie Kujawsko-Pomorskim. Bezpieczeństwo, precyzja i porządek po zakończonej pracy.",
  metadataBase: new URL("https://treeservice.com.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tree Service - Profesjonalna wycinka drzew Włocławek",
    description:
      "Kompleksowa obsługa zieleni wysokiej z wykorzystaniem technik alpinistycznych. Wycinka, pielęgnacja koron, frezowanie pni.",
    url: "/",
    siteName: "Tree Service",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/symbol.ico" type="image/x-icon" />
      </head>
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
