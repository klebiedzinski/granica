import { faqs } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CallButton, WhatsAppButton } from "@/components/cta";

export default function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Najczęściej zadawane pytania
        </h2>

        <Accordion className="mt-12 divide-y divide-line lg:hidden">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger className="py-5 text-base/7 font-semibold text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base/7 text-muted">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <dl className="mt-16 hidden divide-y divide-line lg:block">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base/7 font-semibold text-foreground lg:col-span-5">
                {faq.q}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-muted">{faq.a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
