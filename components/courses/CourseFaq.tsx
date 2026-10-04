"use client";

import type { CourseFaq as CourseFaqType } from "@/types";
import { Accordion } from "@/components/ui/Accordion";

interface CourseFaqProps {
  faq: CourseFaqType[];
}

/** Frequently-questions block reusing the shared accessible accordion. */
export function CourseFaq({ faq }: CourseFaqProps) {
  const items = faq.map((entry, index) => ({
    id: `faq-${index + 1}`,
    title: entry.question,
    content: (
      <p className="max-w-3xl text-sm leading-relaxed text-ink-300">{entry.answer}</p>
    ),
  }));

  return <Accordion items={items} />;
}
