import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use `dark` copy on light sections, `light` copy on navy sections. */
  tone?: "light" | "dark";
  /** Optional element after the description (e.g. a CTA). */
  action?: ReactNode;
  className?: string;
  /** Heading level — always keep the page's h1 in the hero. */
  as?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  action,
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cx(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        align === "left" && action ? "sm:flex-row sm:items-end sm:justify-between" : null,
        className,
      )}
    >
      <div
        className={cx(
          "flex flex-col gap-4",
          align === "center" && "items-center",
          align === "left" && action ? "sm:max-w-2xl" : null,
        )}
      >
        {eyebrow ? (
          <span
            className={cx(
              "font-mono text-xs font-medium uppercase tracking-[0.2em]",
              isDark ? "text-brand-400" : "text-brand-600",
            )}
          >
            {eyebrow}
          </span>
        ) : null}

        <Heading
          className={cx(
            "font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl",
            isDark ? "text-white" : "text-ink-950",
          )}
        >
          {title}
        </Heading>

        {description ? (
          <p
            className={cx(
              "max-w-2xl text-base leading-relaxed sm:text-lg",
              isDark ? "text-ink-300" : "text-ink-500",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
