"use client";

import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/layout/Container";

const skillGroups = [
  {
    title: "Frontend Systems",
    description:
      "Building refined interfaces with stronger hierarchy, responsiveness, and modern implementation quality.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    title: "Backend / API",
    description:
      "Working with integrations and application logic that support real product behavior and cleaner data flow.",
    items: ["REST API", "Node.js", "Django", "Authentication", "Data Handling"],
  },
  {
    title: "CMS / Commerce",
    description:
      "Creating modern content and shopping experiences with stronger product presentation and user flow clarity.",
    items: ["WordPress", "WooCommerce", "Product Flows", "Checkout UX"],
  },
  {
    title: "Implementation & Delivery",
    description:
      "Focusing on responsiveness, debugging, polish, and the details that make digital work feel production-ready.",
    items: ["Responsive UI", "Performance", "Debugging", "Deployment"],
  },
];

export default function SkillsPreview() {
  const shouldReduceMotion = useReducedMotion();

  const headerMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.65, ease: "easeOut" as const },
      };

  const mobilePrimary = skillGroups[0];
  const mobileSecondary = skillGroups[1];
  const mobileThird = skillGroups[2];
  const mobileFourth = skillGroups[3];

  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[8%] top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute left-[10%] bottom-12 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <Container>
        <motion.div className="max-w-4xl" {...headerMotion}>
          <div className="lg:hidden">
            <div className="max-w-[30rem]">
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-white/42">
                  Skills / Expertise
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
              </div>

              <h2 className="mt-6 text-[2.2rem] font-semibold leading-[0.9] tracking-[-0.08em] text-white xs:text-[2.45rem]">
                Capability shaped
                <span className="block text-white/72">as systems,</span>
                <span className="block">not just scattered</span>
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-white/76 bg-clip-text text-transparent">
                  tools and labels.
                </span>
              </h2>

              <p className="mt-5 max-w-[34ch] text-[14px] leading-7 text-white/64">
                My skill set is centered around modern frontend quality,
                product thinking, and implementation discipline — with a focus
                on making digital experiences feel more credible, more usable,
                and more professionally complete.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="section-eyebrow">Skills / Expertise</p>
            <h2 className="mt-6 text-[2.15rem] leading-[1] tracking-[-0.05em] font-semibold text-white sm:text-[3rem] lg:text-[4rem]">
              Capability presented as systems, not just a list of tools.
            </h2>
            <p className="section-copy mt-6 max-w-2xl">
              My skill set is centered around modern frontend quality, product
              thinking, and implementation discipline — with a focus on making
              digital experiences feel more credible, more usable, and more
              professionally complete.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 sm:mt-14">
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-3">
              <motion.article
                className="relative col-span-2 overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.94)_0%,rgba(7,11,22,0.98)_100%)] p-4 shadow-[0_20px_48px_rgba(0,0,0,0.28)]"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(103,232,249,0.10),transparent_26%),radial-gradient(circle_at_86%_12%,rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.08),transparent_26%)]" />
                <div className="absolute inset-[1px] rounded-[calc(1.9rem-1px)] border border-white/[0.04]" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/72">
                        Area 01
                      </p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/34">
                        Core Capability
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/40">
                      Primary
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-[12ch] text-[1.8rem] font-semibold leading-[0.96] tracking-[-0.06em] text-white">
                    {mobilePrimary.title}
                  </h3>

                  <p className="mt-4 max-w-[34ch] text-[14px] leading-7 text-white/66">
                    {mobilePrimary.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2">
                    {mobilePrimary.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[12px] text-white/66"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>

              <motion.article
                className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,30,0.9)_0%,rgba(7,11,22,0.96)_100%)] p-4"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.62, delay: 0.04, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_24%)]" />
                <div className="absolute inset-[1px] rounded-[calc(1.55rem-1px)] border border-white/[0.04]" />

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-blue-200/72">
                    Area 02
                  </p>
                  <h3 className="mt-3 text-[1.15rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                    {mobileSecondary.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-white/64">
                    {mobileSecondary.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {mobileSecondary.items.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
                        <span className="text-[12px] text-white/58">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>

              <motion.article
                className="relative overflow-hidden rounded-[1.55rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(18,31,56,0.56)_0%,rgba(10,17,31,0.62)_100%)] p-4"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
              >
                <div className="absolute inset-[1px] rounded-[calc(1.55rem-1px)] border border-white/[0.04]" />

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-cyan-200/70">
                    Area 03
                  </p>
                  <h3 className="mt-3 text-[1.15rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                    {mobileThird.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-white/68">
                    {mobileThird.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {mobileThird.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-white/58"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>

              <motion.article
                className="relative col-span-2 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,27,0.92)_0%,rgba(7,11,22,0.98)_100%)] p-4"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.64, delay: 0.12, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_22%)]" />
                <div className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] border border-white/[0.04]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.26em] text-blue-200/72">
                        Area 04
                      </p>
                      <h3 className="mt-3 text-[1.28rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                        {mobileFourth.title}
                      </h3>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                        Delivery
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 grid-cols-[1.05fr_0.95fr]">
                    <p className="text-[13px] leading-6 text-white/64">
                      {mobileFourth.description}
                    </p>

                    <div className="space-y-2">
                      {mobileFourth.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-[0.95rem] border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-white/60"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="mt-14 border-t border-white/10">
              {skillGroups.map((group, index) => {
                const rowMotion = shouldReduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 26 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.22 },
                      transition: {
                        duration: 0.65,
                        delay: index * 0.08,
                        ease: "easeOut" as const,
                      },
                    };

                return (
                  <motion.div
                    key={group.title}
                    className="border-b border-white/10 py-8 sm:py-10 lg:py-12"
                    {...rowMotion}
                  >
                    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/72">
                          Area 0{index + 1}
                        </p>
                        <h3 className="mt-4 text-[1.35rem] leading-[1.08] tracking-[-0.04em] font-semibold text-white sm:text-[1.55rem] lg:text-[1.8rem]">
                          {group.title}
                        </h3>
                      </div>

                      <div className="max-w-3xl">
                        <p className="text-sm leading-7 text-white/66 sm:text-[15px] sm:leading-8 lg:text-base">
                          {group.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 sm:px-3.5 sm:py-2 sm:text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}