import { MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { CallButton, WhatsAppButton } from "@/components/cta";
import AreaMap from "@/components/AreaMap";

export default function Area() {
  return (
    <section
      id="obszar"
      className="relative overflow-hidden bg-sage-deep py-20 text-white sm:py-28"
    >
      {/* poświata pod markę */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 size-[34rem] rounded-full bg-accent-light/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            dark
            eyebrow="Obszar działania"
            title="Gdzie pracujemy"
            description="Baza we Włocławku - dojeżdżamy do czterech województw, także na pilne zgłoszenia."
          />

          {/* województwa */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {site.area.regions.map((r) => (
              <li
                key={r}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15"
              >
                <MapPin className="size-3.5 shrink-0" aria-hidden />
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton size="lg" tone="onDark" />
            <WhatsAppButton size="lg" tone="onDark" />
          </div>
          <p className="mt-6  text-sm text-white/85">
            Nie widzisz swojej miejscowości? Zadzwoń i podaj adres, potwierdzimy
            dostępność.
          </p>
        </div>

        <div>
          <AreaMap />
          <p className="mt-3 text-sm text-white/70">
            Dojeżdżamy m.in. do: {site.area.cities.join(", ")}.
          </p>
        </div>
      </div>
    </section>
  );
}
