"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cx } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  /** Extra content rendered below the description (filters, CTAs, meta). */
  children?: ReactNode;
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Shared hero band for the inner pages.
 *
 * Provides the dark navy foundation, blueprint grid and a short staggered
 * entrance so every page opens the same way.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section
      className={cx(
        "relative overflow-hidden border-b border-white/8 bg-ink-950",
        className,
      )}
    >
      {/* Background: grid, glows and a horizon line */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60 mask-fade-b" />
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-40 size-[28rem] rounded-full bg-brand-600/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-10 size-[24rem] rounded-full bg-violet-600/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/45 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          className={cx(
            "flex flex-col gap-6",
            centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl",
          )}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-brand-300"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {description ? (
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              {description}
            </motion.p>
          ) : null}

          {children ? (
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {children}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
