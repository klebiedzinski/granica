import { Phone } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { site } from "@/lib/site";

/** Pływający pasek na dole - tylko mobile. Zawsze pod kciukiem. */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="flex items-stretch gap-2 border-t border-line bg-background/95 px-3 py-2.5 shadow-[0_-4px_20px_-4px_rgba(20,36,26,0.15)] backdrop-blur">
        <a
          href={site.phone.href}
          className="flex flex-[2] items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-white shadow-md active:scale-[0.98]"
        >
          <Phone className="size-4 shrink-0" aria-hidden />
          Zadzwoń {site.phone.short}
        </a>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Napisz na WhatsApp"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-primary/25 bg-white px-4 py-3 text-sm font-semibold text-primary active:scale-[0.98]"
        >
          <IconBrandWhatsapp className="size-5 shrink-0" aria-hidden />
          <span className="sr-only sm:not-sr-only">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
