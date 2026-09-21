"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Financial Check", href: "/financial-check" },
  { label: "Wealth Plan", href: "/wealth-plan" },
  { label: "Simulators", href: "/simulators" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    document.documentElement.classList.toggle("light", !nextIsDark);
    document.documentElement.style.colorScheme = nextIsDark ? "dark" : "light";
    localStorage.setItem("wealth-growth-theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <header className="relative z-30 border-b border-white/[0.07] bg-[#0c0e1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[96px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-20">
        <Link href="/" className="shrink-0" aria-label="WEALTH GROWTH home">
          <span className="relative block h-[86px] w-[116px] overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-white to-violet-50 shadow-[0_8px_28px_rgba(124,58,237,0.3)] ring-1 ring-violet-300/20" aria-hidden="true">
            <Image
              src="/wealth-growth-logo.png"
              alt="Wealth Growth Investments"
              width={120}
              height={120}
              priority
              className="absolute -left-0.5 -top-3.5 max-w-none"
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{links.map((link) => <Link key={link.label} href={link.href} className="text-sm text-zinc-400 transition hover:text-white">{link.label}</Link>)}</nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.08]" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Light mode" : "Dark mode"}>
            {isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </button>
          <Link href="/financial-check" className="hidden items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500 sm:flex">Start planning <ArrowUpRight className="size-4" /></Link>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
      </div>
      <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/[0.07] bg-[#10121f] lg:hidden" aria-label="Mobile navigation"><div className="flex flex-col px-5 py-4">{links.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/[0.06] py-3.5 text-sm text-zinc-300 last:border-0">{link.label}</Link>)}</div></motion.nav>}</AnimatePresence>
    </header>
  );
}
