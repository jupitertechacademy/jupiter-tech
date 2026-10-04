"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cx } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

function isActiveLink(href: string, pathname: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Brand mark — a stylised orbit around the letter J. */
function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl",
        "bg-gradient-to-br from-brand-400 via-brand-600 to-violet-600",
        "shadow-[0_8px_24px_-10px_rgba(47,107,255,0.9)]",
        className,
      )}
    >
      <span className="font-display text-lg font-bold leading-none text-white">J</span>
      <span className="absolute -right-1 -top-1 size-3 rounded-full bg-cyan-300/90 blur-[2px]" />
    </span>
  );
}

/**
 * Sticky site header.
 *
 * Transparent over the hero, then gains a blurred background + hairline border
 * once the page is scrolled. Height is fixed at every breakpoint so the
 * transition can never cause layout shift.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel whenever the route changes (including browser
  // back/forward). Adjusting state during render is the React-recommended
  // alternative to syncing props in an effect.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  const solid = scrolled || open;

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        solid
          ? "border-ink-700/70 bg-ink-950/85 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[72px] lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <LogoMark />
          <span className="truncate font-display text-base font-bold tracking-tight text-white sm:text-lg">
            Jupiter
            <span className="hidden text-ink-300 sm:inline"> Tech Academy</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => {
            const active = isActiveLink(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                  active ? "text-white" : "text-ink-300 hover:text-white",
                )}
              >
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-white/8 ring-1 ring-white/10"
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/courses"
            size="sm"
            className="hidden md:inline-flex"
            withArrow
          >
            Get Started
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className={cx(
              "grid size-11 place-items-center rounded-xl border transition md:hidden",
              open
                ? "border-white/25 bg-white/10 text-white"
                : "border-white/12 bg-white/5 text-ink-100",
            )}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} pathname={pathname} onClose={closeMenu} />
    </header>
  );
}
