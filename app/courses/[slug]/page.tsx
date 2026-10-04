import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock,
  Tag,
} from "lucide-react";
import { courses, courseSlugs, getCourseBySlug } from "@/lib/courses";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { CourseCurriculum } from "@/components/courses/CourseCurriculum";
import { CourseFaq } from "@/components/courses/CourseFaq";
import { AdBanner } from "@/components/ads/AdBanner";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { MobileAd } from "@/components/ads/MobileAd";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cx } from "@/lib/utils";

type CoursePageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course not found", robots: { index: false } };
  }

  const canonical = `/courses/${course.slug}`;

  return {
    title: course.title,
    description: course.description,
    alternates: { canonical },
    keywords: [course.title, course.category, ...course.topics],
    openGraph: {
      title: `${course.title} | ${site.name}`,
      description: course.description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${course.title} | ${site.name}`,
      description: course.description,
    },
  };
}

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-400" aria-hidden="true" />
      <span className="text-sm leading-relaxed text-ink-300 sm:text-base">
        {children}
      </span>
    </li>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold tracking-tight text-white">
        {title}
      </h3>
      <div className="mt-5 flex flex-col gap-3.5">{children}</div>
    </div>
  );
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  const currentIndex = courses.findIndex((item) => item.slug === course.slug);
  const nextCourse = courses[(currentIndex + 1) % courses.length];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    inLanguage: "en",
    educationalLevel: course.level,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    ...(course.topics.length ? { keywords: course.topics.join(", ") } : {}),
  };

  const metaChips = [
    { icon: Tag, label: "Category", value: course.category },
    { icon: BarChart3, label: "Level", value: course.level },
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: BookOpen, label: "Format", value: course.format },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ---------------- Hero ---------------- */}
      <PageHero
        eyebrow={course.category}
        title={course.title}
        description={course.description}
      >
        <div className="flex flex-col gap-7 pt-1">
          <ul className="flex flex-wrap gap-2.5">
            {metaChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-2 text-xs text-ink-200 backdrop-blur-sm"
                >
                  <Icon className="size-3.5 text-brand-300" aria-hidden="true" />
                  <span className="text-ink-400">{chip.label}:</span>
                  <span className="font-medium text-white">{chip.value}</span>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#curriculum" size="lg" withArrow>
              View Curriculum
            </Button>
            <Button href="/courses" variant="secondary" size="lg">
              All Courses
            </Button>
          </div>
        </div>
      </PageHero>

      {/* Advertisement */}
      <div className="bg-ink-950 pb-4 pt-10 sm:pt-12">
        <div className={shell}>
          <AdBanner />
        </div>
      </div>

      {/* ---------------- What you will learn ---------------- */}
      <section className="bg-ink-950 pb-16 pt-6 sm:pb-20">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Outcomes"
              title="What you will learn"
              description="By the end of this course you will be able to…"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5">
              {course.outcomes.map((outcome) => (
                <Bullet key={outcome}>{outcome}</Bullet>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- Curriculum ---------------- */}
      <section
        id="curriculum"
        className="border-y border-white/6 bg-ink-900/70 py-16 sm:py-20 lg:py-24"
      >
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Curriculum"
              title="Course curriculum"
              description={`${course.modules.length} modules, each building directly on the last. Expand any module to see the lessons inside.`}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="mt-10">
            <CourseCurriculum modules={course.modules} />
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- Prerequisites + audience ---------------- */}
      <section className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <Panel title="Prerequisites">
                {course.prerequisites.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </Panel>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <Panel title="Who this course is for">
                {course.audience.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </Panel>
            </ScrollReveal>
          </div>

          <InArticleAd className="mt-14" />
          <MobileAd className="mt-6" />
        </div>
      </section>

      {/* ---------------- Skills ---------------- */}
      <section className="border-y border-white/6 bg-ink-900/70 py-16 sm:py-20">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Skills"
              title="Skills you will gain"
              description="Practical, transferable capabilities you can point to in a portfolio or interview."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="mt-9">
            <ul className="flex flex-wrap gap-3">
              {course.skills.map((skill) => (
                <li
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-ink-200 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-white"
                >
                  <span className="size-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- Learning path ---------------- */}
      <section className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Learning path"
              title="Where this course fits"
              description="Courses are designed to be taken in sequence — this is the natural position of this one."
              align="center"
            />
          </ScrollReveal>

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "Before",
                title: "Foundations",
                description:
                  course.prerequisites[0] ?? "Comfort with core programming concepts.",
              },
              {
                step: "Now",
                title: course.title,
                description: course.duration,
                current: true,
              },
              {
                step: "Next",
                title: nextCourse.title,
                description: nextCourse.description,
                href: `/courses/${nextCourse.slug}`,
              },
            ].map((entry, index) => (
              <li key={entry.step}>
                <ScrollReveal delay={index * 0.08}>
                  <div
                    className={cx(
                      "flex h-full flex-col gap-3 rounded-3xl border p-6 transition",
                      entry.current
                        ? "border-brand-400/50 bg-brand-500/10"
                        : "border-white/8 bg-white/[0.03] hover:border-white/20",
                    )}
                  >
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-brand-400">
                      {entry.step}
                    </span>

                    {entry.href ? (
                      <Link
                        href={entry.href}
                        className="font-display text-lg font-bold tracking-tight text-white transition hover:text-brand-200"
                      >
                        {entry.title}
                      </Link>
                    ) : (
                      <h3 className="font-display text-lg font-bold tracking-tight text-white">
                        {entry.title}
                      </h3>
                    )}

                    <p className="text-sm leading-relaxed text-ink-400">
                      {entry.description}
                    </p>

                    {entry.href ? (
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-brand-300">
                        View course
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
                    ) : null}
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="border-t border-white/6 bg-ink-900/70 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Everything you might want to know before starting."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="mt-10">
            <CourseFaq faq={course.faq} />
          </ScrollReveal>

          <InArticleAd className="mt-14" />
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <div className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <CTASection
          eyebrow="Keep going"
          title={`Ready to start ${course.title}?`}
          description="Browse the full catalogue to compare paths, or open the free resources to try a topic first."
          primary={{ label: "View Curriculum", href: "#curriculum" }}
          secondary={{ label: "All Courses", href: "/courses" }}
          note="All courses are self-paced and updated regularly."
        />
      </div>
    </>
  );
}
