export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-white" id="opinie">
      <div className="max-w-[1200] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
          Opinie klientów
        </h2>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
          Wkrótce dodamy tutaj wybrane opinie klientów. Na razie możesz
          zadzwonić lub wysłać zdjęcie drzewa do wyceny.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border-color bg-background-light p-6 text-sm text-text-muted text-center">
            Placeholder na opinię klienta.
          </div>
          <div className="rounded-2xl border border-border-color bg-background-light p-6 text-sm text-text-muted text-center hidden md:block">
            Placeholder na opinię klienta.
          </div>
          <div className="rounded-2xl border border-border-color bg-background-light p-6 text-sm text-text-muted text-center hidden md:block">
            Placeholder na opinię klienta.
          </div>
        </div>
      </div>
    </section>
  );
}
