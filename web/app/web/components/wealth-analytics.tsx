"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Download,
  Flag,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const strategyAllocation = [
  { name: "Growth", value: 60, color: "#8b5cf6" },
  { name: "Balanced", value: 25, color: "#c084fc" },
  { name: "Defensive", value: 15, color: "#60a5fa" },
];

const monthlyAllocation = [
  { name: "Investments", value: 60, color: "#8b5cf6" },
  { name: "Savings", value: 25, color: "#34d399" },
  { name: "Protection", value: 15, color: "#60a5fa" },
];

const recommendations = [
  "Maintain a diversified core across growth and balanced assets.",
  "Increase your emergency reserve to cover six months of expenses.",
  "Review protection needs after every major life event.",
  "Rebalance the portfolio every 12 months to stay aligned.",
];

const goals = [
  { name: "Home Loan", value: 40, target: "Rs. 4,00,000 of Rs. 10,00,000", color: "from-blue-500 to-violet-500" },
  { name: "Education", value: 72, target: "Rs. 7,20,000 of Rs. 10,00,000", color: "from-violet-600 to-fuchsia-400" },
  { name: "Retirement", value: 20, target: "Rs. 10,00,000 of Rs. 50,00,000", color: "from-emerald-500 to-teal-400" },
];

const tooltipStyle = {
  background: "#15172a",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "14px",
  color: "#fff",
};

export function WealthAnalytics() {
  function downloadReport() {
    const report = [
      "WEALTH GROWTH — Balanced Growth Strategy",
      "",
      "Portfolio Allocation",
      "Growth: 60%",
      "Balanced: 25%",
      "Defensive: 15%",
      "",
      "Key Recommendations",
      ...recommendations.map((item, index) => String(index + 1) + ". " + item),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([report], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "wealth-plan-balanced-growth-report.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <section id="wealth-strategy" className="relative border-t border-white/[0.07] bg-[#101220] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(124,58,237,0.15),transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 09 · Your Wealth Strategy</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A strategy shaped around you</h2>
            <p className="mt-5 text-zinc-400">Your goals, timeline, and money personality point toward a portfolio built for steady progress and thoughtful growth.</p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#121426] shadow-[0_30px_100px_rgba(0,0,0,0.3)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/[0.07] p-7 sm:p-10 lg:border-r lg:border-b-0 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-xs font-semibold text-violet-300"><Sparkles className="size-3.5" /> Recommended Strategy</div>
              <h3 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">Balanced Growth</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">A diversified mix designed to capture long-term growth while keeping a stabilising layer for changing markets and life priorities.</p>

              <div className="mt-9 rounded-2xl border border-white/[0.07] bg-[#0c0e1a]/65 p-5">
                <div className="flex items-center justify-between"><span className="text-sm text-zinc-400">Strategy fit</span><strong className="text-emerald-400">Excellent</strong></div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.07]"><motion.div initial={{ width: 0 }} whileInView={{ width: "88%" }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-400" /></div>
                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500"><ShieldCheck className="size-4 text-violet-400" /> Aligned with your 10-year outlook</div>
              </div>

              <button type="button" onClick={downloadReport} className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold transition hover:bg-violet-500">
                <Download className="size-4" /> Download Full Report <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-violet-400 uppercase">Portfolio allocation</p>
                  <div className="relative mx-auto mt-4 h-[290px] max-w-[330px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={strategyAllocation} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={72} outerRadius={108} paddingAngle={4} cornerRadius={7}>
                          {strategyAllocation.map((entry) => <Cell key={entry.name} fill={entry.color} stroke="transparent" />)}
                        </Pie>
                        <Tooltip contentStyle={tooltipStyle} formatter={(value) => String(value) + "%"} />
                        <Legend iconType="circle" wrapperStyle={{ color: "#a1a1aa", fontSize: "12px" }} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="pointer-events-none absolute inset-x-0 top-[112px] text-center"><p className="text-2xl font-semibold">60%</p><p className="text-[11px] text-zinc-500">Growth focus</p></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><Lightbulb className="size-5" /></span><h4 className="text-lg font-semibold">Key Recommendations</h4></div>
                  <ul className="mt-6 space-y-5">
                    {recommendations.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-400"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-400"><Check className="size-3" /></span>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="wealth-dashboard" className="relative bg-[#0c0e1a] py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 10 · My Wealth Dashboard</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Your progress, all in one place</h2></div>
            <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-semibold text-emerald-300">Portfolio on track</span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <article className="relative overflow-hidden rounded-[24px] border border-violet-400/30 bg-gradient-to-br from-violet-600/20 to-[#15172a] p-6 sm:p-7">
              <div className="absolute -right-10 -top-10 size-36 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative flex items-center justify-between"><span className="text-sm text-zinc-400">Total Wealth Value</span><span className="grid size-10 place-items-center rounded-xl bg-violet-500/20 text-violet-300"><CircleDollarSign className="size-5" /></span></div>
              <p className="relative mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Rs. 18,70,000</p>
              <p className="relative mt-3 flex items-center gap-2 text-xs text-emerald-400"><TrendingUp className="size-3.5" /> 8.4% growth this year</p>
            </article>
            <article className="rounded-[24px] border border-white/[0.08] bg-[#15172a] p-6 sm:p-7">
              <div className="flex items-center justify-between"><span className="text-sm text-zinc-400">Active Goals</span><span className="grid size-10 place-items-center rounded-xl bg-blue-500/10 text-blue-300"><Target className="size-5" /></span></div>
              <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">3</p>
              <p className="mt-3 text-xs text-zinc-500">One goal is ahead of schedule</p>
            </article>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-[26px] border border-white/[0.08] bg-[#121426] p-6 sm:p-8">
              <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><Flag className="size-5" /></span><div><p className="font-semibold">Goal Progress</p><p className="mt-0.5 text-xs text-zinc-500">Three priorities in motion</p></div></div>
              <div className="mt-9 space-y-8">
                {goals.map(({ name, value, target, color }, index) => <div key={name}>
                  <div className="mb-3 flex items-end justify-between gap-4"><div><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs text-zinc-500">{target}</p></div><strong className="text-sm text-violet-300">{value}%</strong></div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.07]"><motion.div initial={{ width: 0 }} whileInView={{ width: String(value) + "%" }} viewport={{ once: true }} transition={{ duration: 0.9, delay: index * 0.1 }} className={["h-full rounded-full bg-gradient-to-r", color].join(" ")} /></div>
                </div>)}
              </div>
            </article>

            <article className="rounded-[26px] border border-white/[0.08] bg-[#121426] p-6 sm:p-8">
              <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><WalletCards className="size-5" /></span><div><p className="font-semibold">Monthly Allocation</p><p className="mt-0.5 text-xs text-zinc-500">Where each month goes</p></div></div>
              <div className="relative mx-auto mt-4 h-[300px] max-w-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={monthlyAllocation} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={72} outerRadius={108} paddingAngle={4} cornerRadius={7}>
                      {monthlyAllocation.map((entry) => <Cell key={entry.name} fill={entry.color} stroke="transparent" />)}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} formatter={(value) => String(value) + "%"} />
                    <Legend iconType="circle" wrapperStyle={{ color: "#a1a1aa", fontSize: "12px" }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-x-0 top-[113px] text-center"><p className="text-2xl font-semibold">100%</p><p className="text-[11px] text-zinc-500">Allocated</p></div>
              </div>
            </article>
          </div>

          <div className="mt-4 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-violet-400/20 bg-gradient-to-r from-violet-600/15 via-purple-500/[0.08] to-transparent p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-600"><TrendingUp className="size-5" /></span><div><h3 className="text-lg font-semibold">Stay on track</h3><p className="mt-1 text-sm text-zinc-400">Your next monthly review is ready. A five-minute check-in can keep every goal moving.</p></div></div>
            <a href="/wealth-plan#wealth-strategy" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200">View Details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
