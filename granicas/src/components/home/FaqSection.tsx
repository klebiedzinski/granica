import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="py-20 px-4 bg-background-light" id="faq">
      <div className="max-w-[1200] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-center">
          Najczęstsze pytania
        </h2>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl">
          Krótko i konkretnie – odpowiedzi na pytania, które klienci zadają
          najczęściej przed wycinką drzewa.
        </p>

        <Accordion
          type="single"
          collapsible
          className="divide-border-color divide-y"
        >
          <AccordionItem value="czas-realizacji">
            <AccordionTrigger className="text-lg md:text-xl">
              Jak szybko możecie przyjechać po zgłoszeniu?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Zwykle proponujemy termin w ciągu kilku dni roboczych. W pilnych
              sytuacjach (np. drzewo po wichurze) staramy się reagować możliwie
              najszybciej – często jeszcze tego samego lub następnego dnia.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sprzatanie">
            <AccordionTrigger className="text-lg md:text-xl">
              Czy sprzątacie po wycince?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Tak. Standardowo tniemy drzewo na odcinki i porządkujemy teren po
              zakończeniu pracy. Zakres sprzątania (np. wywóz gałęzi,
              zrębkowanie, frezowanie pni) ustalamy podczas wyceny.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ubezpieczenie">
            <AccordionTrigger className="text-lg md:text-xl">
              Czy macie ubezpieczenie OC i pracujecie z zabezpieczeniami?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Tak, pracujemy w kaskach, szelkach i z atestowanym sprzętem
              alpinistycznym, a nasza działalność jest objęta ubezpieczeniem OC.
              Dzięki temu w razie szkody klient ma pełne zabezpieczenie.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wycena">
            <AccordionTrigger className="text-lg md:text-xl">
              Od czego zależy cena wycinki jednego drzewa?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Największy wpływ ma wysokość i kondycja drzewa, dostęp do miejsca
              (czy możemy podjechać od strony ulicy) oraz ryzyko dla otoczenia –
              budynków, linii energetycznych, ogrodzeń. Dlatego prosimy o
              zdjęcia i krótki opis sytuacji.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pozwolenia">
            <AccordionTrigger className="text-lg md:text-xl">
              Czy pomagacie w formalnościach i pozwoleniach na wycinkę?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Przepisy różnią się w zależności od gatunku drzewa i średnicy
              pnia. Podczas wyceny podpowiadamy, czy potrzebne będzie zgłoszenie
              do urzędu i jakie dokumenty warto przygotować.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
