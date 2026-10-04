"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Resource, ResourceDifficulty } from "@/types";
import { iconMap } from "@/lib/icons";
import { cx } from "@/lib/utils";

const difficultyStyles: Record<ResourceDifficulty, string> = {
  Beginner: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Intermediate: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Advanced: "border-rose-400/30 bg-rose-400/10 text-rose-300",
};

interface ResourceCardProps {
  resource: Resource;
  className?: string;
}

/**
 * Resource card with an inline "Read More" disclosure.
 *
 * The preview expands in place, so the hub needs no per-resource detail route
 * and no link ever dead-ends.
 */
export function ResourceCard({ resource, className }: ResourceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const Icon = iconMap[resource.icon];

  const panelId = `resource-panel-${resource.id}`;
  const buttonId = `resource-toggle-${resource.id}`;

  return (
    <article
      className={cx(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8",
        "bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6",
        "transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-400/35",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-brand-500/12 text-brand-300">
          <Icon className="size-5" aria-hidden="true" />
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-ink-300">
          {resource.type}
        </span>
      </div>

      <p className="mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-brand-400">
        {resource.category}
      </p>

      <h3 className="mt-2 font-display text-lg font-bold leading-snug tracking-tight text-white">
        {resource.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-300">
        {resource.description}
      </p>

      {/* Expanded preview */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.3,
          ease: [0.32, 0.72, 0, 1],
        }}
        className="overflow-hidden"
        inert={!expanded}
      >
        <p className="border-l-2 border-brand-400/50 pl-4 pt-4 text-sm leading-relaxed text-ink-300">
          {resource.content}
        </p>
      </motion.div>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/8 pt-4 text-xs text-ink-400">
          <span
            className={cx(
              "rounded-lg border px-2 py-1 font-medium",
              difficultyStyles[resource.difficulty],
            )}
          >
            {resource.difficulty}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {resource.readingTime}
          </span>

          <button
            type="button"
            id={buttonId}
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((value) => !value)}
            className="ml-auto inline-flex items-center gap-1.5 font-medium text-brand-300 transition-colors hover:text-brand-200"
          >
            {expanded ? "Show Less" : "Read More"}
            <ArrowUpRight
              aria-hidden="true"
              className={cx(
                "size-4 transition-transform duration-200",
                expanded ? "rotate-45" : "group-hover:translate-x-0.5",
              )}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
