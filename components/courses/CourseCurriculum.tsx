"use client";

import { CheckCircle2 } from "lucide-react";
import type { Course } from "@/types";
import { Accordion } from "@/components/ui/Accordion";

interface CourseCurriculumProps {
  modules: Course["modules"];
}

/**
 * Expandable module list.
 * The first module opens by default so the structure is immediately visible.
 */
export function CourseCurriculum({ modules }: CourseCurriculumProps) {
  const items = modules.map((module, index) => ({
    id: `module-${index + 1}`,
    indexLabel: `Module ${index + 1}`,
    title: module.title,
    content: (
      <ul className="flex flex-col gap-3">
        {module.lessons.map((lesson) => (
          <li key={lesson} className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-brand-400"
              aria-hidden="true"
            />
            <span className="text-sm leading-relaxed text-ink-300">{lesson}</span>
          </li>
        ))}
      </ul>
    ),
  }));

  return <Accordion items={items} />;
}
