import { steps } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { CallButton } from "@/components/cta";

export default function Process() {
  return (
    <section
      id="jak-pracujemy"
      className="relative overflow-hidden bg-sage-deep py-20 text-white sm:py-28"
    >
      {/* poświata pod markę */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          dark
          eyebrow="Przejrzysty proces"
          title="Od pierwszego telefonu do posprzątanego terenu"
          // description="W trzech prostych krokach - bez niespodzianek i ukrytych kosztów."
        />

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* łącznik między krokami (desktop) */}
          <div
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-6 hidden border-t-2 border-dashed border-white/15 md:block"
            aria-hidden
          />

          {steps.map((s) => (
            <div key={s.number} className="relative text-center">
              <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full bg-accent-light text-lg font-extrabold text-sage-deep shadow-lg shadow-black/20 ring-4 ring-sage-deep">
                {s.number}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <CallButton size="lg" tone="onDark" />
          <p className="text-sm text-white/65">
            Darmowa wycena · bez ukrytych kosztów
          </p>
        </div>
      </div>
    </section>
  );
}
