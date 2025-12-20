export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-white" id="kontakt">
      <div className="max-w-[1200] mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest uppercase mb-2">
              Kontakt
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              Masz drzewo do wycięcia?
            </h2>
            <div className="flex flex-col gap-6">
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
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full bg-background-light border border-border-color flex items-center justify-center">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted">
                    Obszar działania
                  </p>
                  <p className="text-lg font-bold">
                    Włocławek i woj. Kujawsko-Pomorskie
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-light rounded-3xl p-8 border border-border-color">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold ml-2" htmlFor="name">
                  Imię i nazwisko
                </label>
                <input
                  className="w-full bg-white rounded-xl border-border-color p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  id="name"
                  placeholder="Jan Kowalski"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold ml-2" htmlFor="phone">
                  Telefon
                </label>
                <input
                  className="w-full bg-white rounded-xl border-border-color p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  id="phone"
                  placeholder="+48 ..."
                  type="tel"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold ml-2" htmlFor="message">
                  Opis zlecenia
                </label>
                <textarea
                  className="w-full bg-white rounded-xl border-border-color p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  id="message"
                  placeholder="Opisz krótko co jest do zrobienia..."
                  rows={4}
                />
              </div>
              <button
                className="mt-2 bg-primary hover:bg-[#65a30d] text-black font-bold py-4 px-6 rounded-full w-full transition-colors flex items-center justify-center gap-2"
                type="submit"
              >
                Wyślij zapytanie
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
