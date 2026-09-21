"use client";

import { useState } from "react";
import {
  ArrowRight,
  Download,
  FileText,
  Flag,
  LoaderCircle,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  WalletCards,
} from "lucide-react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";

type Profile = {
  name: string;
  age: number;
  monthlyIncome: number;
  monthlySaving: number;
  horizon: number;
  riskProfile: string;
};

const summaryItems = [
  { title: "Goal Summary", text: "Build a home deposit, fund education, and create long-term retirement freedom.", icon: Target },
  { title: "Investment Plan", text: "A diversified Balanced Growth portfolio with disciplined monthly contributions.", icon: WalletCards },
  { title: "Projected Growth", text: "Target portfolio value of Rs. 1,24,80,000 over the selected planning horizon.", icon: TrendingUp },
  { title: "Risk Analysis", text: "Moderate market exposure with a defensive allocation and emergency reserve.", icon: ShieldAlert },
  { title: "Next Steps", text: "Confirm priorities, automate contributions, and review progress every quarter.", icon: Flag },
];

const pdfStyles = StyleSheet.create({
  page: { backgroundColor: "#ffffff", color: "#171717", padding: 40, fontFamily: "Helvetica", fontSize: 10 },
  brand: { color: "#7c3aed", fontSize: 10, letterSpacing: 2, marginBottom: 10 },
  title: { fontSize: 25, fontFamily: "Helvetica-Bold", marginBottom: 6 },
  subtitle: { color: "#666666", lineHeight: 1.5, marginBottom: 24 },
  profile: { flexDirection: "row", backgroundColor: "#f4f0ff", borderRadius: 8, padding: 14, marginBottom: 20 },
  profileItem: { width: "33.33%" },
  label: { color: "#777777", fontSize: 8, marginBottom: 4, textTransform: "uppercase" },
  value: { fontFamily: "Helvetica-Bold", fontSize: 11 },
  sectionTitle: { fontSize: 15, fontFamily: "Helvetica-Bold", marginTop: 12, marginBottom: 12 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  card: { width: "48.5%", border: "1px solid #e8e8e8", borderRadius: 7, padding: 12, minHeight: 78 },
  cardWide: { width: "100%", border: "1px solid #e8e8e8", borderRadius: 7, padding: 12 },
  cardTitle: { color: "#7c3aed", fontFamily: "Helvetica-Bold", fontSize: 10, marginBottom: 6 },
  body: { color: "#555555", lineHeight: 1.55 },
  recommendation: { flexDirection: "row", marginBottom: 8 },
  check: { color: "#7c3aed", width: 16, fontFamily: "Helvetica-Bold" },
  footer: { position: "absolute", left: 40, right: 40, bottom: 24, paddingTop: 9, borderTop: "1px solid #eeeeee", flexDirection: "row", justifyContent: "space-between", color: "#999999", fontSize: 8 },
});

function ProposalDocument({ profile }: { profile: Profile }) {
  const annualSavings = profile.monthlySaving * 12;
  return (
    <Document title={"WEALTH GROWTH Proposal - " + profile.name} author="WEALTH GROWTH">
      <Page size="A4" style={pdfStyles.page}>
        <Text style={pdfStyles.brand}>WEALTH GROWTH</Text>
        <Text style={pdfStyles.title}>Personalised Proposal Report</Text>
        <Text style={pdfStyles.subtitle}>A practical financial roadmap prepared for {profile.name}, based on the profile and priorities selected in the WEALTH GROWTH journey.</Text>

        <View style={pdfStyles.profile}>
          <View style={pdfStyles.profileItem}><Text style={pdfStyles.label}>Client</Text><Text style={pdfStyles.value}>{profile.name}</Text></View>
          <View style={pdfStyles.profileItem}><Text style={pdfStyles.label}>Age / Horizon</Text><Text style={pdfStyles.value}>{profile.age} / {profile.horizon} years</Text></View>
          <View style={pdfStyles.profileItem}><Text style={pdfStyles.label}>Risk Profile</Text><Text style={pdfStyles.value}>{profile.riskProfile}</Text></View>
        </View>

        <Text style={pdfStyles.sectionTitle}>Executive Summary</Text>
        <View style={pdfStyles.grid}>
          {summaryItems.map((item, index) => (
            <View key={item.title} style={index === summaryItems.length - 1 ? pdfStyles.cardWide : pdfStyles.card}>
              <Text style={pdfStyles.cardTitle}>{item.title}</Text>
              <Text style={pdfStyles.body}>{item.text}</Text>
            </View>
          ))}
        </View>

        <Text style={pdfStyles.sectionTitle}>Financial Snapshot</Text>
        <View style={pdfStyles.profile}>
          <View style={pdfStyles.profileItem}><Text style={pdfStyles.label}>Monthly Income</Text><Text style={pdfStyles.value}>Rs. {profile.monthlyIncome.toLocaleString("en-IN")}</Text></View>
          <View style={pdfStyles.profileItem}><Text style={pdfStyles.label}>Monthly Saving</Text><Text style={pdfStyles.value}>Rs. {profile.monthlySaving.toLocaleString("en-IN")}</Text></View>
          <View style={pdfStyles.profileItem}><Text style={pdfStyles.label}>Annual Saving</Text><Text style={pdfStyles.value}>Rs. {annualSavings.toLocaleString("en-IN")}</Text></View>
        </View>

        <Text style={pdfStyles.sectionTitle}>Recommended Actions</Text>
        {[
          "Automate monthly contributions immediately after income is received.",
          "Maintain an emergency reserve before increasing market exposure.",
          "Review protection and beneficiaries after every major life event.",
          "Rebalance the investment mix at least once every 12 months.",
        ].map((item) => <View key={item} style={pdfStyles.recommendation}><Text style={pdfStyles.check}>-</Text><Text style={pdfStyles.body}>{item}</Text></View>)}

        <View style={pdfStyles.footer}><Text>Prepared by WEALTH GROWTH</Text><Text render={({ pageNumber, totalPages }) => "Page " + pageNumber + " of " + totalPages} /></View>
      </Page>
    </Document>
  );
}

export function ProposalReport() {
  const [profile, setProfile] = useState<Profile>({
    name: "Nimal Perera",
    age: 34,
    monthlyIncome: 250000,
    monthlySaving: 50000,
    horizon: 10,
    riskProfile: "Balanced",
  });
  const [exporting, setExporting] = useState(false);

  function updateProfile<K extends keyof Profile>(key: K, value: Profile[K]) {
    setProfile((current) => ({ ...current, [key]: value }));
  }

  async function downloadPdf() {
    setExporting(true);
    try {
      const blob = await pdf(<ProposalDocument profile={profile} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "wealth-plan-personalised-proposal.pdf";
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } finally {
      setExporting(false);
    }
  }

  return (
    <section id="proposal-report" className="proposal-screen relative border-t border-white/[0.07] bg-[#101220] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(124,58,237,0.15),transparent_26%)]" />
      <div className="relative mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="proposal-no-print mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 11 · Personalised Proposal</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Your plan, ready to take forward</h2><p className="mt-5 max-w-2xl text-zinc-400">Adjust the profile details, review the executive summary, and export a polished proposal for your records.</p></div>
          <button type="button" onClick={downloadPdf} disabled={exporting} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold transition hover:bg-violet-500 disabled:cursor-wait disabled:opacity-70">
            {exporting ? <><LoaderCircle className="size-4 animate-spin" /> Preparing PDF</> : <><Download className="size-4" /> Download PDF</>}
          </button>
        </div>

        <div className="grid overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#121426] shadow-[0_30px_100px_rgba(0,0,0,0.3)] lg:grid-cols-[320px_1fr]">
          <aside className="proposal-no-print border-b border-white/[0.07] bg-[#0e101d] p-6 sm:p-8 lg:border-r lg:border-b-0">
            <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-violet-600"><UserRound className="size-5" /></span><div><p className="font-semibold">Profile Parameters</p><p className="mt-0.5 text-xs text-zinc-500">Updates your proposal live</p></div></div>
            <div className="mt-8 space-y-6">
              <Field label="Client name"><input value={profile.name} onChange={(event) => updateProfile("name", event.target.value)} className="proposal-input" /></Field>
              <Field label="Age"><input type="number" min="18" max="80" value={profile.age} onChange={(event) => updateProfile("age", Number(event.target.value))} className="proposal-input" /></Field>
              <Field label="Monthly income"><input type="number" min="0" step="10000" value={profile.monthlyIncome} onChange={(event) => updateProfile("monthlyIncome", Number(event.target.value))} className="proposal-input" /></Field>
              <Field label="Monthly saving"><input type="number" min="0" step="5000" value={profile.monthlySaving} onChange={(event) => updateProfile("monthlySaving", Number(event.target.value))} className="proposal-input" /></Field>
              <Field label="Planning horizon"><input type="range" min="5" max="30" value={profile.horizon} onChange={(event) => updateProfile("horizon", Number(event.target.value))} className="w-full accent-violet-600" /><span className="mt-2 block text-right text-xs font-semibold text-violet-300">{profile.horizon} years</span></Field>
              <Field label="Risk profile"><select value={profile.riskProfile} onChange={(event) => updateProfile("riskProfile", event.target.value)} className="proposal-input"><option>Conservative</option><option>Balanced</option><option>Growth</option></select></Field>
            </div>
          </aside>

          <article className="proposal-print-area bg-[#f5f4f8] p-5 text-[#18181b] sm:p-8 lg:p-12">
            <div className="rounded-[22px] bg-white p-6 shadow-[0_16px_50px_rgba(15,15,25,0.08)] sm:p-9">
              <div className="flex flex-col justify-between gap-5 border-b border-zinc-200 pb-7 sm:flex-row sm:items-start">
                <div><p className="text-xs font-bold tracking-[0.18em] text-violet-600">WEALTH GROWTH</p><h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">Personalised Proposal Report</h3><p className="mt-2 text-sm text-zinc-500">Prepared for {profile.name || "Your Client"}</p></div>
                <div className="rounded-xl bg-violet-50 px-4 py-3 text-right"><p className="text-[10px] font-semibold tracking-[0.12em] text-violet-500 uppercase">Strategy</p><p className="mt-1 text-sm font-bold text-violet-800">{profile.riskProfile} Growth</p></div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[["Age", String(profile.age)], ["Planning horizon", profile.horizon + " years"], ["Monthly saving", "Rs. " + profile.monthlySaving.toLocaleString("en-IN")]].map(([label, value]) => <div key={label} className="rounded-xl bg-zinc-50 p-4"><p className="text-[10px] font-semibold tracking-[0.1em] text-zinc-400 uppercase">{label}</p><p className="mt-2 text-sm font-bold">{value}</p></div>)}
              </div>

              <div className="mt-9 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-violet-100 text-violet-700"><FileText className="size-5" /></span><div><p className="font-semibold">Executive Summary</p><p className="mt-0.5 text-xs text-zinc-500">Your plan at a glance</p></div></div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {summaryItems.map(({ title, text, icon: Icon }, index) => <section key={title} className={["rounded-2xl border border-zinc-200 p-5", index === summaryItems.length - 1 ? "sm:col-span-2" : ""].join(" ")}><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-violet-50 text-violet-700"><Icon className="size-4" /></span><h4 className="text-sm font-bold">{title}</h4></div><p className="mt-4 text-sm leading-6 text-zinc-500">{text}</p></section>)}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171327] p-6 text-white">
                <div className="flex items-start gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-600"><Sparkles className="size-5" /></span><div><h4 className="font-semibold">Your recommended first move</h4><p className="mt-2 text-sm leading-6 text-zinc-400">Automate your Rs. {profile.monthlySaving.toLocaleString("en-IN")} monthly contribution and schedule the first quarterly review now.</p></div></div>
                <a href="/wealth-plan#wealth-dashboard" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300">Review dashboard <ArrowRight className="size-4" /></a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-xs font-medium text-zinc-500">{label}</span>{children}</label>;
}
