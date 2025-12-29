"use client";

import { Axe, Leaf, Shovel, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  className?: string;
}

const services = [
  {
    icon: <TreePine className="h-5 w-5" />,
    title: "Wycinka drzew",
    description:
      "Bezpieczna wycinka drzew w różnym terenie – od ogrodów przydomowych po trudne lokalizacje przy budynkach i liniach energetycznych. Stosujemy metodę tradycyjną, alpinistyczną lub z podnośnika koszowego. Każde zlecenie poprzedzamy oceną stanu drzewa i planu działania.",
    features: ["Metoda alpinistyczna", "Podnośnik koszowy", "Wycinka sekcyjna"],
  },
  {
    icon: <Axe className="h-5 w-5" />,
    title: "Usuwanie pni i zrębkowanie",
    description:
      "Kompleksowe usuwanie tego, co zostaje po wycince. Frezowanie pni poniżej poziomu gruntu pozwala na natychmiastowe zagospodarowanie terenu. Zrębkowanie gałęzi na miejscu – zrębki możesz wykorzystać jako ściółkę w ogrodzie.",
    features: ["Frezowanie pni", "Zrębkowanie gałęzi", "Wywóz biomasy"],
  },
  {
    icon: <Shovel className="h-5 w-5" />,
    title: "Prace minikoparką",
    description:
      "Drobne prace ziemne przy okazji wycinki lub jako osobna usługa. Wykopy pod nasadzenia, fundamenty ogrodzeń, usuwanie pozostałości po korzeniach. Minikoparka sprawdza się w miejscach o ograniczonym dostępie.",
    features: [
      "Wykopy i niwelacja",
      "Usuwanie korzeni",
      "Przygotowanie terenu",
    ],
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Przycinanie i pielęgnacja",
    description:
      "Profesjonalna pielęgnacja drzew zgodna z zasadami arborystyki. Cięcia sanitarne usuwające chore i suche gałęzie, cięcia korygujące poprawiające strukturę korony, redukcja korony dla bezpieczeństwa i estetyki.",
    features: [
      "Cięcia sanitarne",
      "Redukcja korony",
      "Formowanie młodych drzew",
    ],
  },
];

export default function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      id="uslugi"
      className={cn(
        "min-h-screen py-24 px-4 bg-secondary/15 flex items-center",
        className
      )}
    >
      <div className="max-w-[1100px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Usługi arborystyczne
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main mb-4">
            Wszystko, czego potrzebujesz
            <br className="hidden md:block" /> do zadbania o drzewa
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Od pojedynczego drzewa po duże zadrzewione działki – dobieramy
            metodę pracy do miejsca, bezpieczeństwa otoczenia i Twojego budżetu.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {services.map((service, index) => (
            <div key={service.title + index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary">{service.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-main mb-2">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
