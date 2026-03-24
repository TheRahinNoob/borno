import Container from "@/components/layout/Container";

export default function SignatureStatement() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30">
          <div className="grid-faint absolute inset-0" />
        </div>

        <div className="absolute left-[6%] top-24 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl sm:left-1/2 sm:top-1/2 sm:h-72 sm:w-72 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:bg-blue-500/6" />
        <div className="absolute right-[10%] top-20 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl sm:hidden" />
        <div className="absolute bottom-10 left-1/3 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl sm:hidden" />
      </div>

      <Container>
        <div className="editorial-divider" />

        <div className="relative mx-auto max-w-5xl py-14 sm:py-20">
          <div className="lg:hidden">
            <div className="mx-auto max-w-[30rem]">
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-white/42">
                  Signature Statement
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
              </div>

              <div className="relative mt-10">
                <div className="pointer-events-none absolute -left-10 top-6 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl" />
                <div className="pointer-events-none absolute right-[-1.25rem] top-16 h-32 w-32 rounded-full bg-blue-500/[0.08] blur-3xl" />

                <div className="pointer-events-none absolute left-0 top-0 h-[16.5rem] w-full">
                  <svg
                    viewBox="0 0 320 260"
                    className="h-full w-full"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 26C56 6 123 6 179 36C223 60 261 64 310 50"
                      stroke="rgba(255,255,255,0.09)"
                      strokeWidth="1"
                    />
                    <path
                      d="M54 116C118 86 196 86 262 126"
                      stroke="rgba(103,232,249,0.18)"
                      strokeWidth="1"
                    />
                    <path
                      d="M28 214C76 194 130 188 178 196C220 203 257 218 300 244"
                      stroke="rgba(255,255,255,0.07)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.65)]" />
                      <p className="text-[2.15rem] font-semibold leading-[0.9] tracking-[-0.085em] text-white xs:text-[2.35rem]">
                        Modern digital
                      </p>
                    </div>

                    <p className="pl-5 text-[2.15rem] font-semibold leading-[0.9] tracking-[-0.085em] text-white/92 xs:text-[2.35rem]">
                      products where
                    </p>

                    <p className="pl-11 text-[2.15rem] font-semibold leading-[0.9] tracking-[-0.085em] text-white/68 xs:text-[2.35rem]">
                      design,
                    </p>

                    <p className="pl-3 text-[2.15rem] font-semibold leading-[0.9] tracking-[-0.085em] text-white/68 xs:text-[2.35rem]">
                      performance,
                    </p>

                    <p className="bg-gradient-to-r from-white via-cyan-100 to-white/74 bg-clip-text pl-9 text-[2.15rem] font-semibold leading-[0.9] tracking-[-0.085em] text-transparent xs:text-[2.35rem]">
                      and clear thinking
                    </p>

                    <p className="pl-1 text-[2.15rem] font-semibold leading-[0.9] tracking-[-0.085em] text-white xs:text-[2.35rem]">
                      work together.
                    </p>
                  </div>

                  <div className="mt-9 ml-5 max-w-[20rem]">
                    <div className="mb-5 h-px w-16 bg-gradient-to-r from-cyan-300/65 to-transparent" />
                    <p className="text-[14px] leading-8 text-white/64">
                      I care about how a product looks, how it works, and how it
                      feels to use. I do not just build websites that function. I
                      try to build products that feel clear, smooth, thoughtful,
                      and easy to trust.
                    </p>
                  </div>

                  <div className="mt-8 ml-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/34">
                      Clean
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/34">
                      Smooth
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/34">
                      Trusted
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="section-eyebrow text-center">Signature Statement</p>

            <h2 className="mt-6 text-center text-[2.15rem] leading-[1.02] tracking-[-0.055em] font-semibold text-white sm:text-[3.1rem] lg:text-[4.2rem]">
              Building modern digital products where design, performance, and
              clear thinking work together.
            </h2>

            <p className="section-copy mx-auto mt-8 max-w-2xl text-center">
              I care about how a product looks, how it works, and how it feels
              to use. I do not just build websites that function. I try to build
              products that feel clear, smooth, thoughtful, and easy to trust.
            </p>
          </div>
        </div>

        <div className="editorial-divider" />
      </Container>
    </section>
  );
}