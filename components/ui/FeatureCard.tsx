import type { Feature } from "@/types";
import { iconMap } from "@/lib/icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

/**
 * Feature card used in the "Why Jupiter Tech Academy" grid.
 * Server Component — hover feedback is pure CSS.
 */
export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  const Icon = iconMap[feature.icon];

  return (
    <ScrollReveal delay={Math.min(index * 0.07, 0.35)}>
      <article className="group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-400/35 sm:p-7">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/25 to-violet-500/20 text-brand-200 transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-5" aria-hidden="true" />
        </span>

        <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white">
          {feature.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink-300">
          {feature.description}
        </p>
      </article>
    </ScrollReveal>
  );
}
