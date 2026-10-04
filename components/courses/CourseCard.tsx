import Link from "next/link";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import type { Course } from "@/types";
import { iconMap } from "@/lib/icons";
import { cx } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

/**
 * Premium course card.
 *
 * Server Component — hover/press feedback is pure CSS so the card adds no
 * client JavaScript to the page.
 */
export function CourseCard({ course, className }: CourseCardProps) {
  const Icon = iconMap[course.icon];

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cx(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8",
        "bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 sm:p-7",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out",
        "hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-pop",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400",
        className,
      )}
    >
      {/* Accent glow revealed on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-500/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-brand-500/12 text-brand-300 transition-colors duration-300 group-hover:bg-brand-500/20 group-hover:text-brand-200">
          <Icon className="size-5" aria-hidden="true" />
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-ink-300">
          {course.category}
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-xl font-bold leading-snug tracking-tight text-white">
        {course.title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed text-ink-300">
        {course.description}
      </p>

      <ul className="relative mt-5 flex flex-wrap gap-2" aria-label="Topics covered">
        {course.topics.slice(0, 4).map((topic) => (
          <li
            key={topic}
            className="rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1 text-xs text-ink-300"
          >
            {topic}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto pt-7">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/8 pt-5 text-xs text-ink-400">
          <span className="inline-flex items-center gap-1.5">
            <BarChart3 className="size-3.5 text-brand-400" aria-hidden="true" />
            {course.level}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-brand-400" aria-hidden="true" />
            {course.duration}
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 font-medium text-brand-300 transition-colors duration-200 group-hover:text-brand-200">
            View Course
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
