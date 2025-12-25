"use client";

import { Axe, Leaf, Shovel, TreePine } from "lucide-react";

import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  className?: string;
}

const services = [
  {
    icon: <TreePine className="h-6 w-6" />,
    title: "Wycinka drzew",
    description:
      "Bezpieczna wycinka drzew w różnym terenie – od ogrodów przydomowych po trudne lokalizacje.",
    items: [
      "metodą tradycyjną",
      "metodą alpinistyczną",
      "z podnośnika koszowego",
    ],
  },

  {
    icon: <Axe className="h-6 w-6" />,
    title: "Usuwanie pni i zrębkowanie",
    description:
      "Usuwamy to, co zostaje po wycince – tak, aby teren był gotowy do dalszego użytku.",
    items: [
      "frezowanie pni poniżej poziomu gruntu",
      "zrębkowanie gałęzi na miejscu",
      "uprzątnięcie i przygotowanie terenu",
    ],
  },
  {
    icon: <Shovel className="h-6 w-6" />,
    title: "Prace minikoparką",
    description:
      "Drobne prace ziemne przy okazji wycinki – bez angażowania dużego sprzętu.",
    items: [
      "wykopy pod nasadzenia lub ogrodzenia",
      "usuwanie pozostałości po korzeniach",
    ],
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Przycinanie i pielęgnacja",
    description:
      "Utrzymanie drzew w dobrej kondycji – redukcja zagrożeń i poprawa estetyki koron.",
    items: [
      "cięcia sanitarne i korygujące",
      "usuwanie suchych i niebezpiecznych gałęzi",
    ],
  },
];

export default function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      id="uslugi"
      className={cn("py-20 px-4 bg-white rounded-t-[3rem]", className)}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Usługi arborystyczne
            </h2>
            <p className="text-black/60 text-lg">
              Od pojedynczego drzewa po duże zadrzewione działki – dobieramy
              metodę pracy do miejsca, bezpieczeństwa otoczenia i Twojego
              budżetu.
            </p>
          </div>
          <a
            className="text-text-main font-bold border-b-2 border-primary hover:bg-primary/20 transition-colors pb-0.5"
            href="#kontakt"
          >
            Zapytaj o inną usługę
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title + index}
              className="space-y-3 rounded-2xl border border-border-color bg-background-light p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/15 text-text-main p-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
              </div>
              <p className="leading-relaxed text-black/60">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={item + itemIndex}
                    className="flex items-center gap-2 text-sm font-medium "
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <p className="text-text-muted text-md font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
