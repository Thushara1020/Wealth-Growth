"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Building2, Check, GraduationCap, HeartHandshake, Home, Landmark, LockKeyhole, Plus, Rocket, Scale, ShieldCheck, TrendingUp, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useOnboarding } from "../context/onboarding-context";

const personalities = [
  { title: "Safety First", text: "You value stability, protection, and peace of mind.", icon: ShieldCheck, color: "from-blue-500 to-violet-600" },
  { title: "Balanced Planner", text: "You balance today's needs with tomorrow's priorities.", icon: Scale, color: "from-violet-500 to-purple-600" },
  { title: "Growth Seeker", text: "You embrace opportunity and invest for long-term growth.", icon: TrendingUp, color: "from-fuchsia-500 to-violet-600" },
  { title: "Strategic Builder", text: "You think in systems and build wealth with clear intent.", icon: Rocket, color: "from-purple-500 to-indigo-600" },
];

const goals = [
  { title: "Home", text: "Buy, build, or upgrade", icon: Home },
  { title: "Education", text: "Invest in brighter futures", icon: GraduationCap },
  { title: "Retirement", text: "Create freedom for later", icon: Landmark },
  { title: "Business", text: "Launch or grow a venture", icon: BriefcaseBusiness },
  { title: "Family", text: "Protect the people you love", icon: HeartHandshake },
  { title: "Wealth", text: "Build lasting prosperity", icon: Building2 },
];

export function DiscoveryScreens() {
  const state = useOnboarding();
  const [modalOpen, setModalOpen] = useState(false);
  const [customGoal, setCustomGoal] = useState("");

  useEffect(() => {
    if (!modalOpen) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setModalOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [modalOpen]);

  function submitGoal(event: FormEvent) {
    event.preventDefault();
    if (!customGoal.trim()) return;
    state.addCustomGoal(customGoal);
    setCustomGoal("");
    setModalOpen(false);
  }

  return (
    <>
      <section id="money-personality" className="border-t border-white/[0.07] bg-[#101220] py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 03 · Discover yourself</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">What&apos;s Your Money Personality?</h2>
            <p className="mt-5 text-zinc-400">Choose the approach that feels most like you. We&apos;ll use it to make your plan genuinely personal.</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {personalities.map(({ title, text, icon: Icon, color }) => {
              const selected = state.personality === title;
              return <motion.button key={title} type="button" whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }} onClick={() => state.selectPersonality(title)} aria-pressed={selected} className={["relative min-h-64 overflow-hidden rounded-[24px] border p-6 text-left transition", selected ? "border-violet-400 bg-violet-500/10 shadow-[0_18px_50px_rgba(124,58,237,0.18)]" : "border-white/[0.08] bg-[#15172a] hover:border-violet-400/30"].join(" ")}>
                {selected && <span className="absolute right-4 top-4 grid size-7 place-items-center rounded-full bg-violet-500"><Check className="size-4" /></span>}
                <span className={["grid size-12 place-items-center rounded-2xl bg-gradient-to-br shadow-lg", color].join(" ")}><Icon className="size-5" /></span>
                <h3 className="mt-10 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
                <span className={["absolute inset-x-0 bottom-0 h-1", selected ? "bg-gradient-to-r from-violet-600 to-fuchsia-400" : ""].join(" ")} />
              </motion.button>;
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a href="#goal-discovery" aria-disabled={!state.personality} className={["group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition", state.personality ? "bg-violet-600 shadow-[0_14px_36px_rgba(124,58,237,0.25)] hover:bg-violet-500" : "pointer-events-none bg-white/10 text-zinc-500"].join(" ")}>Start Quiz <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
            <p className="text-xs text-zinc-500">{state.personality ? state.personality + " selected" : "Select one personality to continue"}</p>
          </div>
        </div>
      </section>

      <section id="goal-discovery" className="relative bg-[#0c0e1a] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(124,58,237,0.13),transparent_30%)]" />
        <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div><p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 04 · Choose your goals</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">What Are You Building For?</h2><p className="mt-5 max-w-2xl text-zinc-400">Select everything that matters. Your plan can support more than one ambition at a time.</p></div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"><strong className="text-violet-300">{state.selectedGoals.length}</strong> selected</div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...goals, ...state.customGoals.map((title) => ({ title, text: "Your custom financial goal", icon: LockKeyhole }))].map(({ title, text, icon: Icon }) => {
              const selected = state.selectedGoals.includes(title);
              return <motion.button key={title} type="button" whileHover={{ y: -3 }} onClick={() => state.toggleGoal(title)} aria-pressed={selected} className={["relative flex min-h-36 items-start gap-4 rounded-[22px] border p-5 text-left transition", selected ? "border-violet-400 bg-violet-500/10" : "border-white/[0.08] bg-[#141625] hover:border-violet-400/30"].join(" ")}>
                <span className={["grid size-11 shrink-0 place-items-center rounded-xl", selected ? "bg-violet-600 text-white" : "bg-white/[0.05] text-violet-300"].join(" ")}><Icon className="size-5" /></span>
                <span><span className="block font-semibold">{title}</span><span className="mt-2 block text-sm leading-5 text-zinc-500">{text}</span></span>
                <span className={["absolute right-4 top-4 grid size-6 place-items-center rounded-full border", selected ? "border-violet-500 bg-violet-500" : "border-white/15"].join(" ")}>{selected && <Check className="size-3.5" />}</span>
              </motion.button>;
            })}
            <button type="button" onClick={() => setModalOpen(true)} className="flex min-h-36 items-center justify-center gap-3 rounded-[22px] border border-dashed border-violet-400/30 bg-violet-500/[0.04] p-5 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/[0.08]"><span className="grid size-9 place-items-center rounded-full bg-violet-500/15"><Plus className="size-4" /></span> Add Custom Goal</button>
          </div>

          <div className="mt-12 flex flex-col-reverse items-center justify-between gap-5 border-t border-white/[0.08] pt-7 sm:flex-row">
            <a href="#money-personality" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white"><ArrowLeft className="size-4" /> Back</a>
            <div className="flex items-center gap-4"><span className="text-sm text-zinc-500"><strong className="text-zinc-200">{state.selectedGoals.length}</strong> goals selected</span><button type="button" disabled={!state.selectedGoals.length} className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-semibold hover:bg-violet-500 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-zinc-500">Next <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></button></div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalOpen && <motion.div role="dialog" aria-modal="true" aria-labelledby="custom-goal-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setModalOpen(false)} className="fixed inset-0 z-50 grid place-items-center bg-[#080912]/80 p-5 backdrop-blur-sm">
          <motion.form onSubmit={submitGoal} initial={{ opacity: 0, scale: 0.95, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} className="w-full max-w-md rounded-[26px] border border-white/10 bg-[#15172a] p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-5"><div><p className="text-xs font-semibold tracking-[0.16em] text-violet-400 uppercase">Make it personal</p><h3 id="custom-goal-title" className="mt-2 text-2xl font-semibold">Add a custom goal</h3></div><button type="button" onClick={() => setModalOpen(false)} aria-label="Close modal" className="grid size-9 place-items-center rounded-full bg-white/[0.06] text-zinc-400 hover:text-white"><X className="size-4" /></button></div>
            <label htmlFor="custom-goal" className="mt-7 block text-sm font-medium text-zinc-300">What are you building for?</label>
            <input id="custom-goal" autoFocus value={customGoal} onChange={(event) => setCustomGoal(event.target.value)} placeholder="e.g. Travel the world" className="mt-3 h-12 w-full rounded-xl border border-white/10 bg-[#0c0e1a] px-4 text-sm outline-none placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
            <div className="mt-7 flex justify-end gap-3"><button type="button" onClick={() => setModalOpen(false)} className="rounded-xl px-5 py-3 text-sm font-semibold text-zinc-400 hover:text-white">Cancel</button><button type="submit" disabled={!customGoal.trim()} className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold hover:bg-violet-500 disabled:opacity-40">Add Goal</button></div>
          </motion.form>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
