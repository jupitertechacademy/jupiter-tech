"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: number;
  /** Animation length in milliseconds. */
  duration?: number;
  className?: string;
}

/**
 * Animates a number from 0 to `value` the first time it scrolls into view.
 *
 * Guards that keep the result stable:
 * - The server already renders the final value, so the first paint (and
 *   hydration) always match — no hydration warnings.
 * - If the element is already on screen when the page loads, no reset happens,
 *   so there is no visible "jump back to zero".
 * - Reduced-motion users see the final value immediately.
 */
export function CountUp({ value, duration = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const skipRef = useRef(false);
  const startedRef = useRef(false);

  // Declared before `useInView` so it runs first on mount.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const visibleAtLoad =
      element.getBoundingClientRect().top < window.innerHeight * 0.85;

    if (prefersReduced || visibleAtLoad) {
      skipRef.current = true;
      return;
    }

    setDisplay(0);
  }, []);

  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView || skipRef.current || startedRef.current) return;
    startedRef.current = true;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} aria-hidden="true">
      {display}
    </span>
  );
}
