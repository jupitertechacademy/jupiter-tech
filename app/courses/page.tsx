import type { Metadata } from "next";
import { AdBanner } from "@/components/ads/AdBanner";
import { CourseExplorer } from "@/components/courses/CourseExplorer";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { courseCategories, courseLevels, courses } from "@/lib/courses";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Technology Courses",
  description:
    "Explore Jupiter Tech Academy's practical technology courses — full stack web development, React, Next.js, Node.js, Python, Django, mobile, AWS and AI.",
  alternates: { canonical: "/courses" },
  keywords: [
    "technology courses",
    "web development course",
    "react course",
    "next.js course",
    "python course",
    "aws course",
    "AI course for developers",
  ],
  openGraph: {
    title: "Technology Courses | Jupiter Tech Academy",
    description:
      "Ten practical, project-based technology courses covering frontend, backend, mobile, cloud and AI.",
    url: "/courses",
    type: "website",
  },
};

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export default function CoursesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jupiter Tech Academy courses",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        url: `${site.url}/courses/${course.slug}`,
        educationalLevel: course.level,
        provider: { "@type": "Organization", name: site.name, url: site.url },
      },
    })),
  };

  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        eyebrow="Courses"
        title={
          <>
            Explore Our{" "}
            <span className="text-gradient">Technology Courses</span>
          </>
        }
        description="Practical, project-based learning paths across web development, mobile, Python, cloud and AI. Search, filter and find the right starting point for where you are today."
      />

      <div className="bg-ink-950 pb-8 sm:pb-10">
        <div className={shell}>
          <AdBanner />
        </div>
      </div>

      <section className="bg-ink-950 pb-16 sm:pb-20 lg:pb-24">
        <div className={shell}>
          <CourseExplorer
            courses={courses}
            categories={courseCategories}
            levels={courseLevels}
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
          eyebrow="Not sure where to start?"
          title="Pick a path and begin today"
          description="Every course is self-paced and beginner friendly where it needs to be. If you are new to programming, start with JavaScript Mastery."
          primary={{ label: "View JavaScript Course", href: "/courses/javascript-mastery" }}
          secondary={{ label: "Browse Resources", href: "/resources" }}
        />
      </div>
    </>
  );
}
