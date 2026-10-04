"use client";

import { Fragment, useMemo, useState } from "react";
import type { Resource } from "@/types";
import { AdCard } from "@/components/ads/AdCard";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { SearchInput } from "@/components/ui/SearchInput";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { ResourceCard } from "./ResourceCard";

const ALL = "All";

interface ResourceExplorerProps {
  resources: Resource[];
  categories: string[];
  difficulties: string[];
  /**
   * Category requested by the URL (e.g. `/resources?category=React`), resolved
   * on the server from the page's `searchParams`. The caller remounts this
   * component with a `key` when it changes, so state simply starts here.
   */
  initialCategory?: string;
}

/**
 * Client-side resource discovery: search, category and difficulty.
 *
 * The `?category=` deep link used by the footer arrives as a server-resolved
 * prop — no `window` access, no effect, and identical markup on server and
 * client for the first render.
 */
export function ResourceExplorer({
  resources,
  categories,
  difficulties,
  initialCategory,
}: ResourceExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(
    initialCategory && categories.includes(initialCategory) ? initialCategory : ALL,
  );
  const [difficulty, setDifficulty] = useState(ALL);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const haystack = [
        resource.title,
        resource.description,
        resource.category,
        resource.type,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!needle || haystack.includes(needle)) &&
        (category === ALL || resource.category === category) &&
        (difficulty === ALL || resource.difficulty === difficulty)
      );
    });
  }, [resources, query, category, difficulty]);

  const filtersActive = query !== "" || category !== ALL || difficulty !== ALL;

  const resetFilters = () => {
    setQuery("");
    setCategory(ALL);
    setDifficulty(ALL);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
      <div className="flex flex-col gap-8">
        {/* Keeps the document outline h1 → h2 → h3 without changing the visuals. */}
        <h2 className="sr-only">Browse resources</h2>

        {/* ---------- Toolbar ---------- */}
        <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <SearchInput
              label="Search"
              value={query}
              onChange={setQuery}
              placeholder="Search resources…"
              className="md:col-span-3"
            />
            <Select
              label="Category"
              value={category}
              onChange={setCategory}
              options={[ALL, ...categories]}
            />
            <Select
              label="Difficulty"
              value={difficulty}
              onChange={setDifficulty}
              options={[ALL, ...difficulties]}
            />
            <div className="flex items-end">
              <Button
                variant="ghost"
                size="md"
                onClick={resetFilters}
                disabled={!filtersActive}
              >
                Reset filters
              </Button>
            </div>
          </div>

          <p
            className="mt-5 border-t border-white/8 pt-4 text-sm text-ink-400"
            role="status"
            aria-live="polite"
          >
            Showing{" "}
            <span className="font-medium text-white">{results.length}</span>{" "}
            {results.length === 1 ? "resource" : "resources"}
          </p>
        </div>

        {/* ---------- Results ---------- */}
        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((resource, index) => (
              <Fragment key={resource.id}>
                <ResourceCard resource={resource} />
                {index === 5 && results.length > 6 ? <AdCard /> : null}
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-dashed border-white/12 bg-white/[0.02] px-6 py-16 text-center">
            <span className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/5 font-mono text-lg text-ink-400">
              0
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-bold text-white">
                No resources found
              </h2>
              <p className="max-w-md text-sm text-ink-400">
                Try another keyword or clear the filters to browse everything in
                the hub.
              </p>
            </div>
            <Button variant="secondary" size="md" onClick={resetFilters}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* ---------- Sidebar ad ---------- */}
      <SidebarAd />
    </div>
  );
}
