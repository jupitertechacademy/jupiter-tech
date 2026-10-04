"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra class applied to the animated wrapper. */
  className?: string;
  /** Stagger delay in seconds when several reveals are used in sequence. */
  delay?: number;
  /** Starting vertical offset in px. */
  y?: number;
  /** Fire once and stop observing afterwards (recommended). */
  once?: boolean;
}

/**
 * Wraps server-rendered content in a one-off fade-up that triggers when it
 * enters the viewport. Children stay as Server Components — only this thin
 * wrapper ships JavaScript.
 *
 * Reduced-motion users get an instant, transform-free reveal via the global
 * `MotionConfig` in `AnimationProvider`.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
