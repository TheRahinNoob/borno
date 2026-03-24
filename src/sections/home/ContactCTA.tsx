"use client";

import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/layout/Container";

const focusAreas = [
  "Frontend Development",
  "Premium UI",
  "Responsive Systems",
  "E-commerce",
  "Product Interfaces",
];

export default function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  const sectionMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.7, ease: "easeOut" as const },
      };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-16 h-64 w-64 rounded-full bg-blue-500/6 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-72 w-72 rounded-full bg-violet-500/6 blur-3xl" />
      </div>

      <Container>
        <div className="lg:hidden">
          <motion.div className="mx-auto max-w-[30rem]" {...sectionMotion}>
            <div className="flex items-center gap-4">
              <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-white/42">
                Contact
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.72)_0%,rgba(5,9,19,0.9)_100%)] px-5 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(103,232,249,0.10),transparent_24%),radial-gradient(circle_at_86%_12%,rgba(96,165,250,0.10),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.08),transparent_24%)]" />
              <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.04]" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.65)]" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/36">
                    Final invitation
                  </span>
                </div>

                <h2 className="mt-5 max-w-[12ch] text-[2.4rem] font-semibold leading-[0.88] tracking-[-0.09em] text-white xs:text-[2.65rem]">
                  Let’s build
                  <span className="block text-white/76">something modern,</span>
                  <span className="block">meaningful,</span>
                  <span className="block bg-gradient-to-r from-white via-cyan-100 to-white/78 bg-clip-text text-transparent">
                    and visually strong.
                  </span>
                </h2>

                <p className="mt-6 max-w-[35ch] text-[14px] leading-8 text-white/64">
                  I’m open to opportunities where thoughtful design, strong
                  frontend execution, and premium digital experience really
                  matter. The goal is always to create work that feels more
                  intentional, more credible, and more complete.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <a
                    href="mailto:your@email.com"
                    className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.06] px-4 py-4"
                  >
                    <div className="absolute inset-[1px] rounded-[calc(1.35rem-1px)] border border-white/[0.04]" />
                    <div className="relative">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/70">
                        Email
                      </p>
                      <p className="mt-2 text-[1rem] font-medium text-white">
                        Reach Out
                      </p>
                      <div className="mt-4 flex justify-end">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/82 transition group-hover:text-white">
                          →
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,31,56,0.5)_0%,rgba(10,17,31,0.58)_100%)] px-4 py-4"
                  >
                    <div className="absolute inset-[1px] rounded-[calc(1.35rem-1px)] border border-white/[0.04]" />
                    <div className="relative">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/70">
                        Resume
                      </p>
                      <p className="mt-2 text-[1rem] font-medium text-white">
                        View Profile
                      </p>
                      <div className="mt-4 flex justify-end">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/82 transition group-hover:text-white">
                          ↗
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-[1.55rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.028)_0%,rgba(255,255,255,0.016)_100%)] px-4 py-4">
              <div className="grid grid-cols-[0.78fr_1.22fr] gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/68">
                    Availability
                  </p>
                  <p className="mt-3 text-[13px] leading-6 text-white/70">
                    Open to roles and high-quality collaborations.
                  </p>
                </div>

                <div className="border-l border-white/8 pl-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/68">
                    Direct
                  </p>
                  <a
                    href="mailto:your@email.com"
                    className="mt-3 block text-[13px] leading-6 text-white/78 transition hover:text-white"
                  >
                    your@email.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <motion.div
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:rounded-[2rem] sm:p-8 lg:p-12"
            {...sectionMotion}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-violet-500/[0.08]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div className="max-w-3xl">
                <p className="section-eyebrow">Contact</p>

                <h2 className="mt-6 text-[2.15rem] leading-[1] tracking-[-0.05em] font-semibold text-white sm:text-[3rem] lg:text-[4rem]">
                  Let’s build something modern, meaningful, and visually strong.
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/66 sm:text-[15px] sm:leading-8 lg:text-base">
                  I’m open to opportunities where thoughtful design, strong
                  frontend execution, and premium digital experience really
                  matter. The goal is always to create work that feels more
                  intentional, more credible, and more complete.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
                  <a
                    href="mailto:your@email.com"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:scale-[1.02]"
                  >
                    Email Me
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    View Resume
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div className="rounded-[1.4rem] border border-white/10 bg-[#081122]/70 p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/72">
                    Availability
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/72 sm:text-[15px] sm:leading-8">
                    Open to roles and collaborations where interface quality,
                    responsiveness, and product thinking are valued.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/72">
                    Preferred Focus
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {focusAreas.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 sm:px-3.5 sm:py-2 sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-blue-500/[0.07] via-transparent to-violet-500/[0.07] p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/72">
                    Direct Contact
                  </p>
                  <a
                    href="mailto:your@email.com"
                    className="mt-4 inline-flex text-base leading-8 text-white/80 transition hover:text-white sm:text-lg"
                  >
                    your@email.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}