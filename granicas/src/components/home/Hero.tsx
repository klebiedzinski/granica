import Image from "next/image";
import Link from "next/link";
import { Boxes } from "@/components/ui/background-boxes";
import { Highlight } from "@/components/ui/hero-highlight";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative h-screen bg-primary pt-32 pb-20 px-4 md:px-8 flex items-center justify-center overflow-hidden">
      <Boxes />
      <div className="relative z-10 max-w-[1200px] w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Profesjonalny sprzęt • Certyfikowany arborysta
          </p>
          <h1 className="text-5xl md:text-5xl font-black leading-[1.1] tracking-tight text-white">
            Profesjonalna <Highlight>wycinka drzew</Highlight>
          </h1>
          <p className="text-lg text-white/70 max-w-md leading-relaxed">
            Działamy we Włocławku i Kujawsko-Pomorskim. Zapewniamy
            bezpieczeństwo, precyzję i porządek po zakończonej pracy.
          </p>
          <div className="flex gap-3 pt-2">
            <Link
              className="bg-white text-primary font-bold text-sm md:text-base px-5 md:px-8 py-3 md:py-3.5 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
              href="/wycena"
            >
              Darmowa wycena
            </Link>
            <Link
              className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-medium text-sm md:text-base px-5 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-white/25 transition-colors"
              href="/realizacje"
            >
              Realizacje
            </Link>
          </div>
        </div>

        <div className="hidden md:block relative order-1 md:order-2">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden group">
            <Image
              src="/expert.jpeg"
              alt="Granica Treeservice logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-wider">Przewiń w dół</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </header>
  );
}
