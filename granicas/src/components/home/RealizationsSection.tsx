export default function RealizationsSection() {
  return (
    <section className="py-20 px-4 bg-background-light" id="realizacje">
      <div className="max-w-[1200] mx-auto">
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
  );
}
