import {
  Axe,
  Scissors,
  Leaf,
  CircleDot,
  Shovel,
  Truck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  Axe,
  Scissors,
  Leaf,
  CircleDot,
  Shovel,
  Truck,
};

// Zdjęcie obok listy usług - podmień ścieżkę, jeśli chcesz inny kadr.
const SERVICES_IMAGE = "/assets/images/realizacje/wycinka-sekcyjna.jpg";

export default function Services() {
  return (
    <section id="uslugi" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* lewa: nagłówek + lista usług */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-primary">
            Szybko i bezpiecznie
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl">
            Kompleksowe usługi
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">
            Pełen zakres prac przy drzewach - od trudnej wycinki po porządek na
            działce. Jeden wykonawca od początku do końca.
          </p>

          <div className="mt-10 space-y-7">
            {services.map((s) => {
              const Icon = iconMap[s.icon] ?? Axe;
              return (
                <div key={s.id} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* prawa: zdjęcie na całą wysokość */}
        <div className="relative min-h-[340px] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-foreground/5 lg:min-h-full">
          <Image
            src={SERVICES_IMAGE}
            alt="Wycinka sekcyjna drzewa - praca arborysty"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
