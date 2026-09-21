"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const categories = [
  { label: "Income & Cash Flow", value: 80 },
  { label: "Savings & Investments", value: 65 },
  { label: "Debt Management", value: 75 },
  { label: "Protection & Security", value: 70 },
  { label: "Retirement Readiness", value: 60 },
];

export function FinancialHealthScore() {
  const circumference = 2 * Math.PI * 128;
  const scoreOffset = circumference * 0.28;
  return (
    <section id="financial-health" className="relative bg-[#0c0e1a] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(124,58,237,0.14),transparent_30%)]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 text-center"><p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 02 · Your financial health</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Know where you stand today</h2><p className="mx-auto mt-5 max-w-2xl text-zinc-400">Your score turns the important parts of your financial life into one clear picture—and shows where to focus next.</p></div>
        <div className="grid overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#121426] shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col items-center justify-center border-b border-white/[0.07] p-8 sm:p-12 lg:border-r lg:border-b-0">
            <div className="relative size-[300px] max-w-full">
              <svg viewBox="0 0 300 300" className="-rotate-90" role="img" aria-label="Financial health score 72 out of 100">
                <circle cx="150" cy="150" r="128" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="18" />
                <motion.circle cx="150" cy="150" r="128" fill="none" stroke="url(#score-gradient)" strokeWidth="18" strokeLinecap="round" strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} whileInView={{ strokeDashoffset: scoreOffset }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeOut" }} />
                <defs><linearGradient id="score-gradient"><stop stopColor="#7c3aed" /><stop offset="1" stopColor="#c084fc" /></linearGradient></defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center"><div><p className="text-6xl font-semibold tracking-[-0.06em]">72<span className="text-2xl text-zinc-500">/100</span></p><p className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-400"><CheckCircle2 className="size-4" /> Good Progress!</p></div></div>
            </div>
            <p className="mt-5 max-w-sm text-center text-sm leading-6 text-zinc-400">You have strong foundations. Improving savings consistency and retirement readiness can lift your score further.</p>
          </div>
          <div className="p-7 sm:p-12">
            <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-semibold tracking-[0.16em] text-violet-400 uppercase">Score breakdown</p><h3 className="mt-3 text-2xl font-semibold">Your financial pillars</h3></div><span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400">Updated today</span></div>
            <div className="mt-9 space-y-7">
              {categories.map(({ label, value }, index) => <div key={label}><div className="mb-2.5 flex items-center justify-between text-sm"><span className="font-medium text-zinc-200">{label}</span><span className="font-semibold text-violet-300">{value}%</span></div><div className="h-2.5 overflow-hidden rounded-full bg-white/[0.07]"><motion.div initial={{ width: 0 }} whileInView={{ width: value + "%" }} viewport={{ once: true }} transition={{ duration: 0.9, delay: index * 0.1 }} className="h-full rounded-full bg-gradient-to-r from-violet-700 via-violet-500 to-fuchsia-400" /></div></div>)}
            </div>
            <button type="button" className="group mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold shadow-[0_14px_35px_rgba(124,58,237,0.22)] transition hover:bg-violet-500 sm:w-auto">Share Detailed Report <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
