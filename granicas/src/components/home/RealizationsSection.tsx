import Image from "next/image";
import Link from "next/link";

const realizacje = [
  {
    id: "wycinka-sekcyjna",
    title: "Wycinka sekcyjna przy linii energetycznej",
    image: "/expert.jpeg",
    className: "row-span-2",
  },
  {
    id: "porzadkowanie-terenu",
    title: "Porządkowanie terenu po wycince",
    image: "/expert.jpeg",
    className: "",
  },
  {
    id: "frezowanie-pnia",
    title: "Frezowanie pnia",
    image: "/expert.jpeg",
    className: "",
  },
  {
    id: "pielegnacja-starodrzewu",
    title: "Pielęgnacja starodrzewu w parku",
    image: "/expert.jpeg",
    className: "md:col-span-2",
  },
];

export default function RealizationsSection() {
  return (
    <section className="py-20 px-4 bg-secondary/10" id="realizacje">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-3">
            Zrealizowane zlecenia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Wybrane realizacje
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
          {realizacje.map((item) => (
            <Link
              key={item.id}
              href={`/realizacje/${item.id}`}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
