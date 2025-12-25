import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-white" id="kontakt">
      <div className="max-w-[1200] mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div className="flex flex-col justify-center">
          <span className="text-primary font-bold tracking-widest uppercase mb-2">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-text-muted mb-6 max-w-md">
            Możesz zadzwonić, napisać e-mail albo skorzystać z formularza na
            stronie darmowej wyceny.
          </p>
          <div className="flex flex-col gap-4">
            <a
              className="group flex items-center gap-4 text-text-main hover:text-text-muted transition-colors"
              href="tel:+48123456789"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-black">
                  call
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-text-muted">
                  Zadzwoń do nas
                </p>
                <p className="text-2xl font-bold">+48 123 456 789</p>
              </div>
            </a>
            <a
              className="group flex items-center gap-4 text-text-main hover:text-text-muted transition-colors"
              href="mailto:kontakt@treeservice.pl"
            >
              <div className="w-12 h-12 rounded-full bg-background-light border border-border-color flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-sm font-medium text-text-muted">
                  Napisz e-mail
                </p>
                <p className="text-xl font-bold">kontakt@treeservice.pl</p>
              </div>
            </a>
            <Link
              href="/wycena"
              className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-text-main border-b-2 border-primary hover:bg-primary/10 transition-colors w-fit pb-0.5"
            >
              Przejdź do formularza darmowej wyceny
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-border-color bg-background-light p-8 text-sm text-text-muted">
          <p className="font-bold mb-2">Obszar działania</p>
          <p>
            Włocławek i woj. kujawsko-pomorskie oraz sąsiednie miejscowości.
            Dokładne informacje o obszarze pracy rozwiniemy w osobnej sekcji.
          </p>
        </div>
      </div>
    </section>
  );
}
