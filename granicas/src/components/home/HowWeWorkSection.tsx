"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const steps = [
  {
    number: 1,
    title: "Kontakt i zdjęcia",
    description:
      "Wyślij nam zdjęcie drzewa przez formularz lub WhatsApp. Opisz sytuację – czy drzewo jest blisko budynku, linii energetycznej, czy wymaga specjalnego dostępu. Im więcej szczegółów, tym dokładniejsza wycena.",
    image: "/logo.png",
  },
  {
    number: 2,
    title: "Wycena i termin",
    description:
      "Oddzwonimy z konkretną ceną i zaproponujemy termin realizacji – zwykle w ciągu kilku godzin. Bez ukrytych kosztów, bez niespodzianek. Jeśli potrzebna wizja lokalna, umawiamy się bezpłatnie.",
    image: "/logo.png",
  },
  {
    number: 3,
    title: "Realizacja i porządek",
    description:
      "Przyjeżdżamy ze sprzętem, zabezpieczamy teren i wykonujemy pracę bezpiecznie. Po zakończeniu sprzątamy – zostawiamy działkę gotową do użytku. Gałęzie zrębkujemy lub zabieramy.",
    image: "/logo.png",
  },
];

export default function HowWeWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 px-4 bg-primary" id="jak-pracujemy">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Przejrzysty proces
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Jak pracujemy
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Od pierwszego kontaktu do posprzątanego podwórka – w trzech prostych
            krokach.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          {/* Animated line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px bg-secondary -translate-x-1/2 hidden md:block"
          />

          {/* Steps */}
          <div className="space-y-16 md:space-y-32">
            {steps.map((step) => {
              const imageOnLeft = step.number % 2 !== 0;

              return (
                <div
                  key={step.number}
                  className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center"
                >
                  {/* Mobile: zdjęcie + numer + tekst */}
                  <div className="md:hidden space-y-4">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain p-8 opacity-50"
                      />
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-lg">
                          {step.number}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Left side */}
                  <div className="hidden md:block md:order-1">
                    {imageOnLeft ? (
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-contain p-8 opacity-50"
                        />
                      </div>
                    ) : (
                      <div className="space-y-4 text-right">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-white/60 text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Desktop: Center number */}
                  <div className="hidden md:flex md:order-2 justify-center">
                    <div className="relative z-10 w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Desktop: Right side */}
                  <div className="hidden md:block md:order-3">
                    {imageOnLeft ? (
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-white/60 text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-contain p-8 opacity-50"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
