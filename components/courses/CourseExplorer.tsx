"use client";

import { Fragment, useMemo, useState } from "react";
import type { Course, CourseLevel } from "@/types";
import { AdCard } from "@/components/ads/AdCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "./CourseCard";
import { CourseGrid } from "./CourseGrid";

const ALL = "All";

const levelOrder: Record<CourseLevel, number> = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
};

const sortOptions = ["Recommended", "A–Z", "Level", "Duration"] as const;
type SortOption = (typeof sortOptions)[number];

function durationInWeeks(duration: string): number {
  const parsed = Number.parseInt(duration, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

interface CourseExplorerProps {
  courses: Course[];
  categories: string[];
  levels: string[];
}

/**
 * Client-side course discovery: search, category, level and sort.
 *
 * All filtering happens in the browser against static data — no API, no URL
 * state, no server round-trips.
 */
export function CourseExplorer({ courses, categories, levels }: CourseExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [level, setLevel] = useState(ALL);
  const [sort, setSort] = useState<SortOption>("Recommended");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();

    const filtered = courses.filter((course) => {
      const haystack = [course.title, course.description, course.category, ...course.topics]
        .join(" ")
        .toLowerCase();

      return (
        (!needle || haystack.includes(needle)) &&
        (category === ALL || course.category === category) &&
        (level === ALL || course.level === level)
      );
    });

    switch (sort) {
      case "A–Z":
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      case "Level":
        return [...filtered].sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);
      case "Duration":
        return [...filtered].sort(
          (a, b) => durationInWeeks(a.duration) - durationInWeeks(b.duration),
        );
      default:
        return filtered;
    }
  }, [courses, query, category, level, sort]);

  const filtersActive = query !== "" || category !== ALL || level !== ALL;

  const resetFilters = () => {
    setQuery("");
    setCategory(ALL);
    setLevel(ALL);
    setSort("Recommended");
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Keeps the document outline h1 → h2 → h3 without changing the visuals. */}
      <h2 className="sr-only">Browse courses</h2>

      {/* ---------- Toolbar ---------- */}
      <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <SearchInput
            label="Search"
            value={query}
            onChange={setQuery}
            placeholder="Search courses, topics, technologies…"
          />
          <Select
            label="Category"
            value={category}
            onChange={setCategory}
            options={[ALL, ...categories]}
          />
          <Select
            label="Level"
            value={level}
            onChange={setLevel}
            options={[ALL, ...levels]}
          />
          <Select
            label="Sort by"
            value={sort}
            onChange={(value) => setSort(value as SortOption)}
            options={[...sortOptions]}
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-4">
          <p
            className="text-sm text-ink-400"
            role="status"
            aria-live="polite"
          >
            Showing{" "}
            <span className="font-medium text-white">{results.length}</span>{" "}
            {results.length === 1 ? "course" : "courses"}
            {filtersActive ? " matching your filters" : ""}
          </p>

          {filtersActive ? (
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              Reset filters
            </Button>
          ) : null}
        </div>
      </div>

      {/* ---------- Results ---------- */}
      {results.length > 0 ? (
        <CourseGrid>
          {results.map((course, index) => (
            <Fragment key={course.id}>
              <CourseCard course={course} />
              {/* In-feed ad slot once the grid has filled two desktop rows. */}
              {index === 5 && results.length > 6 ? <AdCard /> : null}
            </Fragment>
          ))}
        </CourseGrid>
      ) : (
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-dashed border-white/12 bg-white/[0.02] px-6 py-16 text-center">
          <span className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/5 font-mono text-lg text-ink-400">
            0
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-xl font-bold text-white">
              No courses match your search
            </h2>
            <p className="max-w-md text-sm text-ink-400">
              Try a different keyword, or clear the filters to see the full
              catalogue again.
            </p>
          </div>
          <Button variant="secondary" size="md" onClick={resetFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}
