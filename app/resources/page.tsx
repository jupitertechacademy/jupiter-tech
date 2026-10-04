import type { Metadata } from "next";
import { AdBanner } from "@/components/ads/AdBanner";
import { PageHero } from "@/components/layout/PageHero";
import { ResourceExplorer } from "@/components/resources/ResourceExplorer";
import { CTASection } from "@/components/ui/CTASection";
import {
  resourceCategories,
  resourceDifficulties,
  resources,
} from "@/lib/resources";

export const metadata: Metadata = {
  title: "Free Learning Resources",
  description:
    "Free developer resources from Jupiter Tech Academy — cheat sheets, guides, checklists, roadmaps and articles covering JavaScript, React, Python, Git, AWS, AI and career growth.",
  alternates: { canonical: "/resources" },
  keywords: [
    "free developer resources",
    "javascript cheat sheet",
    "react guide",
    "python tutorial",
    "web development roadmap",
    "coding checklist",
    "developer career resources",
  ],
  openGraph: {
    title: "Free Learning Resources | Jupiter Tech Academy",
    description:
      "Cheat sheets, guides, checklists and roadmaps across JavaScript, React, Python, cloud and AI — free to browse and search.",
    url: "/resources",
    type: "website",
  },
};

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

type ResourcesPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const rawCategory = (await searchParams).category;
  const initialCategory =
    typeof rawCategory === "string" && resourceCategories.includes(rawCategory)
      ? rawCategory
      : undefined;

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Free resources to{" "}
            <span className="text-gradient">learn faster</span>
          </>
        }
        description="Cheat sheets, guides, checklists and roadmaps you can use alongside any course — or on their own when you need a quick, reliable answer."
      />

      <div className="bg-ink-950 pb-8 sm:pb-10">
        <div className={shell}>
          <AdBanner />
        </div>
      </div>

      <section className="bg-ink-950 pb-16 sm:pb-20 lg:pb-24">
        <div className={shell}>
          <ResourceExplorer
            key={initialCategory ?? "all"}
            resources={resources}
            categories={resourceCategories}
            difficulties={resourceDifficulties}
            initialCategory={initialCategory}
          />
        </div>
      </section>

      <div className="bg-ink-950 pb-16 sm:pb-20">
        <div className={shell}>
          <AdBanner />
        </div>
      </div>

      <div className="bg-ink-950 pb-16 sm:pb-20 lg:pb-24">
        <CTASection
          eyebrow="Ready for more?"
          title="Turn reading into building"
          description="Resources get you unstuck; courses take you the whole way. Follow a structured path and ship real projects."
          primary={{ label: "View Courses", href: "/courses" }}
          secondary={{ label: "About the Academy", href: "/about" }}
        />
      </div>
    </>
  );
}
