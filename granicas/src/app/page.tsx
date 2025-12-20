export default function HomePage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 w-full">
        <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-sm rounded-full px-6 py-3 flex items-center justify-between w-full max-w-[960px]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              forest
            </span>
            <span className="text-lg font-bold tracking-tight text-text-main">
              treeservice
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              className="text-sm font-medium hover:text-text-muted transition-colors"
              href="#uslugi"
            >
              Usługi
            </a>
            <a
              className="text-sm font-medium hover:text-text-muted transition-colors"
              href="#o-nas"
            >
              O nas
            </a>
            <a
              className="text-sm font-medium hover:text-text-muted transition-colors"
              href="#cennik"
            >
              Cennik
            </a>
            <a
              className="text-sm font-medium hover:text-text-muted transition-colors"
              href="#realizacje"
            >
              Realizacje
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="hidden sm:flex bg-primary hover:bg-primary/80 transition-colors text-black text-sm font-bold px-5 py-2.5 rounded-full items-center justify-center"
              href="#kontakt"
            >
              Darmowa wycena
            </a>
            <button
              className="md:hidden p-1 text-text-main"
              aria-label="Otwórz menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      <header className="relative pt-32 pb-20 px-4 md:px-8 flex flex-col items-center justify-center min-h-[85vh]">
        <div className="max-w-[960px] w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-color w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                Dostępne terminy na ten tydzień
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
              Profesjonalna <br />
              <span className="relative inline-block z-10">
                <span className="relative z-10">wycinka drzew.</span>
                <span className="absolute bottom-1 left-0 w-full h-4 bg-primary/40 -z-0 rounded-sm" />
              </span>
            </h1>
            <p className="text-lg text-text-muted max-w-md leading-relaxed">
              Działamy we Włocławku i Kujawsko-Pomorskim. Zapewniamy
              bezpieczeństwo, precyzję i porządek po zakończonej pracy.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                className="bg-primary text-black font-bold text-base px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-200"
                href="#kontakt"
              >
                Zamów wycenę
              </a>
              <a
                className="bg-white border border-border-color text-text-main font-medium text-base px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors"
                href="#realizacje"
              >
                Zobacz realizacje
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="w-full h-full bg-black grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105" />
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-white/20 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">
                    verified
                  </span>
                  <span className="text-sm font-bold text-text-main">
                    Certyfikowani arboryści
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-white rounded-t-[3rem]" id="uslugi">
        <div className="max-w-[960px] mx-auto">
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
                Cięcia sanitarne, korygujące i prześwietlające. Redukcja korony
                w celu poprawy statyki i zdrowia drzewa.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-background-light hover:bg-white border border-transparent hover:border-border-color hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-text-main group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  forest
                </span>
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

      <section className="py-20 px-4 bg-background-light" id="o-nas">
        <div className="max-w-[960px] mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-border-color flex flex-col md:flex-row items-center gap-10 shadow-sm">
            <div className="relative shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20">
                <div className="w-full h-full bg-black" />
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-black p-2 rounded-full border-4 border-white">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Twój zaufany ekspert</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                "Jestem właścicielem i osobiście dbam o każdy projekt. Działamy
                we Włocławku i Kujawsko-Pomorskim, stawiając na absolutną
                transparentność, bezpieczeństwo i - co dla nas kluczowe -
                pozostawienie idealnego porządku po pracy."
              </p>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-left">
                  <span className="block text-3xl font-black text-text-main">
                    10+
                  </span>
                  <span className="text-sm text-text-muted font-medium">
                    Lat doświadczenia
                  </span>
                </div>
                <div className="w-px h-10 bg-border-color hidden md:block" />
                <div className="text-left">
                  <span className="block text-3xl font-black text-text-main">
                    500+
                  </span>
                  <span className="text-sm text-text-muted font-medium">
                    Usuniętych drzew
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white" id="cennik">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Przejrzyste zasady
            </h2>
            <p className="text-text-muted">
              Każde drzewo jest inne, dlatego ostateczną cenę ustalamy po
              darmowej wizji lokalnej lub na podstawie zdjęć. Poniżej
              orientacyjne stawki.
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

      <section className="py-20 px-4 bg-background-light" id="realizacje">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Realizacje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
            <div className="relative rounded-2xl overflow-hidden group row-span-2">
              <div className="w-full h-full bg-black transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">
                  Wycinka sekcyjna przy linii energetycznej
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="w-full h-full bg-black transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">
                  Porządkowanie terenu po wycince
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="w-full h-full bg-black transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Frezowanie pnia</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group md:col-span-2">
              <div className="w-full h-full bg-black transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">
                  Pielęgnacja starodrzewu w parku
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white" id="kontakt">
        <div className="max-w-[960px] mx-auto">
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
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
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

      <footer className="bg-text-main text-white py-12 px-4 rounded-t-[3rem]">
        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                forest
              </span>
              <span className="text-xl font-bold tracking-tight">
                treeservice
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Profesjonalna pielęgnacja zieleni.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a className="hover:text-primary transition-colors" href="#">
              Polityka prywatności
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Regulamin
            </a>
          </div>
          <div className="text-sm text-gray-500">
            © 2024 treeservice. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </>
  );
}
