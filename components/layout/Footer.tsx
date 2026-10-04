import Link from "next/link";
import type { ReactNode } from "react";
import {
  AtSign,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Phone,
  Play,
  type LucideIcon,
} from "lucide-react";
import { courses } from "@/lib/courses";
import {
  footerNavigation,
  footerResources,
  site,
  socialLinks,
} from "@/lib/site";

/**
 * Maps the placeholder social labels to a neutral icon.
 * (Brand logos were removed from lucide-react — these are stand-ins.
 * EDITABLE: swap in official brand SVGs when the real URLs go live.)
 */
const socialIcons: Record<string, LucideIcon> = {
  "X (Twitter)": AtSign,
  GitHub: GitBranch,
  LinkedIn: Link2,
  YouTube: Play,
};

const contactItems = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Location", value: site.location, href: null },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <nav aria-label={title}>
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
        {title}
      </h2>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </nav>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-ink-300 transition-colors duration-200 hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink-700/60 bg-ink-900">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 mask-fade-b" />
      <div aria-hidden="true" className="divider-glow absolute inset-x-0 top-0" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label={`${site.name} — home`}
            >
              <span
                aria-hidden="true"
                className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-400 via-brand-600 to-violet-600"
              >
                <span className="font-display text-lg font-bold leading-none text-white">J</span>
                <span className="absolute -right-1 -top-1 size-3 rounded-full bg-cyan-300/90 blur-[2px]" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Jupiter Tech Academy
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              A modern technology academy helping learners build practical,
              career-focused skills across web, mobile, Python, cloud and AI.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Social media">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label] ?? AtSign;
                return (
                  <li key={social.label}>
                    {/* EDITABLE: replace `href` with the real profile URL. */}
                    <a
                      href={social.href}
                      aria-label={`${site.name} on ${social.label} (placeholder link)`}
                      className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/4 text-ink-300 transition duration-200 hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-white"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <FooterColumn title="Navigation">
              {footerNavigation.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2">
            <FooterColumn title="Courses">
              {courses.slice(0, 6).map((course) => (
                <FooterLink key={course.slug} href={`/courses/${course.slug}`}>
                  {course.title}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <FooterColumn title="Resources">
              {footerResources.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2" id="contact">
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Contact
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const body = (
                  <>
                    <Icon className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-ink-500">
                        {item.label}
                      </span>
                      <span className="wrap-anywhere block text-sm text-ink-300">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex gap-3 text-sm transition-colors duration-200 hover:text-white"
                      >
                        {body}
                      </a>
                    ) : (
                      <span className="flex gap-3">{body}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="divider-glow" aria-hidden="true" />

        <div className="flex flex-col-reverse gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {year} {site.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-500">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
