"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Baby,
  BriefcaseBusiness,
  CheckCircle2,
  Heart,
  Home,
  Lightbulb,
  PartyPopper,
  Sparkles,
  TrendingUp,
  Umbrella,
  WalletCards,
} from "lucide-react";
import { formatRupees } from "../lib/finance";

const CURRENT_POTENTIAL = 1250000;
const formatScenarioRupees = (value: number) =>
  "Rs. " + Math.round(value).toLocaleString("en-IN");

const events = [
  { name: "Marriage", icon: Heart },
  { name: "Child", icon: Baby },
  { name: "Home Loan", icon: Home },
  { name: "Business", icon: BriefcaseBusiness },
  { name: "Retirement", icon: Umbrella },
];

const eventContent: Record<string, { title: string; description: string; label: string; min: number; max: number; step: number; suffix: string }> = {
  Marriage: { title: "Plan your life together", description: "Balance celebration costs with shared financial goals.", label: "Wedding budget", min: 500000, max: 10000000, step: 100000, suffix: "" },
  Child: { title: "Give their future a head start", description: "Model education needs around your child's timeline.", label: "Child's Age", min: 0, max: 17, step: 1, suffix: " years" },
  "Home Loan": { title: "Make home ownership manageable", description: "Explore a deposit and repayment plan that leaves room to live.", label: "Home value", min: 5000000, max: 50000000, step: 500000, suffix: "" },
  Business: { title: "Fund your next big move", description: "Build a runway that supports ambition without compromising security.", label: "Startup capital", min: 500000, max: 15000000, step: 250000, suffix: "" },
  Retirement: { title: "Design life after work", description: "See how your desired retirement age changes today's priorities.", label: "Retirement age", min: 45, max: 70, step: 1, suffix: " years" },
};

export function ScenarioSimulators() {
  const [savingIncrease, setSavingIncrease] = useState(10000);
  const [selectedEvent, setSelectedEvent] = useState("Child");
  const [eventValue, setEventValue] = useState(5);
  const [educationGoal, setEducationGoal] = useState("University");
  const [updated, setUpdated] = useState(false);

  const estimatedValue = CURRENT_POTENTIAL + savingIncrease * 62;
  const quote = useMemo(() => {
    if (savingIncrease >= 30000) return "Bold moves today can create extraordinary freedom tomorrow.";
    if (savingIncrease >= 15000) return "Your stronger saving habit is bringing future goals meaningfully closer.";
    if (savingIncrease > 0) return "An extra step each month can become a powerful leap over time.";
    return "Start with what feels sustainable—consistency is the real wealth multiplier.";
  }, [savingIncrease]);

  const activeContent = eventContent[selectedEvent];

  function chooseEvent(name: string) {
    setSelectedEvent(name);
    setUpdated(false);
    setEventValue(name === "Child" ? 5 : name === "Retirement" ? 60 : eventContent[name].min);
  }

  const eventValueLabel = activeContent.suffix
    ? eventValue.toLocaleString("en-LK") + activeContent.suffix
    : formatRupees(eventValue);

  return (
    <>
      <section id="what-if-simulator" className="relative border-t border-white/[0.07] bg-[#101220] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(124,58,237,0.14),transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-[1220px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 07 · What-If Simulator</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">What if you saved a little more?</h2>
            <p className="mt-5 text-zinc-400">Move the slider to see how one monthly decision can shift your long-term potential.</p>
          </div>

          <div className="mt-12 rounded-[30px] border border-white/[0.08] bg-[#121426] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <label htmlFor="saving-increase" className="text-sm font-medium text-zinc-300">Increase monthly savings by</label>
                <motion.span key={savingIncrease} initial={{ opacity: 0.4, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold text-violet-300">{formatScenarioRupees(savingIncrease)}</motion.span>
              </div>
              <input id="saving-increase" type="range" min="0" max="50000" step="5000" value={savingIncrease} onChange={(event) => setSavingIncrease(Number(event.target.value))} style={{ background: "linear-gradient(to right, #7c3aed " + savingIncrease / 500 + "%, rgba(255,255,255,0.08) " + savingIncrease / 500 + "%)" }} className="mt-7 h-2.5 w-full cursor-pointer appearance-none rounded-full accent-violet-600" />
              <div className="mt-3 flex justify-between text-xs text-zinc-600"><span>Rs. 0</span><span>Rs. 25,000</span><span>Rs. 50,000</span></div>
            </div>

            <div className="mt-10 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
              <article className="rounded-[24px] border border-white/[0.08] bg-[#181a2d] p-6">
                <div className="flex items-center gap-3 text-sm text-zinc-400"><span className="grid size-10 place-items-center rounded-xl bg-white/[0.05]"><WalletCards className="size-4" /></span>Current Potential</div>
                <p className="mt-8 text-3xl font-semibold tracking-tight">{formatScenarioRupees(CURRENT_POTENTIAL)}</p>
                <p className="mt-2 text-xs text-zinc-500">Based on your current monthly plan</p>
              </article>
              <div className="grid place-items-center"><span className="grid size-11 rotate-90 place-items-center rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 md:rotate-0"><ArrowRight className="size-5" /></span></div>
              <motion.article key={estimatedValue} initial={{ scale: 0.98 }} animate={{ scale: 1 }} className="relative overflow-hidden rounded-[24px] border border-violet-400/40 bg-gradient-to-br from-violet-600/20 to-fuchsia-500/[0.06] p-6">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-violet-500/20 blur-2xl" />
                <div className="relative flex items-center gap-3 text-sm text-violet-200"><span className="grid size-10 place-items-center rounded-xl bg-violet-500/20"><TrendingUp className="size-4" /></span>Estimated Value</div>
                <p className="relative mt-8 text-3xl font-semibold tracking-tight">{formatScenarioRupees(estimatedValue)}</p>
                <p className="relative mt-2 text-xs text-emerald-400">+{formatScenarioRupees(estimatedValue - CURRENT_POTENTIAL)} future potential</p>
              </motion.article>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={quote} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-6 flex items-start gap-4 rounded-2xl border border-amber-300/10 bg-amber-300/[0.04] p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-300/10 text-amber-300"><Lightbulb className="size-5" /></span>
                <div><p className="text-xs font-semibold tracking-[0.12em] text-amber-300 uppercase">Future you says</p><p className="mt-2 text-sm leading-6 text-zinc-300">“{quote}”</p></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="life-change-simulator" className="relative bg-[#0c0e1a] py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 08 · Life Change Simulator</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Plan for life as it changes</h2>
            <p className="mt-5 max-w-2xl text-zinc-400">Explore a milestone, tune the details, and see how your wealth plan can adapt around what matters next.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3">
            {events.map(({ name, icon: Icon }) => (
              <button key={name} type="button" onClick={() => chooseEvent(name)} aria-pressed={selectedEvent === name} className={["inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition", selectedEvent === name ? "border-violet-400 bg-violet-600 text-white" : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"].join(" ")}><Icon className="size-4" />{name}</button>
            ))}
          </div>

          <div className="mt-6 grid overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#121426] lg:grid-cols-[0.9fr_1.1fr]">
            <AnimatePresence mode="wait">
              <motion.div key={selectedEvent} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} className="p-7 sm:p-10 lg:p-12">
                <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-300">{selectedEvent} scenario</span>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight">{activeContent.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400">{activeContent.description}</p>

                <div className="mt-10">
                  <div className="flex items-center justify-between text-sm"><label htmlFor="event-value" className="text-zinc-400">{activeContent.label}</label><strong>{eventValueLabel}</strong></div>
                  <input id="event-value" type="range" min={activeContent.min} max={activeContent.max} step={activeContent.step} value={eventValue} onChange={(event) => { setEventValue(Number(event.target.value)); setUpdated(false); }} className="mt-5 h-2 w-full cursor-pointer accent-violet-600" />
                  <div className="mt-2 flex justify-between text-[10px] text-zinc-600"><span>{activeContent.min.toLocaleString("en-LK")}</span><span>{activeContent.max.toLocaleString("en-LK")}</span></div>
                </div>

                {selectedEvent === "Child" && <div className="mt-9"><p className="text-sm text-zinc-400">Goal</p><div className="mt-3 grid grid-cols-2 gap-3">{["Education", "University"].map((goal) => <button key={goal} type="button" onClick={() => { setEducationGoal(goal); setUpdated(false); }} className={["rounded-xl border px-4 py-3 text-sm font-semibold transition", educationGoal === goal ? "border-violet-400 bg-violet-500/10 text-violet-200" : "border-white/10 text-zinc-500 hover:text-white"].join(" ")}>{goal}</button>)}</div></div>}

                <div className="mt-9 rounded-2xl border border-white/[0.07] bg-[#0c0e1a]/60 p-5"><div className="flex items-center gap-3"><Sparkles className="size-5 text-violet-400" /><p className="text-sm font-semibold">Plan impact</p></div><p className="mt-3 text-sm leading-6 text-zinc-500">{selectedEvent === "Child" ? "We'll model " + educationGoal.toLowerCase() + " funding across the next " + (18 - eventValue) + " years." : "We'll rebalance your monthly priorities and protection around this " + selectedEvent.toLowerCase() + " milestone."}</p></div>
              </motion.div>
            </AnimatePresence>

            <div className="relative min-h-[480px] overflow-hidden lg:min-h-[620px]">
              <Image src="/wealth-planning-hero.png" alt="Planning finances around an important life change" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e1a] via-[#0c0e1a]/20 to-transparent lg:bg-gradient-to-r lg:from-[#121426]/70 lg:via-transparent lg:to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/10 bg-[#0c0e1a]/85 p-5 backdrop-blur-xl sm:inset-x-8 sm:bottom-8 sm:p-6">
                <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-violet-600"><PartyPopper className="size-5" /></span><div><p className="text-xs text-zinc-500">Selected life event</p><p className="font-semibold">{selectedEvent}</p></div></div>
                <button type="button" onClick={() => setUpdated(true)} className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold transition hover:bg-violet-500">{updated ? <><CheckCircle2 className="size-4" /> Plan Updated</> : <>Update Plan <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></>}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
