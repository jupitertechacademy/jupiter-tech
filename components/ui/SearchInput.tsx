import { Search, X } from "lucide-react";
import { cx } from "@/lib/utils";

interface SearchInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

/** Accessible search field with a clear affordance. */
export function SearchInput({
  label,
  value,
  onChange,
  placeholder,
  className,
}: SearchInputProps) {
  const id = `search-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <label htmlFor={id} className={cx("flex flex-col gap-1.5", className)}>
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">
        {label}
      </span>

      <span className="relative block">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-400"
        />

        <input
          id={id}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className={cx(
            "h-11 w-full rounded-xl border border-white/12 bg-white/[0.05] pl-11 pr-10",
            "text-sm text-ink-100 placeholder:text-ink-500 outline-none transition",
            "hover:border-white/25 focus:border-brand-400/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
          )}
        />

        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label={`Clear ${label.toLowerCase()}`}
            className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-ink-400 transition hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        ) : null}
      </span>
    </label>
  );
}
