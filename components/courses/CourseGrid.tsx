import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface CourseGridProps {
  children: ReactNode;
  className?: string;
}

/** Responsive card grid used for featured and filtered course lists. */
export function CourseGrid({ children, className }: CourseGridProps) {
  return (
    <div
      className={cx("grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6", className)}
    >
      {children}
    </div>
  );
}
