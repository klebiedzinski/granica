import { Phone, Clock, Zap } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-sage-deep px-5 py-20 text-white sm:py-28"
    >
      {/* poświata pod markę */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-balance sm:text-5xl">
          Masz drzewo do wycięcia?
          <br />
          Zadzwoń - wycenimy je od ręki.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
          Jeden telefon i znasz cenę oraz termin. Wyślij zdjęcie drzewa na
          WhatsApp - oddzwonimy z wyceną.
        </p>

        {/* duży numer telefonu */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.phone.href}
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-8 py-5 text-xl font-extrabold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            <Phone className="size-6" aria-hidden />
            {site.phone.display}
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg border-2 border-white/25 px-8 py-5 text-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            <IconBrandWhatsapp className="size-6" aria-hidden />
            WhatsApp
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/70">
          <Clock className="size-4 text-accent-light" aria-hidden />
          Odbieramy 7 dni w tygodniu
        </p>
      </div>
    </section>
  );
}
