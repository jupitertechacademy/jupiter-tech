import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false },
};

const links = [
  {
    href: "/",
    icon: Home,
    label: "Home",
    description: "Back to the academy homepage.",
  },
  {
    href: "/courses",
    icon: Compass,
    label: "Courses",
    description: "Browse the full course catalogue.",
  },
  {
    href: "/resources",
    icon: Search,
    label: "Resources",
    description: "Free cheat sheets, guides and roadmaps.",
  },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {/* Background: grid + glows */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60 mask-fade-b" />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-0 size-[30rem] rounded-full bg-brand-600/20 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 size-[26rem] rounded-full bg-violet-600/20 blur-[150px]"
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-brand-300">
            Error 404
          </p>

          <h1 className="mt-6 font-display text-6xl font-bold leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
            <span className="text-gradient">404</span>
          </h1>

          <p className="mt-6 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            This page drifted out of orbit
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
            The page you are looking for does not exist, may have been moved,
            or the address might contain a typo. Try one of the links below
            instead.
          </p>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button href="/" size="lg" className="w-full sm:w-auto" withArrow>
              Back to Home
            </Button>
            <Button href="/courses" variant="secondary" size="lg" className="w-full sm:w-auto">
              Browse Courses
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-14 w-full">
          <ul className="grid gap-4 text-left sm:grid-cols-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex h-full flex-col gap-2 rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-400/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                  >
                    <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-brand-500/15 text-brand-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-display text-base font-bold text-white">
                      {link.label}
                    </span>
                    <span className="text-sm leading-relaxed text-ink-400">
                      {link.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
