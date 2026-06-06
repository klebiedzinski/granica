import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <span className={cn("text-sm font-semibold uppercase tracking-wider", dark ? "text-accent-light" : "text-accent")}>
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className={cn("mt-2 text-3xl font-extrabold text-balance sm:text-4xl", dark ? "text-white" : "text-foreground")}>
          {title}
        </h2>
      )}
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed text-pretty", dark ? "text-white/70" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
