"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BarChart3, ChartNoAxesCombined, CircleDollarSign, Coins, Landmark, Play, ShieldCheck, Sparkles, TrendingUp, WalletCards } from "lucide-react";
import { WealthJourneyOverview } from "./components/wealth-journey-overview";

const floatingCards = [
  { label: "Money Management", detail: "Stay in control", icon: WalletCards, position: "-left-4 top-10 lg:-left-16" },
  { label: "Investments", detail: "+8.4% this year", icon: TrendingUp, position: "-right-3 top-24 lg:-right-12" },
  { label: "Financial Planning", detail: "Your goals, mapped", icon: BarChart3, position: "-left-3 bottom-28 lg:-left-14" },
  { label: "Wealth Building", detail: "Future focused", icon: Coins, position: "-right-2 bottom-14 lg:-right-10" },
];

const journeySteps = [
  { label: "Understand", icon: CircleDollarSign },
  { label: "Plan", icon: ChartNoAxesCombined },
  { label: "Protect", icon: ShieldCheck },
  { label: "Grow", icon: TrendingUp },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#0c0e1a] text-white">
      <section id="home" className="relative min-h-[calc(100vh-96px)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(124,58,237,0.2),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(76,29,149,0.12),transparent_25%)]" />
        <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20 xl:px-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200"><Sparkles className="size-4 text-violet-400" /> A clearer path to financial freedom</div>
            <h1 className="max-w-3xl text-5xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-6xl xl:text-[76px]">Your Money.<br />Your Future.<br /><span className="bg-gradient-to-r from-violet-300 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">Your Choice.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Build a financial life that feels as good as it looks. Get a personalised plan, make confident choices, and grow your wealth on your terms.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/financial-check" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold shadow-[0_16px_45px_rgba(124,58,237,0.3)] transition hover:bg-violet-500">Start Your Journey <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
              <button type="button" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.08]"><span className="grid size-7 place-items-center rounded-full bg-white text-[#0c0e1a]"><Play className="ml-0.5 size-3.5 fill-current" /></span> Watch Video</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[620px] px-4 sm:px-10">
            <div className="absolute inset-6 rounded-[40%] bg-violet-600/20 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-white/10 bg-[#15172a] shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
              <Image src="/wealth-planning-hero.png" alt="Professional reviewing a personalised wealth plan" fill priority sizes="(max-width: 1024px) 90vw, 46vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e1a]/60 via-transparent to-violet-950/10" />
            </div>
            {floatingCards.map(({ label, detail, icon: Icon, position }, index) => (
              <motion.div key={label} initial={{ opacity: 0, x: index % 2 ? 20 : -20 }} animate={{ opacity: 1, x: 0, y: [0, -6, 0] }} transition={{ opacity: { delay: 0.6 + index * 0.1 }, x: { delay: 0.6 + index * 0.1 }, y: { duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" } }} className={["absolute z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#121426]/90 p-3 shadow-2xl backdrop-blur-xl sm:p-4", position].join(" ")}>
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><Icon className="size-4" /></span><span><span className="block text-xs font-semibold sm:text-sm">{label}</span><span className="mt-0.5 block text-[10px] text-zinc-400 sm:text-xs">{detail}</span></span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="wealth-plan" className="relative border-y border-white/[0.07] bg-[#101220]">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28 xl:px-20">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[12%] rounded-full border border-violet-400/20 bg-[#16132d] shadow-[0_0_80px_rgba(124,58,237,0.13)]" />
            <div className="absolute inset-[27%] grid place-items-center rounded-full border border-violet-400/30 bg-violet-600 shadow-[0_0_60px_rgba(124,58,237,0.4)]"><Landmark className="size-12" /></div>
            {journeySteps.map(({ label, icon: Icon }, index) => {
              const positions = ["left-[6%] top-[15%]", "right-[6%] top-[15%]", "bottom-[12%] left-[7%]", "bottom-[12%] right-[7%]"];
              return <div key={label} className={["absolute flex w-28 flex-col items-center rounded-2xl border border-white/10 bg-[#181a2d] p-4 text-center shadow-xl", positions[index]].join(" ")}><Icon className="size-5 text-violet-400" /><span className="mt-2 text-xs font-medium">{label}</span></div>;
            })}
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Built around your life</p>
            <h2 className="mt-5 max-w-xl text-4xl leading-tight font-semibold tracking-[-0.035em] sm:text-5xl">A Smarter Way to Build Wealth</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">One connected plan brings your money, goals, protection, and future into focus—so every decision moves you forward.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["A plan personalised to you", "Simple progress tracking", "Clear next-best actions", "Built-in financial protection"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-zinc-300"><span className="grid size-6 place-items-center rounded-full bg-emerald-400/10 text-emerald-400"><ShieldCheck className="size-3.5" /></span>{item}</div>)}
            </div>
            <a href="/financial-check" className="group mt-10 inline-flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-6 py-3.5 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20">See how your finances score <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>
      </section>
      <WealthJourneyOverview />
    </main>
  );
}
