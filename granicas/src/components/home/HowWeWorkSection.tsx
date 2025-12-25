export default function HowWeWorkSection() {
  return (
    <section className="py-20 px-4 bg-background-light" id="jak-pracujemy">
      <div className="max-w-[1200] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
          Jak pracujemy
        </h2>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-10">
          Tutaj opiszemy prostymi krokami, jak wygląda proces od pierwszego
          kontaktu do posprzątanego podwórka. Na razie to sekcja placeholder.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border-color bg-white p-6">
            <p className="text-sm font-bold mb-2">1. Kontakt i zdjęcia</p>
            <p className="text-sm text-text-muted">
              Krótko opiszemy, jak klient wysyła zdjęcia i co dalej się dzieje.
            </p>
          </div>
          <div className="rounded-2xl border border-border-color bg-white p-6">
            <p className="text-sm font-bold mb-2">2. Wycena i termin</p>
            <p className="text-sm text-text-muted">
              Miejsce na opis szybkiej wyceny i umawiania dogodnego terminu.
            </p>
          </div>
          <div className="rounded-2xl border border-border-color bg-white p-6">
            <p className="text-sm font-bold mb-2">3. Realizacja i porządek</p>
            <p className="text-sm text-text-muted">
              Tutaj dodamy informacje o bezpiecznej pracy i sprzątaniu po
              zleceniu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
