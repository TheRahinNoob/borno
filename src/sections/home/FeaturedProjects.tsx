"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/layout/Container";

const featuredProject = {
  eyebrow: "Flagship Project",
  category: "Full-Stack AI Website",
  title: "Creatorflow — faster AI scripts for short-form content.",
  description:
    "A full-stack AI product built to make Instagram and YouTube reel scripting faster, cleaner, and easier to repeat.",
  highlights: [
    "Built a smoother script workflow from prompt to final output",
    "Designed for faster ideation across Instagram and YouTube content",
    "Focused on speed, clarity, and a cleaner creator experience",
  ],
  stack: ["Next.js", "Django"],
  imageMobile: "/projects/creatorflow-cover-mobile.png",
  imageDesktop: "/projects/creatorflow-cover-desktop.png",
  liveUrl: "https://creatorfloww.vercel.app",
};

type SecondaryProject = {
  eyebrow: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  imageMobile?: string;
  imageDesktop?: string;
  previewLabel?: string;
  highlights?: string[];
};

const secondaryProjects: SecondaryProject[] = [
  {
    eyebrow: "Selected Project 02",
    category: "Marketing Agency Site",
    title: "RAH Media — a clean marketing agency website.",
    description:
      "A marketing agency website built to explain services clearly and bring in more enquiries.",
    stack: ["HTML", "CSS", "Vanilla JS", "Responsive"],
    href: "https://raju-s8fc.onrender.com/",
    imageMobile: "/projects/rah-media-cover-mobile.png",
    imageDesktop: "/projects/rah-media-cover-desktop.png",
    previewLabel: "RAH MEDIA",
    highlights: [
      "Clear service sections",
      "Stronger first impression",
      "Responsive enquiry flow",
    ],
  },
  {
    eyebrow: "Selected Project 03",
    category: "Brand Website",
    title: "Landing pages with better flow and motion.",
    description:
      "A modern brand page shaped with cleaner visuals and smoother interaction.",
    stack: ["Next.js", "Motion", "UI Design"],
    href: "#",
  },
];

function BrowserDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

export default function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  const headerMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.65, ease: "easeOut" as const },
      };

  const featuredMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.7, ease: "easeOut" as const },
      };

  return (
    <section id="work" className="relative py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-24 h-56 w-56 rounded-full bg-blue-500/6 blur-3xl" />
        <div className="absolute bottom-16 right-[8%] h-72 w-72 rounded-full bg-violet-500/6 blur-3xl" />
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

              <h2 className="mt-6 text-[2.2rem] font-semibold leading-[0.92] tracking-[-0.075em] text-white xs:text-[2.5rem]">
                Work built with
                <span className="block text-white/72">clearer direction,</span>
                <span className="block">better product thinking,</span>
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-white/78 bg-clip-text text-transparent">
                  and more believable depth.
                </span>
              </h2>

              <p className="mt-5 max-w-[34ch] text-[14px] leading-7 text-white/64">
                These projects show the kind of work I want to keep building —
                modern products with sharper thinking, cleaner execution, and a
                more premium feel.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="section-eyebrow">Selected Work</p>
            <h2 className="mt-6 text-[1.9rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.7rem] lg:text-[4rem]">
              Work shown with stronger direction, better structure, and a more
              serious case-study feel.
            </h2>
            <p className="section-copy mt-6 max-w-2xl">
              These projects show the kind of work I want to keep building —
              modern products with sharper decisions, stronger execution, and a
              polished feel that can carry a real brand.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 space-y-6 sm:mt-14 sm:space-y-8">
          <motion.article {...featuredMotion}>
            <div className="lg:hidden">
              <article className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.96)_0%,rgba(7,11,22,0.99)_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.3)] md:rounded-[2rem]">
                <div className="relative p-4 md:p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(103,232,249,0.10),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(96,165,250,0.10),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.08),transparent_20%)]" />

                  <div className="relative md:grid md:grid-cols-[0.96fr_1.04fr] md:items-start md:gap-5">
                    <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,34,0.98)_0%,rgba(8,14,27,0.96)_100%)]">
                      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                        <BrowserDots />

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/42">
                          Creatorflow
                        </span>
                      </div>

                      <div className="p-3">
                        <div className="rounded-[1.2rem] border border-white/10 bg-[#09111f] p-2.5">
                          <div className="relative aspect-[10/12.5] overflow-hidden rounded-[0.95rem] bg-[#0b1424] md:aspect-[4/5]">
                            <Image
                              src={featuredProject.imageMobile}
                              alt={featuredProject.title}
                              fill
                              sizes="(max-width: 767px) 90vw, (max-width: 1023px) 42vw, 430px"
                              className="object-contain object-top"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#08101f]/10 via-transparent to-transparent" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-5 md:mt-0 md:flex md:h-full md:flex-col md:justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72">
                          {featuredProject.eyebrow}
                        </p>
                        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/42">
                          {featuredProject.category}
                        </p>

                        <h3 className="mt-4 max-w-[13ch] text-[1.8rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white md:max-w-[12ch] md:text-[1.65rem]">
                          {featuredProject.title}
                        </h3>

                        <p className="mt-4 max-w-[34ch] text-[14px] leading-7 text-white/64 md:max-w-[30ch] md:text-[13.5px] md:leading-6">
                          {featuredProject.description}
                        </p>

                        <ul className="mt-5 space-y-3 md:mt-4 md:space-y-2.5">
                          {featuredProject.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                              <span className="text-[13px] leading-6 text-white/70 md:text-[12.5px] md:leading-5">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2 md:mt-4">
                          {featuredProject.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/58"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/8 pt-5 md:mt-5 md:pt-4">
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="View Creatorflow live website"
                          className="inline-flex items-center text-sm font-medium text-white/84 transition hover:text-white"
                        >
                          View Live →
                        </a>

                        <span className="text-[11px] text-white/34">
                          Faster ideation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="hidden lg:block">
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,13,26,0.96)_0%,rgba(10,15,28,0.98)_46%,rgba(13,18,37,0.98)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
                <div className="grid lg:grid-cols-[1.16fr_0.84fr]">
                  <div className="relative min-h-[370px] border-b border-white/8 lg:border-b-0 lg:border-r">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_28%)]" />

                    <div className="absolute inset-5 overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,34,0.98)_0%,rgba(8,14,27,0.96)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                        <BrowserDots />
                      </div>

                      <div className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/42">
                        Creatorflow Preview
                      </div>

                      <div className="absolute inset-0 p-5 pt-12">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] border border-white/8 bg-[#09111f]">
                          <Image
                            src={featuredProject.imageDesktop}
                            alt={featuredProject.title}
                            fill
                            sizes="(min-width: 1024px) 52vw, 100vw"
                            className="object-contain object-top"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#08101f]/8 via-transparent to-transparent" />
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-[#08101f]/72 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/46 backdrop-blur-xl">
                        Short-form AI workflow
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 lg:p-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72">
                        {featuredProject.eyebrow}
                      </p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/42">
                        {featuredProject.category}
                      </p>

                      <h3 className="mt-4 max-w-[11ch] text-[2rem] font-semibold leading-[0.96] tracking-[-0.06em] text-white">
                        {featuredProject.title}
                      </h3>

                      <p className="mt-5 max-w-[32ch] text-[15px] leading-7 text-white/62">
                        {featuredProject.description}
                      </p>

                      <ul className="mt-6 space-y-3.5">
                        {featuredProject.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                            <span className="text-[14px] leading-6 text-white/70">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {featuredProject.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/58"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-6 border-t border-white/8 pt-5">
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View Creatorflow live website"
                        className="inline-flex items-center text-sm font-medium text-white/82 transition hover:text-white"
                      >
                        View Live →
                      </a>

                      <span className="text-sm text-white/34">
                        Cleaner workflow
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </motion.article>

          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:hidden">
            {secondaryProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,27,0.92)_0%,rgba(7,11,22,0.98)_100%)] shadow-[0_16px_42px_rgba(0,0,0,0.22)]"
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
                {project.imageMobile ? (
                  <div className="relative overflow-hidden border-b border-white/8 bg-[#060c17]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.10),transparent_30%)]" />
                    <div className="relative flex items-center justify-between px-4 py-3">
                      <BrowserDots />
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/42">
                        {project.previewLabel}
                      </span>
                    </div>

                    <div className="relative aspect-[10/12] overflow-hidden bg-[#040912]">
                      <Image
                        src={project.imageMobile}
                        alt={project.title}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050912]/30 via-transparent to-transparent" />
                    </div>
                  </div>
                ) : (
                  <div className="relative min-h-[148px] border-b border-white/8 bg-gradient-to-br from-[#08101f] via-[#0b1324] to-[#101827]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_30%)]" />
                    <div className="absolute inset-4 rounded-[1.15rem] border border-white/10 bg-white/[0.03]" />
                    <div className="absolute left-7 top-7">
                      <BrowserDots />
                    </div>
                  </div>
                )}

                <div className="relative p-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72">
                    {project.eyebrow}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/38">
                    {project.category}
                  </p>

                  <h3 className="mt-4 max-w-[18ch] text-[1.28rem] font-semibold leading-[1.03] tracking-[-0.045em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/64">
                    {project.description}
                  </p>

                  {project.highlights?.length ? (
                    <ul className="mt-5 space-y-2.5">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                          <span className="text-[12.5px] leading-5 text-white/68">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

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
                      href={project.href}
                      className="inline-flex items-center text-sm font-medium text-white/82 transition hover:text-white"
                    >
                      View Project →
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
                className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,27,0.94)_0%,rgba(7,11,22,0.98)_100%)] shadow-[0_20px_48px_rgba(0,0,0,0.22)]"
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
                {project.imageDesktop ? (
                  <div className="relative overflow-hidden border-b border-white/8 bg-[#060c17]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.10),transparent_30%)]" />
                    <div className="relative flex items-center justify-between px-5 py-4">
                      <BrowserDots />
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/42">
                        {project.previewLabel}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-[#040912]">
                      <Image
                        src={project.imageDesktop}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 48vw, 100vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050912]/32 via-transparent to-transparent" />
                    </div>
                  </div>
                ) : (
                  <div className="relative min-h-[210px] border-b border-white/8 bg-gradient-to-br from-[#08101f] via-[#0b1324] to-[#101827]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_30%)]" />
                    <div className="absolute inset-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className="absolute left-4 top-4">
                        <BrowserDots />
                      </div>

                      <div className="absolute left-1/2 top-1/2 grid w-[84%] -translate-x-1/2 -translate-y-1/2 gap-2.5">
                        <div className="flex h-10 items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3">
                          <div className="h-2 w-12 rounded-full bg-white/14" />
                          <div className="h-2 w-10 rounded-full bg-white/12" />
                        </div>

                        <div
                          className={`grid gap-2.5 ${
                            index === 0
                              ? "grid-cols-[0.9fr_1.1fr]"
                              : "grid-cols-2"
                          }`}
                        >
                          <div className="h-20 rounded-[1rem] border border-white/10 bg-white/[0.04]" />
                          <div className="h-20 rounded-[1rem] border border-white/10 bg-white/[0.04]" />
                        </div>

                        <div className="grid grid-cols-3 gap-2.5">
                          <div className="h-12 rounded-[0.9rem] border border-white/10 bg-white/[0.04]" />
                          <div className="h-12 rounded-[0.9rem] border border-white/10 bg-white/[0.04]" />
                          <div className="h-12 rounded-[0.9rem] border border-white/10 bg-white/[0.04]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 lg:p-7">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-blue-200/72">
                    {project.eyebrow}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/42">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-[1.3rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/66">
                    {project.description}
                  </p>

                  {project.highlights?.length ? (
                    <ul className="mt-5 space-y-2.5">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                          <span className="text-[13px] leading-6 text-white/68">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    className="mt-7 inline-flex items-center text-sm font-medium text-white/82 transition hover:text-white"
                  >
                    View Project →
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