export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-white" id="cennik">
      <div className="max-w-[1200] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Przejrzyste zasady
          </h2>
          <p className="text-text-muted">
            Każde drzewo jest inne, dlatego ostateczną cenę ustalamy po darmowej
            wizji lokalnej lub na podstawie zdjęć. Poniżej orientacyjne stawki.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border-color">
          <table className="w-full text-left border-collapse">
            <thead className="bg-background-light text-text-muted text-sm uppercase tracking-wider">
              <tr>
                <th className="p-6 font-semibold border-b border-border-color">
                  Usługa
                </th>
                <th className="p-6 font-semibold border-b border-border-color">
                  Zakres
                </th>
                <th className="p-6 font-semibold border-b border-border-color text-right">
                  Cena orientacyjna
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              <tr className="hover:bg-background-light/50 transition-colors">
                <td className="p-6 font-medium">Wycinka tradycyjna</td>
                <td className="p-6 text-text-muted">
                  Drzewa bez przeszkód w otoczeniu
                </td>
                <td className="p-6 font-bold text-right whitespace-nowrap">
                  od 150 zł
                </td>
              </tr>
              <tr className="hover:bg-background-light/50 transition-colors">
                <td className="p-6 font-medium">
                  Wycinka sekcyjna (alpinistyczna)
                </td>
                <td className="p-6 text-text-muted">
                  Drzewa trudne, nad budynkami
                </td>
                <td className="p-6 font-bold text-right whitespace-nowrap">
                  od 350 zł
                </td>
              </tr>
              <tr className="hover:bg-background-light/50 transition-colors">
                <td className="p-6 font-medium">Pielęgnacja korony</td>
                <td className="p-6 text-text-muted">
                  Usuwanie posuszu, korekta
                </td>
                <td className="p-6 font-bold text-right whitespace-nowrap">
                  od 200 zł
                </td>
              </tr>
              <tr className="hover:bg-background-light/50 transition-colors">
                <td className="p-6 font-medium">Frezowanie pni</td>
                <td className="p-6 text-text-muted">
                  Usunięcie pnia do 20cm poniżej gruntu
                </td>
                <td className="p-6 font-bold text-right whitespace-nowrap">
                  od 3 zł / cm obwodu
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <a
            className="inline-flex items-center gap-2 text-sm font-bold text-text-main border border-border-color px-6 py-3 rounded-full hover:bg-background-light transition-colors"
            href="#kontakt"
          >
            <span className="material-symbols-outlined text-lg text-primary">
              photo_camera
            </span>
            Prześlij zdjęcie do wyceny
          </a>
        </div>
      </div>
    </section>
  );
}
