export default function AreaSection() {
  return (
    <section className="py-20 px-4 bg-secondary/15" id="obszar-dzialania">
      <div className="max-w-[1200] mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-secondary/15 text-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-3">
            Obszar działania
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Gdzie pracujemy
          </h2>
          <p className="text-text-muted mb-4">
            Naszą bazą jest Włocławek, ale dojeżdżamy w całym województwie
            kujawsko-pomorskim i okolicznych regionach.
          </p>
          <p className="text-text-muted">
            Ten blok jest placeholderem. Później możemy dodać dokładną mapę,
            listę miast oraz informacje o dojeździe.
          </p>
        </div>
        <div className="rounded-3xl border border-primary/20 bg-white h-64 md:h-80 flex items-center justify-center text-text-muted text-sm shadow-sm">
          Placeholder na mapę / grafikę obszaru działania.
        </div>
      </div>
    </section>
  );
}
