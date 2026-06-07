import Image from "next/image";
import { ShieldCheck, Wallet, Star } from "lucide-react";
import { site, works } from "@/lib/site";
import { CallButton, WhatsAppButton } from "@/components/cta";

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function HeroPhoto({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl shadow-lg">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 192px, 176px"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
    </div>
  );
}

export default function Hero() {
  // Ręcznie dobrany, „zaszuflowany" mix realizacji do kaskady w hero.
  // Indeksy z works[] — zmień kolejność/numery, żeby pokazać inne zdjęcia.
  const photos = [5, 7, 0, 6, 1].map((i) => works[i]);

  return (
    <section className="relative isolate overflow-hidden bg-sage-deep text-white lg:flex lg:min-h-[calc(100vh-4rem)] lg:items-center">
      {/* siatka w tle */}
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-white/10 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="hero-grid"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-white/[0.03]">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#hero-grid)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* zielona poświata */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-[801/1036] w-[50rem] bg-gradient-to-tr from-accent to-accent-light opacity-20"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-12 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          {/* tekst */}
          <div className="relative flex min-h-[calc(100svh-4rem)] w-full flex-col justify-center lg:block lg:min-h-0 lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold uppercase tracking-wider text-accent-light">
              {site.area.regions.map(cap).join(" · ")}
            </p>

            <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.05] text-balance sm:mt-5 sm:text-6xl sm:leading-[1.03]">
              Profesjonalna{" "}
              <span className="text-accent-light">wycinka drzew</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-pretty text-white/75 sm:mt-6 sm:max-w-md sm:text-lg lg:max-w-none">
              Bezpiecznie usuwamy trudne drzewa - przy budynkach, nad dachem i w
              ciasnej przestrzeni. Frezujemy pnie, zrębkujemy gałęzie i
              zostawiamy porządek.
            </p>

            {/* ocena */}
            <div className="mt-4 flex items-center gap-2 sm:mt-6">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-star text-star"
                    aria-hidden
                  />
                ))}
              </span>
              <span className="text-sm text-white/75">
                <b className="text-white">{site.rating.value}</b> na Google i
                Oferteo
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
              <CallButton
                size="lg"
                tone="onDark"
                className="px-5 py-3 text-sm gap-2 sm:px-7 sm:py-4 sm:text-base sm:gap-2.5"
              />
              <WhatsAppButton
                size="lg"
                tone="onDark"
                className="px-5 py-3 text-sm gap-2 sm:px-7 sm:py-4 sm:text-base sm:gap-2.5"
              />
            </div>

            {/* atuty / mikroteksty */}
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:mt-8 sm:gap-5 sm:pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-light">
                  <ShieldCheck className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-white">
                    Certyfikowani specjaliści
                  </p>
                  <p className="text-sm text-white/70">
                    Doświadczenie i bezpieczeństwo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-light">
                  <Wallet className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-white">Darmowa wycena</p>
                  <p className="text-sm text-white/70">Telefon lub WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* zdjęcia realizacji - kaskada (jak w template, widoczne też na mobile) */}
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
              <HeroPhoto src={photos[0].src} alt={photos[0].title} priority />
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <HeroPhoto src={photos[1].src} alt={photos[1].title} />
              <HeroPhoto src={photos[2].src} alt={photos[2].title} />
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <HeroPhoto src={photos[3].src} alt={photos[3].title} />
              <HeroPhoto src={photos[4].src} alt={photos[4].title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
