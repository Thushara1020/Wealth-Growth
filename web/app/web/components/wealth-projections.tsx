"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowRight, Calculator, ChartNoAxesCombined, Coins, PiggyBank, Sparkles } from "lucide-react";
import { buildProjection, formatRupees } from "../lib/finance";

const STARTING_VALUE = 826640.8410732454;
const compactRupees = (value: number) =>
  value >= 1000000 ? "Rs. " + (value / 1000000).toFixed(1) + "M" : "Rs. " + Math.round(value / 1000) + "K";

const tooltipStyle = {
  background: "#15172a",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "14px",
  color: "#fff",
};

export function WealthProjections() {
  const [simulatorYears, setSimulatorYears] = useState(10);
  const [monthlyAmount, setMonthlyAmount] = useState(50000);
  const [calculatorYears, setCalculatorYears] = useState(10);
  const [returnRate, setReturnRate] = useState(10);

  const simulatorData = useMemo(
    () => buildProjection(50000, 10, simulatorYears, STARTING_VALUE),
    [simulatorYears],
  );
  const calculatorData = useMemo(
    () => buildProjection(monthlyAmount, returnRate, calculatorYears, STARTING_VALUE),
    [monthlyAmount, returnRate, calculatorYears],
  );

  const simulatorValue = simulatorData.at(-1)?.value ?? 0;
  const simulatorContributions = simulatorData.at(-1)?.contributions ?? 0;
  const calculatorValue = calculatorData.at(-1)?.value ?? 0;

  return (
    <>
      <section id="future-simulator" className="relative border-t border-white/[0.07] bg-[#101220] py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 05 · Future Me Simulator</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Meet your future wealth</h2>
              <p className="mt-5 max-w-2xl text-zinc-400">See how consistent monthly saving and compound growth can reshape your financial future.</p>
            </div>
            <div className="inline-flex rounded-xl border border-white/[0.08] bg-[#0c0e1a] p-1.5">
              {[5, 10, 15].map((years) => (
                <button key={years} type="button" onClick={() => setSimulatorYears(years)} className={["rounded-lg px-4 py-2.5 text-sm font-semibold transition sm:px-5", simulatorYears === years ? "bg-violet-600 text-white shadow-lg" : "text-zinc-500 hover:text-white"].join(" ")}>{years} Years</button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Projected Value", value: formatRupees(simulatorValue), icon: ChartNoAxesCombined, primary: true },
              { label: "Monthly Saving", value: formatRupees(50000), icon: PiggyBank },
              { label: "Total Contributions", value: formatRupees(simulatorContributions), icon: Coins },
              { label: "Estimated Growth", value: formatRupees(simulatorValue - simulatorContributions), icon: Sparkles },
            ].map(({ label, value, icon: Icon, primary }) => (
              <motion.article layout key={label} className={["rounded-[22px] border p-5", primary ? "border-violet-400/40 bg-violet-500/10" : "border-white/[0.08] bg-[#15172a]"].join(" ")}>
                <div className="flex items-center gap-3 text-sm text-zinc-400"><span className="grid size-9 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><Icon className="size-4" /></span>{label}</div>
                <p className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">{value}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 h-[390px] rounded-[28px] border border-white/[0.08] bg-[#121426] p-4 sm:p-7">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={simulatorData} margin={{ top: 15, right: 10, left: 0, bottom: 0 }}>
                <defs><linearGradient id="assetGrowth" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.45} /><stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="year" tickFormatter={(value) => "Y" + value} stroke="#71717a" tickLine={false} axisLine={false} />
                <YAxis tickFormatter={compactRupees} stroke="#71717a" tickLine={false} axisLine={false} width={72} />
                <Tooltip contentStyle={tooltipStyle} formatter={(value) => formatRupees(Number(value))} labelFormatter={(year) => "Year " + year} />
                <Area type="monotone" dataKey="value" name="Projected value" stroke="#a78bfa" strokeWidth={3} fill="url(#assetGrowth)" activeDot={{ r: 6, fill: "#c084fc" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-center text-xs text-zinc-600">FV = P × (((1 + r/n)^(n×t) − 1) / (r/n)) + PV × (1 + r/n)^(n×t)</p>
        </div>
      </section>

      <section id="wealth-calculator" className="relative bg-[#0c0e1a] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(124,58,237,0.14),transparent_30%)]" />
        <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 06 · Wealth Calculator</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Turn small choices into big outcomes</h2>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">Adjust your monthly commitment, timeline, and expected return to build a projection that fits your life.</p>
          </div>

          <div className="grid overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#121426] lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-b border-white/[0.07] p-6 sm:p-9 lg:border-r lg:border-b-0">
              <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-violet-600"><Calculator className="size-5" /></span><div><p className="text-xs text-zinc-500">Your projection</p><p className="font-semibold">Calculator inputs</p></div></div>
              <div className="mt-10 space-y-10">
                <Slider label="Monthly Amount" valueLabel={formatRupees(monthlyAmount)} min={10000} max={200000} step={5000} value={monthlyAmount} onChange={setMonthlyAmount} />
                <Slider label="Time Period" valueLabel={calculatorYears + " Years"} min={1} max={30} step={1} value={calculatorYears} onChange={setCalculatorYears} />
                <Slider label="Expected Return" valueLabel={returnRate + "%"} min={1} max={20} step={1} value={returnRate} onChange={setReturnRate} />
              </div>
              <div className="mt-10 rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] p-5"><p className="text-xs text-violet-300">Estimated future value</p><p className="mt-2 text-3xl font-semibold tracking-tight">{formatRupees(calculatorValue)}</p></div>
              <button type="button" className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold transition hover:bg-violet-500">Calculate <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></button>
            </div>

            <div className="min-h-[470px] p-4 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-semibold tracking-[0.14em] text-violet-400 uppercase">Live projection</p><h3 className="mt-2 text-xl font-semibold">Growth vs. contributions</h3></div><span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">Monthly compounding</span></div>
              <div className="h-[380px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={calculatorData} margin={{ top: 15, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis dataKey="year" tickFormatter={(value) => "Y" + value} stroke="#71717a" tickLine={false} axisLine={false} />
                    <YAxis tickFormatter={compactRupees} stroke="#71717a" tickLine={false} axisLine={false} width={72} />
                    <Tooltip contentStyle={tooltipStyle} formatter={(value) => formatRupees(Number(value))} labelFormatter={(year) => "Year " + year} />
                    <Legend wrapperStyle={{ color: "#a1a1aa", fontSize: "12px" }} />
                    <Line type="monotone" dataKey="value" name="Projected value" stroke="#a78bfa" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="contributions" name="Contributions" stroke="#34d399" strokeWidth={2} strokeDasharray="6 5" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Slider({ label, valueLabel, min, max, step, value, onChange }: {
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}) {
  const progress = ((value - min) / (max - min)) * 100;
  return (
    <label className="block">
      <span className="flex items-center justify-between text-sm"><span className="text-zinc-400">{label}</span><strong>{valueLabel}</strong></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} style={{ background: "linear-gradient(to right, #7c3aed " + progress + "%, rgba(255,255,255,0.08) " + progress + "%)" }} className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full accent-violet-600" />
      <span className="mt-2 flex justify-between text-[10px] text-zinc-600"><span>{min.toLocaleString()}</span><span>{max.toLocaleString()}</span></span>
    </label>
  );
}
