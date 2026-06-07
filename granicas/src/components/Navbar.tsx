import Image from "next/image";
import { site } from "@/lib/site";
import { CallButton } from "@/components/cta";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-sage-deep text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={site.brandFull}
        >
          <Image
            src="/symbol.png"
            alt={site.brand}
            width={44}
            height={44}
            className="h-10 w-10 brightness-0 invert"
            priority
          />
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            {site.brand}
          </span>
        </a>

        {/* Mobile: kompaktowe „Zadzwoń" bez numeru (oszczędza miejsce) */}
        <CallButton tone="onDark" showNumber={false} className="sm:hidden" />
        {/* sm+: pełne „Zadzwoń {numer}" */}
        <CallButton tone="onDark" className="hidden sm:inline-flex" />
      </nav>
    </header>
  );
}
