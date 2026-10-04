"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cx } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  pathname: string;
  onClose: () => void;
}

/**
 * Full-screen animated navigation for small viewports.
 * Locks background scrolling, closes on Escape and moves focus into the panel.
 */
export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="relative flex max-h-full flex-col gap-1 overflow-y-auto border-b border-ink-700/70 bg-ink-900/97 px-4 pb-8 pt-5 shadow-pop"
            variants={{
              hidden: { opacity: 0, y: -16 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -16 },
            }}
          >
            <div className="mb-3 flex items-center justify-between px-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="grid size-10 place-items-center rounded-full border border-white/10 text-ink-200 transition hover:border-white/25 hover:text-white"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            {navLinks.map((link, index) => {
              const active =
                !link.href.includes("#") &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`));

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                >
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cx(
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium transition",
                      active
                        ? "bg-brand-500/12 text-white"
                        : "text-ink-200 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-4 text-ink-500"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.3 }}
              className="mt-5 flex flex-col gap-3 border-t border-white/8 pt-5"
            >
              <Button href="/courses" size="lg" className="w-full" withArrow>
                Explore Courses
              </Button>
              <p className="px-2 text-center text-xs text-ink-500">
                {site.tagline}
              </p>
            </motion.div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
