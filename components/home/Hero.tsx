"use client";

import { motion } from "framer-motion";
import { Atom, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const assurance = [
  "Self-paced",
  "Project based",
  "Free resources",
];

/** Decorative code editor visual — pure markup, no images or scripts. */
function CodeCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/85 shadow-pop backdrop-blur-xl">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/8 bg-white/[0.03] px-5 py-3.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-rose-400/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="font-mono text-[11px] text-ink-400">future.js</span>
        <span className="ml-auto rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-brand-300">
          ready
        </span>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[11px] leading-6 sm:text-xs">
        <code aria-hidden="true">
          <span className="block">
            <span className="text-violet-300">const</span>{" "}
            <span className="text-cyan-300">learner</span>{" "}
            <span className="text-ink-400">=</span> <span className="text-ink-300">{"{"}</span>
          </span>
          <span className="block pl-4">
            <span className="text-brand-300">stack</span>
            <span className="text-ink-400">:</span> <span className="text-ink-200">[</span>
            <span className="text-emerald-300">&quot;React&quot;</span>
            <span className="text-ink-400">, </span>
            <span className="text-emerald-300">&quot;Next.js&quot;</span>
            <span className="text-ink-400">, </span>
            <span className="text-emerald-300">&quot;Node&quot;</span>
            <span className="text-ink-200">]</span>
            <span className="text-ink-400">,</span>
          </span>
          <span className="block pl-4">
            <span className="text-brand-300">goal</span>
            <span className="text-ink-400">:</span>{" "}
            <span className="text-emerald-300">&quot;career&quot;</span>
            <span className="text-ink-400">,</span>
          </span>
          <span className="block">
            <span className="text-ink-300">{"}"}</span>
          </span>
          <span className="block">&nbsp;</span>
          <span className="block">
            <span className="text-violet-300">export default async function</span>{" "}
            <span className="text-cyan-300">Future</span>
            <span className="text-ink-300">(){" {"}</span>
          </span>
          <span className="block pl-4">
            <span className="text-violet-300">return</span>{" "}
            <span className="text-cyan-300">build</span>
            <span className="text-ink-300">(</span>
            <span className="text-ink-100">learner</span>
            <span className="text-ink-300">);</span>
          </span>
          <span className="block">
            <span className="text-ink-300">{"}"}</span>
          </span>
        </code>
      </pre>

      {/* Output strip */}
      <div className="flex items-center gap-3 border-t border-white/8 bg-white/[0.02] px-5 py-4">
        <Sparkles className="size-4 shrink-0 text-brand-300" aria-hidden="true" />
        <p className="text-xs text-ink-300">
          From first commit to deployed product.
        </p>
      </div>
    </div>
  );
}

/**
 * Homepage hero.
 *
 * All artwork is CSS/SVG-free markup (code card, chips, glows), so nothing is
 * downloaded and the layout is fixed before hydration — zero CLS.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* Background layers */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-70 mask-fade-b" />
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-48 size-[34rem] rounded-full bg-brand-600/30 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-16 size-[26rem] rounded-full bg-violet-600/25 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        {/* ---------- Copy ---------- */}
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-pulse-soft rounded-full bg-cyan-300" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-100">
              Learn. Build. Grow.
            </span>
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-[2.5rem] font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build Your Future with{" "}
            <span className="text-gradient">Technology</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            Jupiter Tech Academy helps learners develop practical technology
            skills for modern careers — structured courses, hands-on projects and
            free resources across web, mobile, Python, cloud and AI.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/courses" size="lg" className="w-full sm:w-auto" withArrow>
              Explore Courses
            </Button>
            <Button
              href="/resources"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Resources
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {assurance.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-sm text-ink-400"
              >
                <Check className="size-4 text-emerald-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ---------- Visual ---------- */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient glow behind the card */}
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-brand-500/40 via-violet-500/25 to-cyan-400/25 blur-3xl"
          />

          <div className="relative">
            <CodeCard />

            {/* Floating technology chip */}
            <motion.div
              aria-hidden="true"
              className="absolute -top-6 right-3 hidden rounded-2xl border border-white/12 bg-ink-800/90 px-4 py-2.5 shadow-pop backdrop-blur-md sm:right-6 sm:flex sm:items-center sm:gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Atom className="size-4 text-cyan-300" />
              <span className="font-mono text-xs font-medium text-ink-100">React</span>
            </motion.div>

            {/* Floating learning-path card */}
            <motion.div
              aria-hidden="true"
              className="absolute -bottom-7 left-3 hidden w-52 rounded-2xl border border-white/12 bg-ink-800/90 p-4 shadow-pop backdrop-blur-md sm:block lg:-left-8"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                Learning path
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white">
                Beginner → Career
              </p>
              <div className="mt-3 flex gap-1.5">
                {[0, 1, 2, 3, 4].map((step) => (
                  <span
                    key={step}
                    className={`h-1 flex-1 rounded-full ${step < 3 ? "bg-brand-400" : "bg-white/12"}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
