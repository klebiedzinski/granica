import { Star } from "lucide-react";
import { testimonials, site } from "@/lib/site";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}

function Stars({ size = "size-4" }: { size?: string }) {
  return (
    <span className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${size} fill-star text-star`} aria-hidden />
      ))}
    </span>
  );
}

export default function Review() {
  const stat = (
    <span className="inline-flex items-center gap-2 text-sm text-muted">
      <Stars />
      <span>
        <b className="text-foreground">{site.rating.value}</b> ·{" "}
        {site.rating.count} opinii w {site.rating.source}
      </span>
    </span>
  );

  return (
    <section id="opinie" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-balance sm:text-4xl">
            Opinie klientów
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Prawdziwe opinie osób, które skorzystały z naszych usług.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-line bg-surface p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage text-sm font-bold text-primary">
                  {initials(t.name)}
                </span>
                <figcaption>
                  <p className="font-bold leading-tight text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.source ?? "Google"}</p>
                </figcaption>
              </div>
              <div className="mt-4">
                <Stars />
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted">
                „{t.text}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
