"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cx } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  /** Optional mono label shown before the title, e.g. "Module 1". */
  indexLabel?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Item open on first render. Pass `null` to start fully collapsed. */
  defaultOpenId?: string | null;
  className?: string;
  /** Keep more than one panel open at a time. */
  allowMultiple?: boolean;
}

/**
 * Accessible accordion with a single panel open by default.
 *
 * - Panels stay mounted so `aria-controls` always resolves to a real element.
 * - Collapsed panels are marked `inert`, keeping their links out of the tab order.
 * - Height animates smoothly; duration drops to 0 for reduced-motion users.
 */
export function Accordion({
  items,
  defaultOpenId,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    const initial = defaultOpenId ?? items[0]?.id ?? null;
    return initial ? [initial] : [];
  });
  const reduceMotion = useReducedMotion();

  const isOpen = (id: string) => openIds.includes(id);

  const toggle = (id: string) => {
    setOpenIds((current) => {
      if (current.includes(id)) return current.filter((value) => value !== id);
      return allowMultiple ? [...current, id] : [id];
    });
  };

  return (
    <div
      className={cx(
        "divide-y divide-white/8 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03]",
        className,
      )}
    >
      {items.map((item) => {
        const expanded = isOpen(item.id);
        const triggerId = `accordion-trigger-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id}>
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className={cx(
                  "flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 sm:px-6",
                  expanded ? "text-white" : "text-ink-200 hover:text-white",
                )}
              >
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  {item.indexLabel ? (
                    <span className="shrink-0 rounded-lg border border-brand-400/30 bg-brand-500/10 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-brand-300">
                      {item.indexLabel}
                    </span>
                  ) : null}
                  <span className="font-display text-base font-semibold leading-snug tracking-tight sm:text-lg">
                    {item.title}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={cx(
                    "grid size-8 shrink-0 place-items-center rounded-full border transition duration-300",
                    expanded
                      ? "rotate-180 border-brand-400/50 bg-brand-500/15 text-brand-200"
                      : "border-white/10 bg-white/5 text-ink-300",
                  )}
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>
            </h3>

            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              initial={false}
              animate={{
                height: expanded ? "auto" : 0,
                opacity: expanded ? 1 : 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.32,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="overflow-hidden"
              inert={!expanded}
            >
              <div className="pb-6 pl-5 pr-5 sm:pb-7 sm:pl-6 sm:pr-6">
                {item.content}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
