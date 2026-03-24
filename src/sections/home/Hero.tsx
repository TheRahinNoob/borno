import Container from "@/components/layout/Container";

const stackItems = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Motion",
  "WordPress",
  "WooCommerce",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-18 pb-24 sm:pt-22 sm:pb-24 lg:pt-32 lg:pb-30"
    >
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 opacity-40">
          <div className="grid-faint absolute inset-0" />
        </div>

        <div className="absolute left-[8%] top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl sm:h-60 sm:w-60" />
        <div className="absolute right-[8%] top-10 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-cyan-400/8 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020817] via-[#020817]/70 to-transparent" />
      </div>

      <Container>
        <div className="relative">
          <div className="lg:hidden">
            <div className="mx-auto max-w-[30rem]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.7)]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/62">
                  Frontend Developer
                </span>
              </div>

              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-white/42">
                  Tamjid Borno
                </p>

                <h1 className="mt-4 text-[2.45rem] font-semibold leading-[0.9] tracking-[-0.075em] text-white xs:text-[2.7rem]">
                  Mobile-first
                  <span className="block text-white/70">premium web</span>
                  <span className="block">experiences with</span>
                  <span className="block bg-gradient-to-r from-white via-cyan-100 to-white/72 bg-clip-text text-transparent">
                    sharp visual taste.
                  </span>
                </h1>

                <p className="mt-5 max-w-[33ch] text-[14px] leading-7 text-white/64">
                  I build refined websites with stronger hierarchy, cleaner
                  responsiveness, and a more convincing premium feel for
                  modern client-facing work.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href="#work"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:scale-[1.01]"
                >
                  View Selected Work
                </a>

                <a
                  href="#about"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-xl transition hover:border-white/18 hover:bg-white/[0.06]"
                >
                  About My Approach
                </a>
              </div>

              <div className="relative mt-9">
                <div className="absolute -left-4 top-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute left-1/3 bottom-0 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101f]/78 p-3 shadow-[0_18px_55px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_28%,rgba(255,255,255,0.015)_100%)]" />
                  <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.04]" />
                  <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <div className="relative space-y-3">
                    <div className="grid grid-cols-[1.08fr_0.92fr] gap-3">
                      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,34,0.98)_0%,rgba(8,14,27,0.95)_100%)] p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-[0.24em] text-cyan-200/70">
                            Signature
                          </span>

                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                          </div>
                        </div>

                        <p className="mt-5 text-[1.15rem] font-medium leading-6 tracking-[-0.04em] text-white">
                          Clean structure.
                          <span className="block text-white/68">
                            Stronger polish.
                          </span>
                        </p>

                        <div className="mt-6 h-px w-full bg-gradient-to-r from-white/12 via-white/5 to-transparent" />

                        <p className="mt-4 text-[12px] leading-6 text-white/58">
                          Interfaces shaped with detail, spacing, clarity, and
                          visual control.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                          <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">
                            Positioning
                          </p>
                          <p className="mt-3 text-[13px] leading-6 text-white/72">
                            Modern developer with design sensitivity and
                            client-ready standards.
                          </p>
                        </div>

                        <div className="rounded-[1.4rem] border border-blue-400/10 bg-[linear-gradient(180deg,rgba(18,31,56,0.72)_0%,rgba(10,17,31,0.72)_100%)] p-4">
                          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/68">
                            Build Focus
                          </p>
                          <p className="mt-3 text-[13px] leading-6 text-white/74">
                            High-value web experiences that feel composed and
                            intentional.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-200/70">
                            Core Stack
                          </p>
                          <p className="mt-2 text-[13px] leading-6 text-white/58">
                            Built for premium modern web delivery.
                          </p>
                        </div>

                        <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/42">
                          06 Tools
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {stackItems.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-[#0a1528]/88 px-3 py-2 text-[11px] font-medium text-white/68"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="max-w-5xl">
              <p className="section-eyebrow">
                Tamjid Borno • Frontend Developer • Premium Digital Experiences
              </p>

              <h1 className="mt-6 max-w-5xl text-[2.35rem] leading-[0.94] tracking-[-0.065em] font-semibold text-white sm:mt-8 sm:text-[4.4rem] lg:text-[5.7rem]">
                I build digital experiences
                <span className="block text-white/72">with strong taste,</span>
                <span className="block">modern precision,</span>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  and agency-level polish.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/68 sm:mt-8 sm:max-w-2xl sm:text-base sm:leading-8">
                I focus on crafting websites that feel refined, intentional, and
                genuinely premium — combining frontend discipline, responsive
                product thinking, and a stronger sense of visual direction.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <a
                  href="#work"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:scale-[1.02]"
                >
                  View Selected Work
                </a>

                <a
                  href="#about"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  About My Approach
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:mt-18 sm:gap-6 lg:grid-cols-[1.18fr_0.82fr]">
              <div className="glass-panel relative overflow-hidden rounded-[1.6rem] p-4 sm:rounded-[2.1rem] sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-blue-400/[0.08]" />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/45">
                      Signature Frame
                    </span>
                  </div>

                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] border border-white/10 bg-[#081122]/88 p-4 sm:rounded-[1.5rem] sm:p-6 sm:col-span-2">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/72">
                        Visual Standard
                      </p>
                      <p className="mt-3 text-[15px] leading-7 text-white/82 sm:mt-4 sm:text-lg sm:leading-8">
                        Premium interfaces shaped through composition, clarity,
                        spacing, and modern frontend detail.
                      </p>
                    </div>

                    <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.3rem] sm:p-5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                        Frontend Craft
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        Thoughtful UI systems with stronger hierarchy, cleaner
                        responsiveness, and more refined interaction quality.
                      </p>
                    </div>

                    <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.3rem] sm:p-5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                        Product Thinking
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        Digital experiences designed to feel credible, usable,
                        and ready for serious client-facing work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 sm:gap-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[2rem] sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/72">
                    Positioning
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-white/78 sm:text-base sm:leading-8">
                    A developer focused on building modern web experiences that
                    feel high-value, intentional, and visually convincing.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-violet-500/[0.08] p-5 sm:rounded-[2rem] sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/72">
                    Core Stack
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {stackItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/62 sm:py-2 sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}