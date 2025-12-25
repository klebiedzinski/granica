import Navbar from "@/components/home/Navbar";
import { WycenaForm } from "./WycenaForm";
import { LucideVerified } from "lucide-react";

export default function WycenaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 md:px-8">
        <section className="max-w-[800px] mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Darmowa wycena wycinki drzewa
          </h1>
          <p className="text-text-muted max-w-xl mx-auto">
            Wyślij zdjęcie drzewa lub miejsca, w którym mamy pracować –
            oddzwonimy z konkretną wyceną i terminem.
          </p>
        </section>

        <section className="max-w-[800px] mx-auto">
          <WycenaForm />

          <div className="grid gap-4 md:grid-cols-3 text-sm text-text-muted">
            <div className="rounded-2xl border border-border-color bg-white p-4 flex flex-col gap-1">
              <LucideVerified />
              <p className="font-bold">Ubezpieczenie OC</p>
              <p>
                Tutaj dodamy informację o polisach i bezpieczeństwie prac na
                wysokości.
              </p>
            </div>
            <div className="rounded-2xl border border-border-color bg-white p-4 flex flex-col gap-1">
              <LucideVerified />
              <p className="font-bold">Bezpieczna realizacja</p>
              <p>
                Sekcja na opis procedur bezpieczeństwa przy wycince i
                pielęgnacji.
              </p>
            </div>
            <div className="rounded-2xl border border-border-color bg-white p-4 flex flex-col gap-1">
              <span className="material-symbols-outlined text-primary text-lg">
                cleaning_services
              </span>
              <p className="font-bold">Sprzątamy po pracy</p>
              <p>
                Krótka informacja o pozostawieniu porządku po zakończeniu
                zlecenia.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
