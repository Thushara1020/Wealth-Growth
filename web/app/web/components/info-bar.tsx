import { CalendarCheck, Mail, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const highlights = [
  { title: "Plan Today", eyebrow: "WEALTH GROWTH", icon: CalendarCheck },
  { title: "Secure & Trusted", eyebrow: "Protected", icon: ShieldCheck },
  { title: "Personalised Approach", eyebrow: "Made for you", icon: Sparkles },
  { title: "Grow Your Wealth", eyebrow: "Build momentum", icon: TrendingUp },
  { title: "hello@wealthgrowth.com", eyebrow: "Contact Us", icon: Mail, href: "mailto:hello@wealthgrowth.com" },
];

export function InfoBar() {
  return <section id="simulators" className="relative z-10 border-y border-white/[0.07] bg-[#101220]/90" aria-label="WEALTH GROWTH benefits"><div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
    {highlights.map(({ title, eyebrow, icon: Icon, href }) => {
      const content = <div className="flex items-center gap-3 px-5 py-5 sm:px-7 lg:border-r lg:border-white/[0.07] lg:px-6"><div className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-300"><Icon className="size-[18px]" /></div><div className="min-w-0"><p className="text-[10px] font-semibold tracking-[0.14em] text-violet-400 uppercase">{eyebrow}</p><p className="mt-1 truncate text-sm font-medium text-zinc-200">{title}</p></div></div>;
      return href ? <a key={title} href={href} className="transition hover:bg-white/[0.03]">{content}</a> : <div key={title}>{content}</div>;
    })}
  </div></section>;
}
