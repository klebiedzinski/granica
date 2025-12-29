import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { WycenaForm } from "@/app/WycenaForm";

export default function FinalCtaSection() {
  return (
    <section className="py-24 px-4 bg-secondary/15" id="kontakt">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left - Content */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Darmowa wycena
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-main mb-4">
              Wyceń swoje <span className="text-primary">drzewo.</span>
            </h2>
            <p className="text-text-muted text-base mb-10 max-w-sm leading-relaxed">
              Wyślij zdjęcie i opis – otrzymasz wycenę i termin realizacji
              zwykle tego samego dnia.
            </p>

            {/* Contact options */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:kontakt@granica.pl"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
                </div>
                <span className="text-text-main text-base group-hover:text-primary transition-colors">
                  kontakt@granica.pl
                </span>
              </a>
              <a
                href="tel:+48123456789"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
                </div>
                <span className="text-text-main text-base group-hover:text-primary transition-colors">
                  +48 123 456 789
                </span>
              </a>
            </div>

            {/* Logo */}
            <div className="relative w-100 h-100 ">
              <Image
                src="/logo.png"
                alt="Granica logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right - Form in card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <WycenaForm />
          </div>
        </div>
      </div>
    </section>
  );
}
