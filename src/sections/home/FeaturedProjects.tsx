"use client";

import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/layout/Container";

const featuredProject = {
  eyebrow: "Featured Project",
  category: "E-commerce / Frontend Engineering",
  title: "Premium commerce experiences built for clarity, conversion, and trust.",
  description:
    "A modern storefront direction focused on elevated product presentation, smoother mobile shopping, stronger visual hierarchy, and frontend implementation that feels high-value across the full customer journey.",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "WooCommerce",
    "Responsive UI",
  ],
};

const secondaryProjects = [
  {
    eyebrow: "Selected Project 02",
    category: "Dashboard / Product Interface",
    title: "Administrative interfaces designed with cleaner product thinking.",
    description:
      "A more structured dashboard direction built around usability, responsive clarity, and calmer information hierarchy.",
    stack: ["React", "TypeScript", "REST API"],
  },
  {
    eyebrow: "Selected Project 03",
    category: "Brand / Marketing Experience",
    title: "Landing pages shaped through stronger motion and visual storytelling.",
    description:
      "A modern brand presentation focused on composition, atmosphere, and premium interaction cues that feel sharper and more intentional.",
    stack: ["Next.js", "Motion", "UI Direction"],
  },
];

export default function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  const headerMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.65, ease: "easeOut" as const },
      };

  return (
    <section id="work" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-28 h-56 w-56 rounded-full bg-blue-500/6 blur-3xl" />
        <div className="absolute right-[8%] bottom-20 h-72 w-72 rounded-full bg-violet-500/6 blur-3xl" />
      </div>

      <Container>
        <motion.div className="max-w-4xl" {...headerMotion}>
          <div className="lg:hidden">
            <div className="max-w-[30rem]">
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-white/42">
                  Selected Work
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
              </div>

              <h2 className="mt-6 text-[2.25rem] font-semibold leading-[0.92] tracking-[-0.075em] text-white xs:text-[2.55rem]">
                Work shaped with
                <span className="block text-white/72">stronger hierarchy,</span>
                <span className="block">clearer product thinking,</span>
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-white/78 bg-clip-text text-transparent">
                  and case-study presence.
                </span>
              </h2>

              <p className="mt-5 max-w-[34ch] text-[14px] leading-7 text-white/64">
                These projects represent the kind of digital work I want to be
                trusted with — premium interfaces, thoughtful decisions, and
                implementation that feels polished enough to carry a real brand.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="section-eyebrow">Selected Work</p>
            <h2 className="mt-6 text-[1.9rem] leading-[0.98] tracking-[-0.05em] font-semibold text-white sm:text-[2.7rem] lg:text-[4.1rem]">
              Work presented with stronger art direction, clearer hierarchy, and
              a more serious case-study feel.
            </h2>
            <p className="section-copy mt-6 max-w-2xl">
              These projects represent the kind of digital work I want to be
              trusted with — premium interfaces, thoughtful product decisions, and
              implementation that feels polished enough to carry a real brand.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 space-y-6 sm:mt-14 sm:space-y-8">
          <motion.article
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 26 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="lg:hidden">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.94)_0%,rgba(7,11,22,0.98)_100%)] shadow-[0_22px_60px_rgba(0,0,0,0.34)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(103,232,249,0.10),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(96,165,250,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.10),transparent_24%)]" />
                <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.04]" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />

                <div className="relative p-4">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,34,0.98)_0%,rgba(8,14,27,0.96)_100%)]">
                    <div className="border-b border-white/8 px-4 pb-3 pt-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                        </div>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/42">
                          Flagship Case
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/72">
                            Storefront Direction
                          </p>
                          <p className="mt-2 text-[12px] leading-6 text-white/56">
                            Premium product presentation system
                          </p>
                        </div>

                        <div className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan-100/62">
                          Mobile-first
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="grid gap-3">
                        <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.02)_100%)] p-3.5">
                          <div className="flex items-center justify-between">
                            <div className="h-2 w-16 rounded-full bg-white/16" />
                            <div className="flex gap-1.5">
                              <div className="h-2 w-8 rounded-full bg-white/10" />
                              <div className="h-2 w-8 rounded-full bg-white/10" />
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-[1.05fr_0.95fr] gap-3">
                            <div className="relative h-28 overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.04]">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.10),transparent_32%)]" />
                              <div className="absolute inset-x-3 bottom-3 h-5 rounded-full bg-white/10" />
                            </div>

                            <div className="grid gap-3">
                              <div className="h-[3.35rem] rounded-[1rem] border border-white/10 bg-white/[0.04]" />
                              <div className="h-[3.35rem] rounded-[1rem] border border-white/10 bg-white/[0.04]" />
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-3 gap-3">
                            <div className="h-10 rounded-[0.9rem] border border-white/10 bg-white/[0.04]" />
                            <div className="h-10 rounded-[0.9rem] border border-white/10 bg-white/[0.04]" />
                            <div className="h-10 rounded-[0.9rem] border border-white/10 bg-white/[0.04]" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-3.5">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                              Focus
                            </p>
                            <p className="mt-2 text-[13px] leading-6 text-white/74">
                              Clarity, conversion, trust.
                            </p>
                          </div>

                          <div className="rounded-[1.15rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(18,31,56,0.42)_0%,rgba(10,17,31,0.46)_100%)] p-3.5">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/68">
                              Outcome
                            </p>
                            <p className="mt-2 text-[13px] leading-6 text-white/74">
                              Higher-value shopping feel.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72">
                      {featuredProject.eyebrow}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/42">
                      {featuredProject.category}
                    </p>

                    <h3 className="mt-4 text-[1.65rem] font-semibold leading-[1] tracking-[-0.05em] text-white">
                      {featuredProject.title}
                    </h3>

                    <p className="mt-5 text-[14px] leading-7 text-white/66">
                      {featuredProject.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {featuredProject.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-[#0b1528]/88 px-3 py-2 text-[11px] font-medium text-white/62"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-white/84 transition hover:text-white"
                      >
                        View Case Study →
                      </a>

                      <span className="text-[11px] uppercase tracking-[0.16em] text-white/32">
                        Flagship
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <article className="glass-panel overflow-hidden rounded-[1.75rem] sm:rounded-[2.2rem]">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-[220px] border-b border-white/8 bg-gradient-to-br from-[#0a1222] via-[#0b1326] to-[#111827] sm:min-h-[280px] lg:min-h-[520px] lg:border-r lg:border-b-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_26%)]" />

                    <div className="absolute inset-3 rounded-[1.2rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:inset-5 sm:rounded-[1.4rem] lg:inset-6 lg:rounded-[1.6rem]">
                      <div className="absolute left-4 top-4 flex items-center gap-2 sm:left-5 sm:top-5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
                      </div>

                      <div className="absolute right-4 top-4 hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/42 sm:block">
                        Storefront Preview
                      </div>

                      <div className="absolute left-1/2 top-1/2 grid w-[88%] -translate-x-1/2 -translate-y-1/2 gap-2 sm:w-[84%] sm:gap-3 lg:gap-4">
                        <div className="flex h-10 items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-4 sm:h-12 sm:rounded-2xl lg:h-16 lg:px-5">
                          <div className="h-2 w-14 rounded-full bg-white/18 sm:w-20 lg:w-28" />
                          <div className="flex gap-2">
                            <div className="h-2 w-8 rounded-full bg-white/12 sm:w-10 lg:w-12" />
                            <div className="h-2 w-8 rounded-full bg-white/12 sm:w-10 lg:w-12" />
                          </div>
                        </div>

                        <div className="grid grid-cols-[1.05fr_0.95fr] gap-2 sm:gap-3 lg:grid-cols-[1.2fr_0.8fr] lg:gap-4">
                          <div className="relative h-24 overflow-hidden rounded-[0.9rem] border border-white/10 bg-white/[0.04] sm:h-32 sm:rounded-[1rem] lg:h-52 lg:rounded-[1.4rem]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.07),transparent_35%)]" />
                            <div className="absolute bottom-3 left-3 right-3 h-5 rounded-full bg-white/10 lg:bottom-5 lg:h-7" />
                          </div>

                          <div className="grid gap-2 sm:gap-3 lg:gap-4">
                            <div className="h-11 rounded-[0.9rem] border border-white/10 bg-white/[0.04] sm:h-14 sm:rounded-[1rem] lg:h-24 lg:rounded-[1.2rem]" />
                            <div className="h-11 rounded-[0.9rem] border border-white/10 bg-white/[0.04] sm:h-14 sm:rounded-[1rem] lg:h-24 lg:rounded-[1.2rem]" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                          <div className="h-8 rounded-[0.8rem] border border-white/10 bg-white/[0.04] sm:h-10 sm:rounded-[0.9rem] lg:h-20 lg:rounded-[1.1rem]" />
                          <div className="h-8 rounded-[0.8rem] border border-white/10 bg-white/[0.04] sm:h-10 sm:rounded-[0.9rem] lg:h-20 lg:rounded-[1.1rem]" />
                          <div className="h-8 rounded-[0.8rem] border border-white/10 bg-white/[0.04] sm:h-10 sm:rounded-[0.9rem] lg:h-20 lg:rounded-[1.1rem]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-10">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72 sm:text-[11px]">
                        {featuredProject.eyebrow}
                      </p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/42 sm:mt-4 sm:text-sm sm:tracking-[0.22em]">
                        {featuredProject.category}
                      </p>

                      <h3 className="mt-4 text-[1.38rem] font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:mt-5 sm:text-[1.75rem] lg:text-[2.15rem]">
                        {featuredProject.title}
                      </h3>

                      <p className="mt-5 text-[14px] leading-7 text-white/66 sm:text-[15px] sm:leading-8 lg:text-base">
                        {featuredProject.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                        {featuredProject.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 sm:py-2 sm:text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-white/82 transition hover:text-white"
                      >
                        View Case Study →
                      </a>

                      <span className="text-xs text-white/40 sm:text-sm">
                        More refined project storytelling
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </motion.article>

          <div className="lg:hidden space-y-4">
            {secondaryProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,27,0.92)_0%,rgba(7,11,22,0.98)_100%)] p-4 shadow-[0_16px_42px_rgba(0,0,0,0.22)]"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_22%)]" />
                <div className="absolute inset-[1px] rounded-[calc(1.7rem-1px)] border border-white/[0.04]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72">
                        {project.eyebrow}
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/38">
                        {project.category}
                      </p>
                    </div>

                    <div className="mt-1 h-10 w-10 rounded-full border border-white/10 bg-white/[0.03]">
                      <div className="flex h-full items-center justify-center">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/75" />
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-5 max-w-[18ch] text-[1.28rem] font-semibold leading-[1.04] tracking-[-0.045em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/64">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-[#0b1528]/86 px-3 py-2 text-[11px] font-medium text-white/58"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/8 pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-white/82 transition hover:text-white"
                    >
                      View Case Study →
                    </a>

                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                      Supporting
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
            {secondaryProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="glass-panel overflow-hidden rounded-[1.6rem] sm:rounded-[2rem]"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="relative min-h-[180px] border-b border-white/8 bg-gradient-to-br from-[#08101f] via-[#0b1324] to-[#101827] sm:min-h-[210px] lg:min-h-[230px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_30%)]" />

                  <div className="absolute inset-3 rounded-[1rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:inset-5 sm:rounded-[1.4rem]">
                    <div className="absolute left-4 top-4 flex items-center gap-2 sm:left-5 sm:top-5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>

                    <div className="absolute left-1/2 top-1/2 grid w-[84%] -translate-x-1/2 -translate-y-1/2 gap-2 sm:gap-3">
                      <div className="flex h-9 items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 sm:h-12">
                        <div className="h-2 w-10 rounded-full bg-white/14 sm:w-16" />
                        <div className="h-2 w-8 rounded-full bg-white/12 sm:w-10" />
                      </div>

                      <div
                        className={`grid gap-2 sm:gap-3 ${
                          index === 0
                            ? "grid-cols-[0.9fr_1.1fr]"
                            : "grid-cols-2"
                        }`}
                      >
                        <div className="h-16 rounded-[0.9rem] border border-white/10 bg-white/[0.04] sm:h-24 sm:rounded-[1rem]" />
                        <div className="h-16 rounded-[0.9rem] border border-white/10 bg-white/[0.04] sm:h-24 sm:rounded-[1rem]" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="h-10 rounded-[0.75rem] border border-white/10 bg-white/[0.04] sm:h-14 sm:rounded-[0.9rem]" />
                        <div className="h-10 rounded-[0.75rem] border border-white/10 bg-white/[0.04] sm:h-14 sm:rounded-[0.9rem]" />
                        <div className="h-10 rounded-[0.75rem] border border-white/10 bg-white/[0.04] sm:h-14 sm:rounded-[0.9rem]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7 lg:p-8">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72 sm:text-[11px]">
                    {project.eyebrow}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/42 sm:mt-4 sm:text-sm sm:tracking-[0.22em]">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-[1.22rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:mt-5 sm:text-[1.45rem] lg:text-[1.65rem]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/66 sm:mt-5 sm:text-[15px] sm:leading-8">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 sm:py-2 sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="mt-7 inline-flex items-center text-sm font-medium text-white/82 transition hover:text-white sm:mt-8"
                  >
                    View Case Study →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}