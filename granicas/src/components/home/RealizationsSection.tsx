import { realizations } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImageSlot } from "@/components/ui/placeholder";
import { CallButton } from "@/components/ui/cta";

export default function RealizationsSection() {
  return (
    <section id="realizacje" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Zrealizowane zlecenia"
            title="Wybrane realizacje"
            description="Kilka przykładów z naszej codziennej pracy - od trudnych cięć sekcyjnych po porządkowanie terenu."
          />
          <div className="hidden sm:block">
            <CallButton />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {realizations.map((item) => (
            <figure
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm"
            >
              <ImageSlot
                src={item.image}
                label={item.title}
                alt={item.title}
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
              />
              {/* Podpis - zawsze widoczny gradient na dole */}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent p-5">
                <span className="inline-block rounded-full bg-cta/90 px-2.5 py-0.5 text-xs font-semibold text-cta-foreground">
                  {item.tag}
                </span>
                <p className="mt-2 font-semibold text-white">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <CallButton size="lg" />
        </div>
      </div>
    </section>
  );
}
