import { Phone } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Size = "md" | "lg";
const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm gap-2",
  lg: "px-7 py-4 text-base gap-2.5",
};

export function CallButton({
  size = "md",
  showNumber = true,
  tone = "default",
  className,
}: {
  size?: Size;
  showNumber?: boolean;
  tone?: "default" | "onDark";
  className?: string;
}) {
  const toneCls =
    tone === "onDark"
      ? "bg-white text-primary hover:bg-white/90 focus-visible:outline-white"
      : "bg-cta text-white hover:bg-cta-hover focus-visible:outline-cta";
  return (
    <a
      href={site.phone.href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-bold whitespace-nowrap shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        toneCls,
        sizes[size],
        className,
      )}
    >
      <Phone className="size-[1.1em] shrink-0" aria-hidden />
      <span>
        {showNumber ? `Zadzwoń ${site.phone.short}` : site.phone.short}
      </span>
    </a>
  );
}

export function WhatsAppButton({
  size = "md",
  label = "Wyślij zdjęcie na WhatsApp",
  tone = "default",
  className,
}: {
  size?: Size;
  label?: string;
  tone?: "default" | "onDark";
  className?: string;
}) {
  const toneCls =
    tone === "onDark"
      ? "border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white"
      : "border-primary/25 bg-white text-primary hover:border-primary hover:bg-primary/5 focus-visible:outline-primary";
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-lg border-2 font-semibold whitespace-nowrap transition-all",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        toneCls,
        sizes[size],
        className,
      )}
    >
      <IconBrandWhatsapp className="size-[1.2em] shrink-0" aria-hidden />
      <span>{label}</span>
    </a>
  );
}
