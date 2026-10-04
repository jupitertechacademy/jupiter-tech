import { cx } from "@/lib/utils";

export type AdSize = "leaderboard" | "rectangle" | "inline" | "skyscraper" | "card";
export type AdTone = "dark" | "light";

/**
 * Every size reserves a fixed box *before* any ad network script runs, so a
 * late-loading creative can never push content around (CLS protection).
 * `card` stretches to match its neighbours inside a card grid.
 */
const sizeClasses: Record<AdSize, string> = {
  leaderboard: "h-[60px] sm:h-[90px]",
  rectangle: "h-[250px]",
  inline: "h-[100px] sm:h-[250px]",
  skyscraper: "h-[250px] lg:h-[600px]",
  card: "min-h-[260px]",
};

const dimensions: Record<AdSize, string> = {
  leaderboard: "Responsive · 320×50 → 728×90",
  rectangle: "300 × 250",
  inline: "Responsive · 300×100 → 336×280",
  skyscraper: "Responsive · 300×250 → 160×600",
  card: "Responsive · in-feed",
};

const toneClasses: Record<AdTone, string> = {
  dark: "border-dashed border-white/12 bg-white/[0.025] ad-hatch text-ink-500",
  light: "border-dashed border-ink-950/15 bg-ink-950/[0.02] ad-hatch-light text-ink-400",
};

interface AdPlaceholderProps {
  size?: AdSize;
  tone?: AdTone;
  className?: string;
  /** Overrides the dimension hint shown in the slot. */
  note?: string;
}

/**
 * The building block for every ad unit.
 *
 * It renders a clearly-labelled, dimension-reserved box with no fake creative
 * content. Replace the inner content with your ad network's markup (AdSense,
 * Ad Manager, …) when an account is connected.
 */
export function AdPlaceholder({
  size = "leaderboard",
  tone = "dark",
  className,
  note,
}: AdPlaceholderProps) {
  return (
    <aside
      aria-label="Advertisement"
      className={cx(
        "relative grid w-full place-items-center overflow-hidden rounded-2xl border px-4 py-3",
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      <span className="flex flex-col items-center gap-1 text-center">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em]">
          Advertisement
        </span>
        <span className="font-mono text-[10px] tracking-wide opacity-70">
          {note ?? dimensions[size]}
        </span>
      </span>
    </aside>
  );
}
