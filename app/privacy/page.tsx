import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Jupiter Tech Academy handles information on this website, including advertising, analytics and your choices.",
  alternates: { canonical: "/privacy" },
  robots: { index: true },
  openGraph: {
    title: "Privacy Policy | Jupiter Tech Academy",
    description:
      "How Jupiter Tech Academy handles information on this website, including advertising, analytics and your choices.",
    url: "/privacy",
    type: "article",
  },
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: [
      "This website is a static, ad-supported site. It does not require an account, and it does not ask you to submit personal information to browse courses or resources.",
      "If you contact us directly by email or phone, we will receive whatever information you choose to include in that message.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    body: [
      "We use information you send voluntarily only to respond to your enquiry and to keep a record of the correspondence.",
      "We do not sell, rent or trade personal information to third parties.",
    ],
  },
  {
    id: "advertising",
    title: "Advertising",
    body: [
      "This site displays advertisements. Advertising partners may use cookies or similar technologies to serve ads that are relevant to your interests, and to measure the performance of those ads.",
      "You can opt out of personalised advertising through the settings provided by the advertising network serving the ads, or through your browser settings.",
      "The ad slots on this site are currently reserved placeholders. Replace this paragraph with the specific policy of the advertising network you integrate before launch.",
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    body: [
      "If analytics are enabled, they are used in aggregate to understand which pages are useful and how the site performs. No analytics provider has been configured at the time of writing — add the relevant disclosure here when you add one.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: [
      "Our content may link to external sites. We are not responsible for the content or privacy practices of those sites, and we encourage you to review their policies.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: [
      "You may ask what information we hold about you, request a correction, or ask us to delete it. Email the address below and we will respond within a reasonable timeframe.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. Changes take effect when the updated version is published on this page.",
    ],
  },
];

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="A plain-language summary of what this site collects, how it is used and the choices available to you."
      />

      <section className="bg-ink-950 py-16 sm:py-20">
        <div className={shell}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
            <article className="flex flex-col gap-10">
              <p className="text-sm leading-relaxed text-ink-400">
                Last updated:{" "}
                <time dateTime="2026-01-01">1 January 2026</time> — EDITABLE:
                keep this date current whenever the policy changes.
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
                  Contact us
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-300">
                  Questions about this policy can be sent to{" "}
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

            {/* On-page table of contents */}
            <aside aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-6">
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-brand-400">
                  On this page
                </h2>
                <nav className="mt-4">
                  <ul className="flex flex-col gap-2.5">
                    {[...sections, { id: "contact-us", title: "Contact us" }].map(
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
