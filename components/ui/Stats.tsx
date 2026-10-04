import type { Stat } from "@/types";
import { stats as defaultStats } from "@/lib/site";
import { CountUp } from "./CountUp";
import { ScrollReveal } from "./ScrollReveal";

interface StatsProps {
  items?: Stat[];
  className?: string;
}

/**
 * Trust/statistics strip.
 *
 * The values come from editable data in `lib/site.ts` and describe site
 * content only — no student numbers, ratings or outcome claims.
 */
export function Stats({ items = defaultStats, className }: StatsProps) {
  return (
    <section aria-label="Academy at a glance" className={className}>
      <ScrollReveal>
        <div className="grid divide-y divide-white/8 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {items.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 px-6 py-8 text-center sm:px-8 sm:py-10"
            >
              <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {stat.isNumeric && typeof stat.value === "number" ? (
                  <>
                    <CountUp value={stat.value} />
                    <span className="text-gradient" aria-hidden="true">
                      {stat.suffix ?? ""}
                    </span>
                    {/* Screen readers get the complete value. */}
                    <span className="sr-only">
                      {stat.value}
                      {stat.suffix ?? ""}
                    </span>
                  </>
                ) : (
                  <span className="text-gradient">{stat.headline}</span>
                )}
              </p>

              <p className="mx-auto max-w-[16rem] text-sm leading-relaxed text-ink-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
