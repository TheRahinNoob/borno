"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import MobileMenu from "@/components/navigation/MobileMenu";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="border-b border-white/8 bg-[#020817]/60 backdrop-blur-2xl">
          <Container>
            <div className="flex items-center justify-between py-4 sm:py-5">
              <Link
                href="/"
                className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white sm:text-xs sm:tracking-[0.32em]"
              >
                Tamjid Borno
              </Link>

              <nav className="hidden items-center gap-8 lg:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative text-sm text-white/62 transition hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              <div className="hidden items-center gap-3 lg:flex">
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  Let&apos;s Talk
                </Link>
              </div>

              <div className="flex min-w-0 items-center gap-3 lg:hidden">
                <div className="min-w-0 text-right">
                  <p className="truncate text-[11px] font-medium tracking-[0.18em] text-white/92 uppercase">
                    Tamjid Borno
                  </p>
                  <p className="truncate text-[10px] tracking-[0.14em] text-white/42 uppercase">
                    Premium Digital Experiences
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}