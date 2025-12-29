import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna – Włocławek",
    text: "Profesjonalna ekipa, wszystko zrobione bezpiecznie i bardzo dokładnie. Po wycince ogród był posprzątany jak przed pracami.",
    job: "Wycinka drzewa przy domu jednorodzinnym",
    date: "Listopad 2024",
  },
  {
    name: "Marek – okolice Torunia",
    text: "Trudne drzewo przy linii energetycznej usunięte bez żadnych szkód. Świetny kontakt i jasne warunki współpracy.",
    job: "Wycinka drzewa przy linii energetycznej",
    date: "Wrzesień 2024",
  },
  {
    name: "Joanna – działka rekreacyjna",
    text: "Doradzili, które drzewa wystarczy przyciąć zamiast wycinać. Doceniam uczciwe podejście i dokładne zabezpieczenie terenu.",
    job: "Przycinanie i zabezpieczenie drzew przy domku letniskowym",
    date: "Czerwiec 2024",
  },
  {
    name: "Piotr – właściciel firmy",
    text: "Szybka reakcja po wichurze, sprawne usunięcie powalonych drzew i gałęzi z parkingu. Polecam do zadań specjalnych.",
    job: "Usunięcie powalonych drzew z firmowego parkingu",
    date: "Styczeń 2025",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-primary" id="opinie">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 text-center">
          Opinie klientów
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-center text-white">
          Zaufali nam właściciele działek i domów
        </h2>

        <p className="text-center text-md text-white/70 mb-10">
          <span className="text-secondary mr-1">★★★★★</span> 4.9/5 na podstawie
          30+ realizacji
        </p>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={item.name + index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <TestimonialCard item={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <CarouselPrevious className="static translate-y-0 border-0 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="static translate-y-0 border-0 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
          </div>
          <CarouselPrevious className="hidden md:flex border-0 bg-transparent text-white hover:bg-white/10 hover:text-white" />
          <CarouselNext className="hidden md:flex border-0 bg-transparent text-white hover:bg-white/10 hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}

interface TestimonialProps {
  item: {
    name: string;
    text: string;
    job: string;
    date: string;
  };
}

function TestimonialCard({ item }: TestimonialProps) {
  return (
    <div className="h-full rounded-2xl bg-white/10 p-6 flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/90 text-sm md:text-base leading-relaxed italic mb-6 flex-grow">
        "{item.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-white font-semibold text-sm">
          {item.name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{item.name}</p>
          <p className="text-white/50 text-xs">{item.job}</p>
        </div>
      </div>
    </div>
  );
}
