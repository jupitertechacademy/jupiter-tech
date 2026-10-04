import { ChevronDown } from "lucide-react";
import { cx } from "@/lib/utils";

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
}

/**
 * Visually-labelled native `<select>`.
 *
 * Staying with the native control keeps full keyboard, screen-reader and mobile
 * behaviour for free while still matching the design system.
 */
export function Select({ label, value, onChange, options, className }: SelectProps) {
  const id = `select-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <label htmlFor={id} className={cx("flex flex-col gap-1.5", className)}>
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">
        {label}
      </span>

      <span className="relative block">
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cx(
            "h-11 w-full cursor-pointer appearance-none rounded-xl border border-white/12 bg-white/[0.05]",
            "pl-4 pr-10 text-sm text-ink-100 outline-none transition",
            "hover:border-white/25 focus:border-brand-400/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
            "[&>option]:bg-ink-900 [&>option]:text-ink-100",
          )}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-400"
        />
      </span>
    </label>
  );
}
