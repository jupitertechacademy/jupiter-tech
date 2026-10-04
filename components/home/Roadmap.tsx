"use client";

import { motion } from "framer-motion";
import { roadmapSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Six-stage learning progression.
 *
 * The connector line draws itself and each step fades up in sequence the first
 * time the section enters the viewport — then it stops observing.
 */
export function Roadmap() {
  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Learning roadmap"
          title="From first line of code to career"
          description="A clear progression that builds one layer at a time — no guessing what to learn next."
          align="center"
        />
      </ScrollReveal>

      <div className="relative">
        {/* Connector — desktop only */}
        <motion.div
          aria-hidden="true"
          className="absolute left-6 right-6 top-6 hidden h-px origin-left bg-gradient-to-r from-brand-400/10 via-brand-400/50 to-violet-400/40 lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.ol
          className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {roadmapSteps.map((item) => (
            <motion.li
              key={item.step}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <span className="relative grid size-12 shrink-0 place-items-center rounded-2xl border border-brand-400/40 bg-ink-900 font-mono text-sm font-semibold text-brand-300 shadow-[0_0_0_6px_rgba(4,6,26,1)]">
                {item.step}
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-400">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
}
