import { VerifiedIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 px-4 md:px-8 flex flex-col items-center justify-center min-h-[85vh]">
      <div className="max-w-[1200] w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-color w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
              Dostępne terminy na ten tydzień
            </span>
          </div>
          <h1 className="text-5xl md:text-5xl font-black leading-[1.1] tracking-tight">
            Profesjonalna wycinka drzew
          </h1>
          <p className="text-lg text-text-muted max-w-md leading-relaxed">
            Działamy we Włocławku i Kujawsko-Pomorskim. Zapewniamy
            bezpieczeństwo, precyzję i porządek po zakończonej pracy.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              className="bg-primary text-white font-bold text-base px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-200"
              href="/wycena"
            >
              Darmowa wycena
            </Link>
            <Link
              className="bg-white border border-border-color text-text-main font-medium text-base px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors"
              href="/realizacje"
            >
              Zobacz realizacje
            </Link>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <div className="w-full h-full bg-black grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105" />
            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-white/20 shadow-sm">
              <div className="flex items-center gap-2">
                <VerifiedIcon />
                Certyfikowany arborysta
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
