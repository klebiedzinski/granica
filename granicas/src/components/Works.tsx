import Image from "next/image";
import { works } from "@/lib/site";

export default function Works() {
  return (
    <section id="realizacje" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="gap-3 [column-fill:_balance] columns-2 lg:columns-3 lg:gap-4">
          {works.map((w) => (
            <figure
              key={w.src}
              className="group relative mb-3 break-inside-avoid overflow-hidden rounded-xl shadow-sm ring-1 ring-foreground/5 lg:mb-4"
            >
              <Image
                src={w.src}
                alt={w.title}
                width={w.w}
                height={w.h}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover "
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
