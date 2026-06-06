import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-sage-deep px-5 pb-10 pt-14 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
        <div className="space-y-4">
          <Image
            src="/logo.png"
            alt={`${site.brand} logo`}
            width={160}
            height={50}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="max-w-sm text-sm">
            Wycinka i pielęgnacja drzew. Sprawnie, bezpiecznie, z porządkiem po
            każdej pracy.
          </p>
          <p className="text-xs text-white/40">
            {site.brandFull} · NIP {site.nip}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="mb-1 text-base font-semibold text-white">Usługi</h4>
          <ul className="space-y-1.5">
            <li>Wycinka drzew (prosta i trudna)</li>
            <li>Przycinanie i pielęgnacja koron</li>
            <li>Zrębkowanie gałęzi i frezowanie pni</li>
            <li>Usługi minikoparką</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="mb-1 text-base font-semibold text-white">Kontakt</h4>
          <a
            href={site.phone.href}
            className="flex items-center gap-2 font-semibold text-accent-light transition-colors hover:text-white"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone.display}
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <IconBrandWhatsapp className="size-4" aria-hidden />
            WhatsApp
          </a>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
            {site.area.base} i okolice · woj. {site.area.regions.join(", ")}
          </p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl text-center text-xs text-white/40">
        © {new Date().getFullYear()} {site.brandFull}. Wszelkie prawa
        zastrzeżone.
      </p>
    </footer>
  );
}
