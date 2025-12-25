import Navbar from "@/components/home/Navbar";
import Link from "next/link";

export default function RealizacjePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 md:px-8">
        <section className="max-w-[1200] mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Nasze realizacje – wycinka i pielęgnacja drzew
          </h1>
          <p className="text-text-muted max-w-2xl">
            Ta strona będzie miejscem na aktualne realizacje – z krótkim opisem,
            zdjęciem i oznaczeniem miasta oraz rodzaju usługi. Na start to
            placeholder do dalszego rozwoju.
          </p>
        </section>

        <section className="max-w-[1200] mx-auto mb-10">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
            <p className="text-sm text-text-muted">
              W przyszłości dodamy tu proste filtry po mieście i typie usługi.
            </p>
            <div className="flex gap-3 text-sm">
              <button className="px-4 py-2 rounded-full border border-border-color bg-white text-text-muted">
                Miasto (placeholder)
              </button>
              <button className="px-4 py-2 rounded-full border border-border-color bg-white text-text-muted">
                Typ usługi (placeholder)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <article
                key={index}
                className="rounded-2xl border border-border-color bg-white overflow-hidden flex flex-col"
              >
                <div className="h-40 bg-black/60" />
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <h2 className="font-bold text-base">
                    Wycinka drzewa po wichurze – Włocławek (placeholder)
                  </h2>
                  <div className="flex flex-wrap gap-2 text-[11px] text-text-muted">
                    <span className="px-2 py-1 rounded-full bg-background-light border border-border-color">
                      #wycinka
                    </span>
                    <span className="px-2 py-1 rounded-full bg-background-light border border-border-color">
                      #po-wichurze
                    </span>
                    <span className="px-2 py-1 rounded-full bg-background-light border border-border-color">
                      #alpinistyka
                    </span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Tu pojawi się krótki opis realizacji – bez osobnej
                    podstrony, w formie karty i ewentualnego lightboxa ze
                    zdjęciami.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-[1200] mx-auto mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Masz podobny problem?
          </h2>
          <p className="text-text-muted max-w-xl mx-auto mb-6">
            Zrób zdjęcie drzewa lub sytuacji i wyślij je przez formularz
            darmowej wyceny. Wrócimy z konkretną propozycją rozwiązania.
          </p>
          <Link
            href="/wycena"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold text-base px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-200"
          >
            Wyślij zdjęcie do darmowej wyceny
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
