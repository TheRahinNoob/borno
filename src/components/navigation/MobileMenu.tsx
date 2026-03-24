"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  {
    label: "Work",
    href: "#work",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
        <path
          d="M4.75 8.25A2.25 2.25 0 0 1 7 6h10a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 17 18h-10a2.25 2.25 0 0 1-2.25-2.25v-7.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9 6V5.55A1.55 1.55 0 0 1 10.55 4h2.9A1.55 1.55 0 0 1 15 5.55V6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M4.75 10.2h14.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "About",
    href: "#about",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
        <circle cx="12" cy="12" r="8.15" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 10.2v5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="12" cy="7.65" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
        <path
          d="M12 4.5 6.4 7.55v5.95c0 2.15 1.37 4.13 3.42 4.95L12 19.45l2.18-1a5.4 5.4 0 0 0 3.42-4.95V7.55L12 4.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m9.45 12.15 1.7 1.7 3.35-3.55"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Journey",
    href: "#journey",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
        <path
          d="M5 17.1c1.15-4.15 3.85-6.3 7.65-6.3 2.05 0 3.95.65 6.35 2.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M15.8 7.6H19v3.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6.1" cy="17.1" r="1.15" fill="currentColor" />
        <circle cx="12.2" cy="10.8" r="1.1" fill="currentColor" />
        <circle cx="18" cy="13" r="1.15" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
        <path
          d="M4.75 7.75A1.75 1.75 0 0 1 6.5 6h11a1.75 1.75 0 0 1 1.75 1.75v8.5A1.75 1.75 0 0 1 17.5 18H6.5a1.75 1.75 0 0 1-1.75-1.75v-8.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m5.6 8.25 6.4 4.65 6.4-4.65"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

type MobileMenuProps = {
  className?: string;
};

export default function MobileMenu({ className = "" }: MobileMenuProps) {
  const items = useMemo(() => navItems, []);
  const [activeHash, setActiveHash] = useState("#work");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    let raf = 0;

    const getActiveSection = () => {
      const sections = items
        .map((item) => document.getElementById(item.href.replace("#", "")))
        .filter(Boolean) as HTMLElement[];

      if (!sections.length) return;

      const scanLine = window.innerHeight * 0.42;
      let current = items[0].href;
      let bestScore = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - scanLine);

        if (rect.top <= scanLine + 90 && distance < bestScore) {
          bestScore = distance;
          current = `#${section.id}`;
        }
      }

      if (window.location.hash) {
        current = window.location.hash;
      }

      setActiveHash(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(getActiveSection);
    };

    const onHashChange = () => getActiveSection();

    getActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [items]);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.href === activeHash)
  );

  const itemWidth = 100 / items.length;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-3 z-[90] flex justify-center px-3 pb-[max(env(safe-area-inset-bottom),0px)] transition-all duration-300 ease-out lg:hidden ${
        isFooterVisible ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
      aria-hidden={isFooterVisible}
    >
      <div
        className={`relative w-full max-w-[24rem] ${
          isFooterVisible ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div className="absolute inset-x-10 bottom-[-12px] h-8 rounded-full bg-black/55 blur-2xl" />
        <div className="absolute left-8 right-8 top-[-6px] h-6 rounded-full bg-cyan-300/8 blur-2xl" />

        <nav
          aria-label="Mobile navigation"
          className="relative overflow-hidden rounded-[2.35rem] border border-white/[0.08] bg-[rgba(5,10,22,0.58)] px-2.5 py-2.5 shadow-[0_18px_55px_rgba(0,0,0,0.46)] backdrop-blur-[24px] supports-[backdrop-filter]:bg-[rgba(5,10,22,0.42)]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2.35rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_18%,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.02)_100%)]" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2.35rem-1px)] border border-white/[0.04]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="pointer-events-none absolute inset-x-10 top-1 h-8 rounded-full bg-white/[0.035] blur-xl" />
          <div className="pointer-events-none absolute -left-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-300/[0.06] blur-3xl" />
          <div className="pointer-events-none absolute -right-10 top-0 h-20 w-20 rounded-full bg-blue-400/[0.07] blur-3xl" />

          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 py-[2px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: `${itemWidth}%`,
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            >
              <div className="relative mx-[1px] h-full rounded-[1.75rem]">
                <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(120,170,255,0.12)_0%,rgba(255,255,255,0.08)_24%,rgba(255,255,255,0.03)_58%,rgba(64,126,255,0.10)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.20),inset_0_-1px_0_rgba(255,255,255,0.03),0_10px_28px_rgba(10,20,40,0.22)] backdrop-blur-[18px]" />
                <div className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] border border-white/[0.08]" />
                <div className="absolute inset-x-2 top-1 h-5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28),transparent_72%)] blur-md" />
                <div className="absolute left-1/2 top-[6px] h-[72%] w-[62%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.12),rgba(59,130,246,0.06),transparent_75%)] blur-xl" />
                <div className="absolute inset-x-3 bottom-1.5 h-5 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.20),transparent_72%)] blur-lg" />
              </div>
            </div>

            <div className="relative flex items-stretch justify-between gap-1">
              {items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveHash(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className="group relative flex min-w-0 flex-1 flex-col items-center justify-center rounded-[1.75rem] px-1 py-2.5 transition duration-300 active:scale-[0.96]"
                  >
                    <span
                      className={`relative z-[2] flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-white/58 group-hover:text-white/82"
                      }`}
                    >
                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
                            : "bg-transparent group-hover:bg-white/[0.03]"
                        }`}
                      />
                      <span className="relative">{item.icon}</span>
                    </span>

                    <span
                      className={`relative z-[2] mt-1 truncate text-[9px] font-medium uppercase tracking-[0.16em] transition duration-300 ${
                        isActive
                          ? "text-white/92"
                          : "text-white/36 group-hover:text-white/62"
                      }`}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`pointer-events-none absolute bottom-[8px] left-1/2 h-[3px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-6 bg-gradient-to-r from-cyan-200/0 via-cyan-200/90 to-cyan-200/0 opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}