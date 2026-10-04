import type { Metadata } from "next";
import {
  BookOpen,
  Compass,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
} from "lucide-react";
import { AdBanner } from "@/components/ads/AdBanner";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stats } from "@/components/ui/Stats";
import { features, roadmapSteps, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Jupiter Tech Academy approaches technology education: project-based courses, clear learning paths and continuously updated curriculum across web, mobile, cloud and AI.",
  alternates: { canonical: "/about" },
  keywords: [
    "about jupiter tech academy",
    "project based tech learning",
    "online technology academy",
    "learn web development",
    "coding curriculum",
  ],
  openGraph: {
    title: "About Us | Jupiter Tech Academy",
    description:
      "Project-based technology education across web development, mobile, cloud and AI — built for beginners and working developers alike.",
    url: "/about",
    type: "website",
  },
};

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const principles = [
  {
    icon: Lightbulb,
    title: "Learn by building",
    description:
      "Every concept is introduced through working code. You leave each module with something that runs, not just notes to re-read.",
  },
  {
    icon: Compass,
    title: "A clear path forward",
    description:
      "Courses follow a deliberate sequence so you always know what to learn next — and why it matters for the project you are building.",
  },
  {
    icon: Shield,
    title: "Honest, current content",
    description:
      "Curriculum is reviewed regularly against current framework versions and real production practices. No filler, no hype.",
  },
  {
    icon: Sparkles,
    title: "Made for real careers",
    description:
      "Skills are mapped to the responsibilities listed in modern technical job posts, so what you learn transfers to the work.",
  },
];

const timeline = [
  {
    period: "Start here",
    title: "Set up and orient",
    description:
      "Install your toolchain, understand how the web fits together and write your first lines of code with confidence.",
  },
  {
    period: "Build fundamentals",
    title: "Core skills that stick",
    description:
      "HTML, CSS, JavaScript and programming fundamentals taught through projects rather than isolated exercises.",
  },
  {
    period: "Specialise",
    title: "Choose your direction",
    description:
      "Move into frontend, backend, mobile, cloud or AI with courses designed to be taken in sequence.",
  },
  {
    period: "Ship and grow",
    title: "Portfolio to interview",
    description:
      "Combine your learning into complete applications, then present your work and keep the momentum going.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Technology education,{" "}
            <span className="text-gradient">built around practice</span>
          </>
        }
        description={`${site.name} is a self-paced academy for people who want practical, career-relevant technology skills — taught through real projects rather than memorised theory.`}
      >
        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <Button href="/courses" size="lg" withArrow>
            Browse Courses
          </Button>
          <Button href="/resources" variant="secondary" size="lg">
            Free Resources
          </Button>
        </div>
      </PageHero>

      {/* Advertisement */}
      <div className="bg-ink-950 pb-4 pt-10 sm:pt-12">
        <div className={shell}>
          <AdBanner />
        </div>
      </div>

      {/* ---------------- Stats ---------------- */}
      <section className="bg-ink-950 pb-16 pt-6 sm:pb-20">
        <div className={shell}>
          <Stats items={stats} />
        </div>
      </section>

      {/* ---------------- Mission ---------------- */}
      <section className="border-y border-white/6 bg-ink-900/70 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Our approach"
                title="We teach the way developers actually work"
                description="Most people do not fail at programming because the topic is hard — they fail because the material is disconnected from anything real. Our courses are structured around complete, working projects, so every new concept has a reason to exist."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-5">
                <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
                  Each course starts where the learner is, moves through the
                  fundamentals in a deliberate order, and finishes with
                  something you can put in a portfolio and talk about in an
                  interview. Nothing is included just to make the syllabus look
                  longer.
                </p>
                <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
                  The catalogue spans web development, frontend and backend
                  engineering, mobile, cloud infrastructure and AI — the areas
                  where modern product teams spend their time.
                </p>

                <div className="mt-2 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <BookOpen className="size-5 text-brand-300" aria-hidden="true" />
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">
                      Self-paced modules you can revisit whenever you need a
                      refresher.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <Shield className="size-5 text-brand-300" aria-hidden="true" />
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">
                      Content reviewed against current framework versions and
                      production practices.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------------- Principles ---------------- */}
      <section className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Principles"
              title="What guides the curriculum"
              description="Four ideas shape every course we publish."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <ScrollReveal key={principle.title} delay={index * 0.07}>
                  <article className="group flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/35">
                    <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/25 to-violet-500/20 text-brand-200 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">
                      {principle.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Journey timeline ---------------- */}
      <section className="border-y border-white/6 bg-ink-900/70 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="The journey"
              title="From first line to shipped project"
              description="Every learner moves through the same four stages — the pace is yours to set."
            />
          </ScrollReveal>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((entry, index) => (
              <li key={entry.title}>
                <ScrollReveal delay={index * 0.08}>
                  <div className="relative flex h-full flex-col gap-3 rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:border-brand-400/35">
                    <span className="absolute left-6 top-0 h-1 w-10 rounded-b-full bg-gradient-to-r from-brand-400 to-violet-400" aria-hidden="true" />
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-brand-400">
                      {entry.period}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-tight text-white">
                      {entry.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-400">
                      {entry.description}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Why us ---------------- */}
      <section className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why learners choose us"
              title="Built for people with a goal"
              description="Whether you are starting from zero or levelling up an existing skill set, the structure stays the same."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Roadmap ---------------- */}
      <section className="border-y border-white/6 bg-ink-900/70 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Learning roadmap"
              title="A structure you can follow"
              description="The same six-stage path runs through the whole catalogue, so courses connect into one continuous journey."
            />
          </ScrollReveal>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roadmapSteps.map((step, index) => (
              <li key={step.step}>
                <ScrollReveal delay={Math.min(index * 0.06, 0.3)}>
                  <div className="flex h-full flex-col gap-2.5 rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/35">
                    <span className="font-mono text-sm font-semibold text-brand-400">
                      {step.step}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-400">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>

          <InArticleAd className="mt-14" />
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Questions? Reach out"
              description="Whether you want help choosing a course or have feedback on the content, we would like to hear from you."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="mt-10">
            <ul className="grid gap-5 sm:grid-cols-3">
              <li className="flex items-start gap-4 rounded-3xl border border-white/8 bg-white/[0.03] p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-brand-500/15 text-brand-300">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-400">
                    Email
                  </span>
                  <span className="text-sm font-medium text-white wrap-anywhere">
                    {site.email}
                  </span>
                </span>
              </li>

              <li className="flex items-start gap-4 rounded-3xl border border-white/8 bg-white/[0.03] p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-brand-500/15 text-brand-300">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-400">
                    Phone
                  </span>
                  <span className="text-sm font-medium text-white">
                    {site.phone}
                  </span>
                </span>
              </li>

              <li className="flex items-start gap-4 rounded-3xl border border-white/8 bg-white/[0.03] p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-brand-500/15 text-brand-300">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-400">
                    Location
                  </span>
                  <span className="text-sm font-medium text-white">
                    {site.location}
                  </span>
                </span>
              </li>
            </ul>
          </ScrollReveal>

          <p className="mt-6 text-sm text-ink-400">
            Contact details are editable placeholders — replace them in{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-ink-200">
              lib/site.ts
            </code>{" "}
            before launch.
          </p>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <div className="bg-ink-950 pb-16 sm:pb-20 lg:pb-24">
        <CTASection
          eyebrow="Start learning"
          title="Your next skill starts with one project"
          description="Pick a course, follow the path and build something real. Everything is self-paced, so you can start today."
          primary={{ label: "Explore Courses", href: "/courses" }}
          secondary={{ label: "Browse Resources", href: "/resources" }}
        />
      </div>
    </>
  );
}
