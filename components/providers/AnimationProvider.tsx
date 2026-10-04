"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/**
 * Enables `prefers-reduced-motion` handling for every framer-motion animation
 * in the app in one place. Transform-based animations are dropped for users who
 * ask for reduced motion, while opacity fades still render.
 */
export function AnimationProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
