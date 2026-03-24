"use client";

import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/layout/Container";

const motionViewport = {
  once: true,
  amount: 0.25,
};

const philosophyItems = [
  {
    label: "Standard",
    text: "Build products that feel clean, smooth, and easy to trust.",
  },
  {
    label: "Focus",
    text: "Make websites where design, usability, and code quality all work together.",
  },
  {
    label: "Direction",
    text: "Keep growing toward high-level freelance and agency work that feels complete and well-crafted.",
  },
];

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-24 h-52 w-52 rounded-full bg-cyan-400/6 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-[10%] top-20 h-44 w-44 rounded-full bg-violet-500/6 blur-3xl sm:hidden" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-blue-500/6 blur-3xl sm:hidden" />
      </div>

      <Container>
        <div className="lg:hidden">
          <div className="mx-auto max-w-[30rem]">
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-white/42">
                  About / Philosophy
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
              </div>

              <div className="relative mt-7">
                <div className="pointer-events-none absolute -left-2 top-0 h-24 w-24 rounded-full bg-cyan-400/[0.08] blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-10 h-20 w-20 rounded-full bg-blue-500/[0.08] blur-3xl" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.65)]" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/36">
                      How I work
                    </span>
                  </div>

                  <h2 className="max-w-[12ch] text-[2.25rem] font-semibold leading-[0.9] tracking-[-0.085em] text-white xs:text-[2.5rem]">
                    I care about
                    <span className="block text-white/72">more than just</span>
                    <span className="block">making something</span>
                    <span className="block bg-gradient-to-r from-white via-cyan-100 to-white/76 bg-clip-text text-transparent">
                      work.
                    </span>
                  </h2>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{ duration: 0.7, delay: 0.06, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <p className="max-w-[34ch] text-[14px] leading-8 text-white/68">
                  I like building digital products that feel modern, clear, and
                  well put together. Not just in how they look, but in how they
                  speak, respond, and support real goals.
                </p>

                <p className="max-w-[34ch] text-[14px] leading-8 text-white/68">
                  My approach mixes clean frontend work with a strong eye for
                  detail — better hierarchy, better spacing, smoother
                  responsiveness, and the small things that make a website feel
                  more solid and more premium.
                </p>
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-white/12 via-white/6 to-transparent" />

              <motion.div
                className="mt-7 space-y-4"
                initial="hidden"
                whileInView="show"
                viewport={motionViewport}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.12,
                    },
                  },
                }}
              >
                {philosophyItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: shouldReduceMotion ? {} : { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,30,0.86)_0%,rgba(7,11,22,0.92)_100%)] px-4 py-4">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_28%)]" />
                      <div className="absolute inset-[1px] rounded-[calc(1.45rem-1px)] border border-white/[0.04]" />

                      <div className="relative flex items-start gap-4">
                        <div className="flex w-[3.25rem] shrink-0 flex-col items-start">
                          <span className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/72">
                            0{index + 1}
                          </span>
                          <span className="mt-2 h-px w-full bg-gradient-to-r from-cyan-300/50 to-transparent" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                            {item.label}
                          </p>
                          <p className="mt-3 text-[13px] leading-7 text-white/70">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:grid lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={motionViewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="section-eyebrow">About / Philosophy</p>

            <h2 className="mt-6 text-[2.15rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[3rem] lg:text-[4rem]">
              I care about more than just making something work.
            </h2>
          </motion.div>

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewport}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          >
            <p className="text-base leading-8 text-white/72">
              I like building digital products that feel modern, clear, and well
              put together. Not just in how they look, but in how they speak,
              respond, and support real goals.
            </p>

            <p className="mt-6 text-base leading-8 text-white/72">
              My approach mixes clean frontend work with a strong eye for detail
              — better hierarchy, better spacing, smoother responsiveness, and
              the small things that make a website feel more solid and more
              premium.
            </p>

            <motion.div
              className="mt-10 space-y-6 border-l border-white/10 pl-5 sm:pl-6"
              initial="hidden"
              whileInView="show"
              viewport={motionViewport}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.15,
                  },
                },
              }}
            >
              {philosophyItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/72">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}