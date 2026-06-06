import Image from "next/image";
import { Check } from "lucide-react";
import { site, intro } from "@/lib/site";
import { CallButton } from "@/components/cta";

const points = [
  "Osobiście dbam o każde zlecenie - bez podwykonawców",
  "Odpowiednie szkolenia i atestowany sprzęt",
  "Trudne cięcia na wysokości i w ciasnej przestrzeni",
  "Po pracy zostaje czysto - sprzątamy teren",
];

export default function About() {
  return (
    <section id="o-nas" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-foreground/5">
            <Image
              src="/assets/images/realizacje/wycinka-zima.jpg"
              alt="Jakub Graniczny podczas pracy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            O nas
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-balance sm:text-4xl">
            Twój wykonawca:{" "}
            <span className="text-primary">{site.owner.split(" ")[0]}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {intro.lead}
          </p>
          <p className="mt-4 font-semibold text-foreground">{intro.tagline}</p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CallButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
