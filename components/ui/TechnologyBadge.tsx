import { Terminal } from "lucide-react";
import { cx } from "@/lib/utils";

interface TechnologyBadgeProps {
  label: string;
  className?: string;
  /** Rendered on light surfaces instead of the navy foundation. */
  tone?: "dark" | "light";
}

/** Compact technology chip used in "Popular Topics" and ecosystem grids. */
export function TechnologyBadge({
  label,
  className,
  tone = "dark",
}: TechnologyBadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition duration-200",
        tone === "dark"
          ? "border-white/10 bg-white/[0.04] text-ink-200 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
          : "border-ink-950/10 bg-white text-ink-700 shadow-soft hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-brand-600",
        className,
      )}
    >
      <Terminal
        className={cx(
          "size-3.5",
          tone === "dark" ? "text-brand-400" : "text-brand-500",
        )}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
