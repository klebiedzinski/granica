import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import { ArrowLeft } from "lucide-react";

const realizacje: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    details: string[];
  }
> = {
  "wycinka-sekcyjna": {
    title: "Wycinka sekcyjna przy linii energetycznej",
    description:
      "Precyzyjna wycinka dużego dębu rosnącego w bezpośrednim sąsiedztwie linii energetycznej. Praca wymagała szczególnej ostrożności i zastosowania techniki sekcyjnej z opuszczaniem każdego fragmentu na linach.",
    image: "/expert.jpeg",
    details: [
      "Lokalizacja: Włocławek",
      "Wysokość drzewa: 18 metrów",
      "Metoda: wycinka sekcyjna z opuszczaniem",
      "Czas realizacji: 1 dzień",
    ],
  },
  "porzadkowanie-terenu": {
    title: "Porządkowanie terenu po wycince",
    description:
      "Kompleksowe uporządkowanie działki po wycince kilkunastu drzew. Zrębkowanie gałęzi, frezowanie pni i wyrównanie terenu.",
    image: "/expert.jpeg",
    details: [
      "Lokalizacja: okolice Włocławka",
      "Zakres: 15 drzew + porządkowanie",
      "Metoda: zrębkowanie + frezowanie",
      "Czas realizacji: 3 dni",
    ],
  },
  "frezowanie-pnia": {
    title: "Frezowanie pnia",
    description:
      "Usunięcie pnia po ściętym drzewie metodą frezowania. Pień został sfrezowany 20 cm poniżej poziomu gruntu, co umożliwiło natychmiastowe założenie trawnika.",
    image: "/expert.jpeg",
    details: [
      "Lokalizacja: Włocławek",
      "Średnica pnia: 60 cm",
      "Głębokość frezowania: 20 cm",
      "Czas realizacji: 2 godziny",
    ],
  },
  "pielegnacja-starodrzewu": {
    title: "Pielęgnacja starodrzewu w parku",
    description:
      "Profesjonalna pielęgnacja zabytkowych dębów w parku miejskim. Cięcia sanitarne, usuwanie posuszu i redukcja korony dla bezpieczeństwa spacerujących.",
    image: "/expert.jpeg",
    details: [
      "Lokalizacja: park miejski",
      "Zakres: 8 drzew",
      "Metoda: cięcia pielęgnacyjne z podnośnika",
      "Czas realizacji: 2 dni",
    ],
  },
};

export default async function RealizacjaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const realizacja = realizacje[id];

  if (!realizacja) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-28 px-4 bg-secondary/15">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">
              Realizacja nie znaleziona
            </h1>
            <Link href="/#realizacje" className="text-primary font-semibold">
              Wróć do realizacji
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-4 bg-secondary/15">
        <div className="max-w-[900px] mx-auto">
          {/* Back link */}
          <Link
            href="/#realizacje"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć do realizacji
          </Link>

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main mb-6">
            {realizacja.title}
          </h1>

          {/* Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src={realizacja.image}
              alt={realizacja.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div>
              <h2 className="text-xl font-semibold text-text-main mb-4">
                Opis projektu
              </h2>
              <p className="text-text-muted leading-relaxed">
                {realizacja.description}
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border-color p-6">
              <h3 className="text-lg font-semibold text-text-main mb-4">
                Szczegóły
              </h3>
              <ul className="space-y-3">
                {realizacja.details.map((detail, index) => (
                  <li key={index} className="text-sm text-text-muted">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Potrzebujesz podobnej usługi?
            </h3>
            <p className="text-white/70 mb-6">
              Skontaktuj się z nami – wycena jest bezpłatna.
            </p>
            <Link
              href="/wycena"
              className="inline-flex bg-white text-primary font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Poproś o wycenę
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
