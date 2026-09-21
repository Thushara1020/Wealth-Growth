import type { LucideIcon } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function PageHero({ eyebrow, title, description, icon: Icon }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#0c0e1a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(124,58,237,0.22),transparent_30%)]" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-20">
        <span className="grid size-12 place-items-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300"><Icon className="size-6" /></span>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
