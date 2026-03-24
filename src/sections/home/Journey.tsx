"use client";

import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/layout/Container";

const journeyItems = [
  {
    step: "Step 01",
    title: "Foundation in Modern Frontend",
    description:
      "Built a strong base in responsive layouts, component thinking, and modern UI development with a focus on clean structure and visual polish.",
  },
  {
    step: "Step 02",
    title: "Real-World Product Building",
    description:
      "Moved beyond simple pages into practical website experiences involving e-commerce flows, dynamic content, and production-style implementation.",
  },
  {
    step: "Step 03",
    title: "Sharper Product Thinking",
    description:
      "Developed a stronger focus on usability, business context, responsive behavior, and the details that make digital products feel complete.",
  },
  {
    step: "Step 04",
    title: "Agency-Ready Direction",
    description:
      "Now focused on building premium web experiences that combine design sensitivity, frontend execution, and real-world development discipline.",
  },
];

export default function Journey() {
  const shouldReduceMotion = useReducedMotion();

  const headerMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.65, ease: "easeOut" as const },
      };

  const lineMotion = shouldReduceMotion
    ? {}
    : {
        initial: { scaleY: 0, opacity: 0.35 },
        whileInView: { scaleY: 1, opacity: 1 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 1, ease: "easeOut" as const },
      };

  const firstStep = journeyItems[0];
  const middleSteps = journeyItems.slice(1, 3);
  const finalStep = journeyItems[3];

  return (
    <section id="journey" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute right-[10%] bottom-12 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <Container>
        <motion.div className="max-w-4xl" {...headerMotion}>
          <div className="lg:hidden">
            <div className="max-w-[30rem]">
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-white/42">
                  Journey
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
              </div>

              <h2 className="mt-6 text-[2.2rem] font-semibold leading-[0.9] tracking-[-0.08em] text-white xs:text-[2.45rem]">
                A progression shaped
                <span className="block text-white/72">by stronger taste,</span>
                <span className="block">better execution,</span>
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-white/76 bg-clip-text text-transparent">
                  and more serious thinking.
                </span>
              </h2>

              <p className="mt-5 max-w-[34ch] text-[14px] leading-7 text-white/64">
                My growth has been about becoming more intentional — not only in
                how digital work looks, but in how it behaves, communicates, and
                earns trust through execution quality.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="section-eyebrow">Journey</p>
            <h2 className="mt-6 text-[2.15rem] leading-[1] tracking-[-0.05em] font-semibold text-white sm:text-[3rem] lg:text-[4rem]">
              A progression shaped by stronger taste, better implementation, and
              more serious product thinking.
            </h2>
            <p className="section-copy mt-6 max-w-2xl">
              My growth has been about becoming more intentional — not only in how
              digital work looks, but in how it behaves, communicates, and earns
              trust through execution quality.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 sm:mt-14">
          <div className="lg:hidden">
            <motion.article
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.94)_0%,rgba(7,11,22,0.98)_100%)] p-4 shadow-[0_20px_48px_rgba(0,0,0,0.28)]"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(103,232,249,0.10),transparent_26%),radial-gradient(circle_at_86%_12%,rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.08),transparent_26%)]" />
              <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.04]" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/72">
                      {firstStep.step}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/34">
                      Foundation Layer
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-300/[0.05]">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.6)]" />
                  </div>
                </div>

                <h3 className="mt-5 max-w-[12ch] text-[1.8rem] font-semibold leading-[0.96] tracking-[-0.06em] text-white">
                  {firstStep.title}
                </h3>

                <p className="mt-4 max-w-[34ch] text-[14px] leading-7 text-white/66">
                  {firstStep.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-3.5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                      Focus
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-white/72">
                      Structure, responsiveness, visual discipline.
                    </p>
                  </div>

                  <div className="rounded-[1.15rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(18,31,56,0.42)_0%,rgba(10,17,31,0.46)_100%)] p-3.5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/68">
                      Shift
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-white/74">
                      From basics into quality-oriented frontend craft.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            <div className="relative mt-5 px-1">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/50 via-white/12 to-transparent" />

              <div className="space-y-4">
                {middleSteps.map((item, index) => {
                  const isRight = index % 2 === 1;

                  return (
                    <motion.div
                      key={item.title}
                      className={`relative flex ${isRight ? "justify-end" : "justify-start"}`}
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, y: 22, x: isRight ? 16 : -16 }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 1, y: 0, x: 0 }
                      }
                      viewport={{ once: true, amount: 0.22 }}
                      transition={{
                        duration: 0.62,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <div className="absolute left-1/2 top-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-blue-200/20 bg-[#071120]" />
                      <div className="absolute left-1/2 top-[31px] z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-300" />

                      <article className="relative w-[calc(50%-10px)] min-w-[9.25rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,30,0.9)_0%,rgba(7,11,22,0.96)_100%)] p-3.5">
                        <div className="absolute inset-[1px] rounded-[calc(1.35rem-1px)] border border-white/[0.04]" />
                        <div className="relative">
                          <p className="text-[10px] uppercase tracking-[0.22em] text-blue-200/72">
                            {item.step}
                          </p>
                          <h3 className="mt-3 text-[1rem] font-semibold leading-[1.04] tracking-[-0.035em] text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-[12px] leading-6 text-white/64">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.article
              className="relative mt-5 overflow-hidden rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,27,0.92)_0%,rgba(7,11,22,0.98)_100%)] p-4"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.64, delay: 0.12, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.08),transparent_24%)]" />
              <div className="absolute inset-[1px] rounded-[calc(1.85rem-1px)] border border-white/[0.04]" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72">
                      {finalStep.step}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/34">
                      Current Direction
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Now
                  </span>
                </div>

                <h3 className="mt-5 max-w-[13ch] text-[1.55rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white">
                  {finalStep.title}
                </h3>

                <p className="mt-4 max-w-[34ch] text-[14px] leading-7 text-white/66">
                  {finalStep.description}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/32">
                    Taste
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/6 to-transparent" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/32">
                    Execution
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/6 to-transparent" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/32">
                    Trust
                  </span>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="hidden lg:block">
            <div className="relative mt-14 sm:mt-16">
              <motion.div
                className="absolute left-[13px] top-0 h-full w-px origin-top bg-gradient-to-b from-blue-300/80 via-white/18 to-transparent sm:left-[15px]"
                {...lineMotion}
              />

              <div className="space-y-7 sm:space-y-8 lg:space-y-10">
                {journeyItems.map((item, index) => {
                  const cardMotion = shouldReduceMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 26 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true, amount: 0.25 },
                        transition: {
                          duration: 0.65,
                          delay: index * 0.08,
                          ease: "easeOut" as const,
                        },
                      };

                  return (
                    <div key={item.title} className="relative pl-10 sm:pl-12">
                      <motion.div
                        className="absolute left-0 top-5 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-blue-200/30 bg-[#071120] sm:h-8 sm:w-8"
                        initial={
                          shouldReduceMotion
                            ? undefined
                            : { scale: 0.84, opacity: 0 }
                        }
                        whileInView={
                          shouldReduceMotion
                            ? undefined
                            : { scale: 1, opacity: 1 }
                        }
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.08 + index * 0.08,
                          ease: "easeOut",
                        }}
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-300 sm:h-3 sm:w-3" />
                        {!shouldReduceMotion && (
                          <motion.span
                            className="absolute inset-0 rounded-full border border-blue-300/30"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1.5, opacity: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                              duration: 1.05,
                              delay: 0.18 + index * 0.08,
                              ease: "easeOut",
                            }}
                          />
                        )}
                      </motion.div>

                      <motion.article
                        className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:rounded-[1.6rem] sm:p-6 lg:p-7"
                        {...cardMotion}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-blue-400/[0.06]" />

                        <div className="relative">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-blue-200/72 sm:text-[11px]">
                              {item.step}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.22em] text-white/38 sm:text-xs">
                              Evolution
                            </span>
                          </div>

                          <h3 className="mt-5 text-[1.3rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[1.55rem] lg:text-[1.8rem]">
                            {item.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-white/66 sm:text-[15px] sm:leading-8">
                            {item.description}
                          </p>
                        </div>
                      </motion.article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}