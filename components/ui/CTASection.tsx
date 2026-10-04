import type { ReactNode } from "react";
import { Button } from "./Button";
import { ScrollReveal } from "./ScrollReveal";
import { cx } from "@/lib/utils";

interface CtaAction {
  label: string;
  href: string;
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  /** Rendered under the buttons — e.g. a short reassurance line. */
  note?: ReactNode;
  className?: string;
}

/**
 * Closing call-to-action panel used at the end of every page.
 * Dark gradient + blueprint grid keeps it on-brand without extra artwork.
 */
export function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  note,
  className,
}: CTASectionProps) {
  return (
    <section className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      <ScrollReveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
          {/* Background layers */}
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50 mask-fade-edges" />
          <div
            aria-hidden="true"
            className="absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-brand-500/30 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-0 size-72 rounded-full bg-violet-500/30 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent"
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            {eyebrow ? (
              <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-brand-300">
                {eyebrow}
              </span>
            ) : null}

            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            {description ? (
              <p className="max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
                {description}
              </p>
            ) : null}

            <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Button href={primary.href} size="lg" className="w-full sm:w-auto" withArrow>
                {primary.label}
              </Button>
              {secondary ? (
                <Button
                  href={secondary.href}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>

            {note ? (
              <p className="font-mono text-xs tracking-wide text-ink-400">{note}</p>
            ) : null}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
