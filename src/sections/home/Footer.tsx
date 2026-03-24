import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative border-t border-white/10 pt-8 pb-28 sm:pt-10 sm:pb-32 lg:py-10"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-0 h-40 w-40 rounded-full bg-blue-500/4 blur-3xl" />
      </div>

      <Container>
        <div className="flex flex-col gap-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-white/72">Tamjid Borno</p>
            <p className="mt-1 text-sm text-white/48">
              Premium digital experiences with stronger frontend craft.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:justify-end">
            <a href="#" className="transition hover:text-white">
              GitHub
            </a>
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
            <a
              href="mailto:your@email.com"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/8 pt-5">
          <p className="text-xs uppercase tracking-[0.22em] text-white/34">
            © 2026 Tamjid Borno. Crafted with care.
          </p>
        </div>
      </Container>
    </footer>
  );
}