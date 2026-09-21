"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CalendarRange,
  ChartNoAxesCombined,
  Check,
  CircleGauge,
  Compass,
  FileText,
  Flag,
  LayoutDashboard,
  MessageCircle,
  RefreshCw,
  Route,
  Sparkles,
  Target,
  UserRoundSearch,
} from "lucide-react";

const steps = [
  { number: "01", title: "Welcome", description: "Begin your financial journey", href: "/#home", icon: Sparkles },
  { number: "02", title: "Financial Health Score", description: "Understand where you stand", href: "/#financial-health", icon: CircleGauge },
  { number: "03", title: "Money Personality", description: "Discover your money mindset", href: "/#money-personality", icon: UserRoundSearch },
  { number: "04", title: "Goal Discovery", description: "Define what you are building for", href: "/#goal-discovery", icon: Target },
  { number: "05", title: "Future Me Simulator", description: "Visualise your future wealth", href: "/#future-simulator", icon: ChartNoAxesCombined },
  { number: "06", title: "Calculator", description: "Model contributions and returns", href: "/#wealth-calculator", icon: Calculator },
  { number: "07", title: "What-if Simulator", description: "Explore stronger saving choices", href: "/#what-if-simulator", icon: Compass },
  { number: "08", title: "Life Change Simulator", description: "Prepare for important milestones", href: "/#life-change-simulator", icon: CalendarRange },
  { number: "09", title: "Wealth Strategy", description: "Review your recommended allocation", href: "/#wealth-strategy", icon: Route },
  { number: "10", title: "Dashboard", description: "Track wealth and active goals", href: "/#wealth-dashboard", icon: LayoutDashboard },
  { number: "11", title: "Proposal", description: "Export your personalised roadmap", href: "/#proposal-report", icon: FileText },
  { number: "12", title: "Learning Hub", description: "Keep building financial confidence", href: "/#learning-hub", icon: BookOpen },
  { number: "13", title: "Advisor Connect", description: "Turn your plan into action", href: "/#advisor-connect", icon: MessageCircle, current: true },
];

export function WealthJourneyOverview() {
  const router = useRouter();

  function navigate(href: string) {
    router.push(href);
  }

  return (
    <section id="complete-journey" className="relative border-t border-white/[0.07] bg-[#090b16] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(124,58,237,0.16),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Your financial roadmap</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Complete Wealth Journey</h2>
            <p className="mt-5 max-w-2xl text-zinc-400">Every step connects to the next. Revisit any part of your journey to refine your choices, explore a new scenario, or take action.</p>
          </div>
          <div className="flex w-fit items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2.5">
            <span className="grid size-6 place-items-center rounded-full bg-emerald-400 text-[#0c0e1a]"><Check className="size-3.5 stroke-[3]" /></span>
            <span className="text-sm font-semibold text-emerald-300">13-step journey complete</span>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map(({ number, title, description, href, icon: Icon, current }, index) => (
            <motion.button
              key={number}
              type="button"
              onClick={() => navigate(href)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.985 }}
              className={[
                "group relative min-h-48 overflow-hidden rounded-[22px] border p-5 text-left transition",
                current
                  ? "border-violet-400/50 bg-violet-500/10 shadow-[0_18px_50px_rgba(124,58,237,0.14)]"
                  : "border-white/[0.07] bg-[#121422]/90 hover:border-violet-400/30 hover:bg-[#16182a]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <span className={["text-3xl font-semibold tracking-[-0.05em]", current ? "text-violet-300" : "text-white/15 group-hover:text-violet-400/50"].join(" ")}>{number}</span>
                <span className={["grid size-10 place-items-center rounded-xl transition", current ? "bg-violet-600 text-white" : "bg-white/[0.04] text-zinc-500 group-hover:bg-violet-500/10 group-hover:text-violet-300"].join(" ")}><Icon className="size-[18px]" /></span>
              </div>
              <h3 className="mt-6 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-5 text-zinc-500">{description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className={["inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase", current ? "text-violet-300" : "text-emerald-400"].join(" ")}>
                  <span className={["size-1.5 rounded-full", current ? "bg-violet-400" : "bg-emerald-400"].join(" ")} />
                  {current ? "Current step" : "Complete"}
                </span>
                <ArrowRight className="size-4 text-zinc-700 transition-all group-hover:translate-x-1 group-hover:text-violet-300" />
              </div>
              {index < 12 && <span className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-white/10 xl:block" />}
            </motion.button>
          ))}

          <div className="hidden min-h-48 items-center justify-center rounded-[22px] border border-dashed border-white/[0.06] bg-white/[0.015] xl:flex">
            <div className="text-center"><Flag className="mx-auto size-5 text-zinc-700" /><p className="mt-3 text-xs text-zinc-700">Your next chapter</p></div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[26px] border border-violet-400/20 bg-gradient-to-r from-[#1a103c] via-violet-900/30 to-[#111426] p-7 sm:flex-row sm:items-center sm:p-9">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-violet-600 shadow-[0_12px_30px_rgba(124,58,237,0.3)]"><RefreshCw className="size-5" /></span>
            <div><h3 className="text-xl font-semibold">Revisit My Wealth Journey</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">Your life and priorities will evolve. Return to the beginning anytime and shape a plan that keeps pace with you.</p></div>
          </div>
          <button type="button" onClick={() => navigate("/#home")} className="group inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0c0e1a] transition hover:bg-violet-100">
            Revisit Journey <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
