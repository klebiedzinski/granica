export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-background-light" id="o-nas">
      <div className="max-w-[1200] mx-auto">
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
              "Jestem właścicielem i osobiście dbam o każdy projekt. Działamy we
              Włocławku i Kujawsko-Pomorskim, stawiając na absolutną
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
  );
}
