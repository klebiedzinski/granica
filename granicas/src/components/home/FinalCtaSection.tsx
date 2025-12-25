import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="py-20  bg-background-light" id="cta-koncowe">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex w-full flex-col gap-8 overflow-hidden rounded-2xl bg-white  border border-border-color md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold tracking-tight md:mb-4 md:text-3xl lg:text-4xl">
              Masz drzewo do wycięcia lub przycięcia?
            </h3>
            <p className="max-w-xl text-text-muted md:text-lg">
              Zrób zdjęcie i wyślij je przez formularz darmowej wyceny. W
              odpowiedzi otrzymasz propozycję terminu oraz orientacyjną cenę
              realizacji.
            </p>
          </div>
          <div className="flex shrink-0 flex-col-reverse gap-3 items-stretch">
            <a
              href="tel:+48123456789"
              className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent px-5 py-2.5 text-xs font-semibold text-text-main transition-colors hover:bg-primary/10 md:px-6 md:py-3"
            >
              Wolisz zadzwonić? +48 123 456 789
            </a>
            <Link
              href="/wycena"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-primary/90 md:px-8 md:py-3.5"
            >
              Przejdź do darmowej wyceny
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
