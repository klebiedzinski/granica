import { GraduationCap, Mountain, Sparkles, BadgeCheck } from "lucide-react";
import { site } from "@/lib/site";

const icons = [GraduationCap, Mountain, Sparkles, BadgeCheck];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 lg:grid-cols-4 lg:px-8">
        {site.trust.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={item} className="flex items-center gap-3 py-5 lg:justify-center">
              <Icon className="size-5 shrink-0 text-accent" aria-hidden />
              <span className="text-sm font-semibold text-foreground">{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
