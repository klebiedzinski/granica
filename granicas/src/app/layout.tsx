import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "treeservice - Profesjonalna wycinka drzew Włocławek",
  description:
    "Profesjonalna wycinka drzew i pielęgnacja zieleni we Włocławku i województwie Kujawsko-Pomorskim. Bezpieczeństwo, precyzja i porządek po zakończonej pracy.",
  metadataBase: new URL("https://treeservice.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "treeservice - Profesjonalna wycinka drzew Włocławek",
    description:
      "Kompleksowa obsługa zieleni wysokiej z wykorzystaniem technik alpinistycznych. Wycinka, pielęgnacja koron, frezowanie pni.",
    url: "/",
    siteName: "treeservice",
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
    <html className="light" lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-x-hidden selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
