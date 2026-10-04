import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Roadmap } from "@/components/home/Roadmap";
import { AdBanner } from "@/components/ads/AdBanner";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { CTASection } from "@/components/ui/CTASection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Stats } from "@/components/ui/Stats";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { featuredCourses } from "@/lib/courses";
import { features, popularTopics, site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  keywords: [
    "learn technology online",
    "programming academy",
    "full stack course",
    "web development training",
    "free coding resources",
  ],
};

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        description: site.description,
      },
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description,
      },
      {
        "@type": "ItemList",
        name: "Technology courses",
        itemListElement: featuredCourses.map((course, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Course",
            name: course.title,
            description: course.description,
            url: `${site.url}/courses/${course.slug}`,
            provider: { "@type": "Organization", name: site.name, url: site.url },
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />

      <Hero />

      {/* 1 — Advertisement */}
      <div className="bg-ink-950 pb-4 pt-10 sm:pt-12">
        <div className={shell}>
          <AdBanner />
        </div>
      </div>

      {/* 2 — Trust / statistics */}
      <div className="bg-ink-950 pb-16 sm:pb-20">
        <div className={shell}>
          <Stats />
        </div>
      </div>

      {/* 3 — Featured courses */}
      <section className="border-y border-white/6 bg-ink-900/70">
        <div className={`${shell} py-16 sm:py-20 lg:py-24`}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Featured courses"
              title="Start with a structured path"
              description="Ten practical technology courses covering frontend, backend, mobile, cloud and AI — each built around projects you can show for."
              action={
                <Button href="/courses" variant="secondary" size="md" withArrow>
                  View all courses
                </Button>
              }
            />
          </ScrollReveal>

          <CourseGrid className="mt-12">
            {featuredCourses.map((course, index) => (
              <ScrollReveal key={course.id} delay={Math.min(index * 0.07, 0.35)}>
                <CourseCard course={course} />
              </ScrollReveal>
            ))}
          </CourseGrid>
        </div>
      </section>

      {/* 4 — Advertisement */}
      <div className="bg-ink-950 py-10 sm:py-12">
        <div className={shell}>
          <AdBanner />
        </div>
      </div>

      {/* 5 — Why Jupiter Tech-Academy */}
      <section className="bg-ink-950 pb-16 sm:pb-20 lg:pb-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why jupiter tech academy"
              title="Built for people who want to actually build"
              description="A practical, modern approach to technical education — no filler, no outdated tooling, no guesswork about what to learn next."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Learning roadmap */}
      <section className="border-y border-white/6 bg-ink-900/70">
        <div className={`${shell} py-16 sm:py-20 lg:py-24`}>
          <Roadmap />
        </div>
      </section>

      {/* 7 — Popular topics */}
      <section className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Popular topics"
              title="Skills employers keep asking for"
              description="Pick a single technology or follow a full path — the topics below appear across our courses and resources."
              align="center"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10">
            <ul className="flex flex-wrap justify-center gap-3">
              {popularTopics.map((topic) => (
                <li key={topic}>
                  <TechnologyBadge label={topic} />
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* 8 — Advertisement */}
      <div className="bg-ink-950 pb-4">
        <div className={shell}>
          <AdBanner />
        </div>
      </div>

      {/* 9 — Final CTA */}
      <div className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <CTASection
          eyebrow="Start today"
          title="Start Learning Technology Today"
          description="Choose a course, follow the roadmap and build projects you can be proud of — at your own pace, on your own schedule."
          primary={{ label: "Explore Courses", href: "/courses" }}
          secondary={{ label: "Browse Resources", href: "/resources" }}
          note="New to coding? Start with JavaScript Mastery."
        />
      </div>
    </>
  );
}
