export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-white rounded-t-[3rem]" id="uslugi">
      <div className="max-w-[1200] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Nasze usługi
            </h2>
            <p className="text-text-muted text-lg max-w-md">
              Kompleksowa obsługa zieleni wysokiej z wykorzystaniem technik
              alpinistycznych.
            </p>
          </div>
          <a
            className="text-text-main font-bold border-b-2 border-primary hover:bg-primary/20 transition-colors pb-0.5"
            href="#kontakt"
          >
            Zapytaj o inną usługę
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-8 rounded-2xl bg-background-light hover:bg-white border border-transparent hover:border-border-color hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-text-main group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-3xl">
                nature_people
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">Wycinka sekcyjna</h3>
            <p className="text-text-muted leading-relaxed">
              Bezpieczne usuwanie drzew w trudnym terenie (przy budynkach,
              liniach energetycznych) przy użyciu technik linowych.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-background-light hover:bg-white border border-transparent hover:border-border-color hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-text-main group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-3xl">cut</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Pielęgnacja koron</h3>
            <p className="text-text-muted leading-relaxed">
              Cięcia sanitarne, korygujące i prześwietlające. Redukcja korony w
              celu poprawy statyki i zdrowia drzewa.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-background-light hover:bg-white border border-transparent hover:border-border-color hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-text-main group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-3xl">forest</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Frezowanie pni</h3>
            <p className="text-text-muted leading-relaxed">
              Mechaniczne usuwanie pni poniżej poziomu gruntu oraz zrąbkowanie
              gałęzi po wycince. Pozostawiamy porządek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
