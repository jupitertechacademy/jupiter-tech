import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply when you use the Jupiter Tech Academy website, its courses and its free resources.",
  alternates: { canonical: "/terms" },
  robots: { index: true },
  openGraph: {
    title: "Terms of Use | Jupiter Tech Academy",
    description:
      "The terms that apply when you use the Jupiter Tech Academy website, its courses and its free resources.",
    url: "/terms",
    type: "article",
  },
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: [
      "By accessing this website you agree to these terms. If you do not agree, please do not use the site.",
      "These are placeholder terms for a static demonstration site. Replace them with reviewed legal wording before launching commercially.",
    ],
  },
  {
    id: "use-of-the-site",
    title: "Use of the site",
    body: [
      "You may browse the site and use its content for personal, non-commercial learning. You agree not to misuse the site — for example by attempting to disrupt it, scrape it at scale, or republish its content as your own.",
    ],
  },
  {
    id: "educational-content",
    title: "Educational content",
    body: [
      "Courses, articles and resources are provided for general educational purposes. Technology changes quickly, so examples may reference specific versions of frameworks and tools.",
      "Completing any course does not guarantee employment, certification or any particular outcome. No credentials, accreditation or placement results are claimed by this site.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: [
      "Unless otherwise stated, the site's original text, structure and design belong to the site owner. Third-party names, logos and trademarks belong to their respective owners and are used descriptively.",
      "You may quote short extracts with attribution, but you may not republish full courses or resources without permission.",
    ],
  },
  {
    id: "advertisements",
    title: "Advertisements",
    body: [
      "The site is supported by advertising. Advertisements are provided by third parties and their content is not controlled by us. Any interaction you have with an advertiser is between you and that advertiser.",
    ],
  },
  {
    id: "external-links",
    title: "External links",
    body: [
      "Links to external websites are provided for convenience. We do not endorse and are not responsible for the content, availability or practices of those sites.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: [
      "The site is provided on an \"as is\" and \"as available\" basis without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free or free of harmful components.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, the site owner will not be liable for any indirect, incidental or consequential loss arising from your use of, or inability to use, this site.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: [
      "We may update these terms at any time. Continued use of the site after changes are published constitutes acceptance of the revised terms.",
    ],
  },
];

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The rules that apply when you browse this site, use its courses and download its resources."
      />

      <section className="bg-ink-950 py-16 sm:py-20">
        <div className={shell}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
            <article className="flex flex-col gap-10">
              <p className="text-sm leading-relaxed text-ink-400">
                Last updated:{" "}
                <time dateTime="2026-01-01">1 January 2026</time> — EDITABLE:
                keep this date current whenever the terms change.
              </p>

              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-relaxed text-ink-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section id="contact-us" className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                  Contact
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-300">
                  Questions about these terms can be sent to{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-brand-300 underline decoration-brand-400/40 underline-offset-4 transition hover:text-brand-200"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </section>
            </article>

            <aside aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-6">
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-brand-400">
                  On this page
                </h2>
                <nav className="mt-4">
                  <ul className="flex flex-col gap-2.5">
                    {[...sections, { id: "contact-us", title: "Contact" }].map(
                      (section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="text-sm text-ink-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                          >
                            {section.title}
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="bg-ink-950 pb-16 sm:pb-20 lg:pb-24">
        <CTASection
          eyebrow="Back to learning"
          title="Explore courses and resources"
          description="Everything on the site is open to browse — no account required."
          primary={{ label: "Browse Courses", href: "/courses" }}
          secondary={{ label: "Free Resources", href: "/resources" }}
        />
      </div>
    </>
  );
}
