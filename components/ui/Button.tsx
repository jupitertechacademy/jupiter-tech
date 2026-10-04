import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonBase {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Renders a decorative arrow that nudges on hover. */
  withArrow?: boolean;
}

type ButtonProps = ButtonBase &
  (
    | { href: string; type?: never; onClick?: never; disabled?: never; "aria-label"?: string }
    | {
        href?: undefined;
        type?: "button" | "submit";
        onClick?: () => void;
        disabled?: boolean;
        "aria-label"?: string;
      }
  );

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_12px_32px_-12px_rgba(47,107,255,0.9)] hover:bg-brand-400 hover:-translate-y-0.5",
  secondary:
    "border border-white/12 bg-white/6 text-ink-100 backdrop-blur-sm hover:border-white/25 hover:bg-white/10 hover:-translate-y-0.5",
  ghost:
    "text-ink-200 hover:text-white",
  dark:
    "bg-ink-950 text-white shadow-soft hover:bg-ink-800 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cx(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight",
    "transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out",
    "active:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "transition-transform duration-200 ease-out group-hover:translate-x-1",
        className,
      )}
    >
      →
    </span>
  );
}

/**
 * Renders a link when `href` is provided, otherwise a real `<button>`.
 * Keeps every call site accessible (keyboard + focus styles) by default.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow,
  ...rest
}: ButtonProps) {
  const classes = buttonClasses(variant, size, className);

  if (rest.href !== undefined) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
        {withArrow ? <Arrow /> : null}
      </Link>
    );
  }

  const { type = "button", onClick, disabled, "aria-label": ariaLabel } = rest;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
      {withArrow ? <Arrow /> : null}
    </button>
  );
}
