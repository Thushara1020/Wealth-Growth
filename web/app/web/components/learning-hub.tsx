"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock3, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

const categories = ["All", "Basics", "Investments", "Retirement", "Taxes"];

const articles = [
  {
    category: "Basics",
    title: "Build a Budget That Actually Fits Your Life",
    description: "A simple framework for directing your income without making everyday life feel restricted.",
    image: "/wealth-planning-hero.png",
    position: "center 34%",
    duration: "6 min read",
  },
  {
    category: "Investments",
    title: "Compound Growth: Your Most Patient Wealth Builder",
    description: "Understand how time, regular contributions, and returns work together to grow your portfolio.",
    image: "/og.png",
    position: "center",
    duration: "8 min read",
  },
  {
    category: "Retirement",
    title: "How Much Is Enough for Retirement?",
    description: "Turn your desired lifestyle into a practical retirement target and monthly savings plan.",
    image: "/wealth-planning-hero.png",
    position: "center 60%",
    duration: "7 min read",
  },
  {
    category: "Taxes",
    title: "Tax Planning Essentials for Smarter Decisions",
    description: "Learn the habits that can keep your finances organised and help you plan obligations early.",
    image: "/og.png",
    position: "right center",
    duration: "5 min read",
  },
  {
    category: "Basics",
    title: "Your Emergency Fund, Explained",
    description: "Choose the right safety-net target and build it steadily without putting every other goal on hold.",
    image: "/wealth-planning-hero.png",
    position: "left 42%",
    duration: "5 min read",
  },
  {
    category: "Investments",
    title: "Risk and Return Without the Jargon",
    description: "A clear guide to matching investment risk with your goals, timeline, and comfort level.",
    image: "/og.png",
    position: "left center",
    duration: "9 min read",
  },
  {
    category: "Retirement",
    title: "Five Retirement Mistakes You Can Avoid Today",
    description: "Small planning corrections now can protect decades of future income and flexibility.",
    image: "/wealth-planning-hero.png",
    position: "right 38%",
    duration: "6 min read",
  },
  {
    category: "Taxes",
    title: "A Year-Round Financial Records Checklist",
    description: "Keep the right documents organised so reviews, reporting, and tax season feel less stressful.",
    image: "/og.png",
    position: "center bottom",
    duration: "4 min read",
  },
];

export function LearningHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesSearch = !query || [article.title, article.description, article.category].some((value) => value.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section id="learning-hub" className="relative border-t border-white/[0.07] bg-[#0c0e1a] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(124,58,237,0.14),transparent_28%)]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 12 · Wealth Learning Hub</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Learn today. Grow tomorrow.</h2>
            <p className="mt-5 max-w-2xl text-zinc-400">Practical, clear financial education designed to help every decision feel more informed and confident.</p>
          </div>
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search learning articles</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the learning hub..." className="h-12 w-full rounded-xl border border-white/10 bg-[#15172a] pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
          </label>
        </div>

        <article className="mt-12 grid overflow-hidden rounded-[30px] border border-violet-400/20 bg-[#121426] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[420px]">
            <Image src="/og.png" alt="WEALTH GROWTH dashboard illustrating a long-term investment journey" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121426] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#121426]/40" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2 text-xs font-semibold text-violet-300"><Sparkles className="size-4" /> Featured learning path</div>
            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em]">The Complete Guide to Building Your First Wealth Plan</h3>
            <p className="mt-5 text-sm leading-7 text-zinc-400">Move from financial uncertainty to a clear roadmap. This step-by-step guide connects cash flow, protection, goals, investing, and long-term reviews.</p>
            <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500"><span className="flex items-center gap-2"><Clock3 className="size-3.5" /> 12 min read</span><span className="rounded-full bg-violet-500/10 px-3 py-1.5 text-violet-300">Basics</span></div>
            <a href="#featured-article" className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white">Explore featured article <ArrowRight className="size-4 text-violet-400 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </article>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Article categories">
            {categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={["shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition", activeCategory === category ? "border-violet-500 bg-violet-600 text-white" : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"].join(" ")}>{category}</button>)}
          </div>
          <p className="shrink-0 text-sm text-zinc-500" aria-live="polite"><strong className="text-zinc-200">{filteredArticles.length}</strong> articles found</p>
        </div>

        <motion.div layout className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.article layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} key={article.title} className="group overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#141625] transition hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={article.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectPosition: article.position }} className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141625] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#0c0e1a]/80 px-3 py-1.5 text-[10px] font-semibold text-violet-200 backdrop-blur-md">{article.category}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-600"><Clock3 className="size-3" />{article.duration}</div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{article.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">{article.description}</p>
                  <a href={"#article-" + article.title.toLowerCase().replaceAll(" ", "-")} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition group-hover:text-violet-200">Read More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {!filteredArticles.length && <div className="mt-7 rounded-[24px] border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center"><BookOpen className="mx-auto size-8 text-zinc-600" /><h3 className="mt-4 font-semibold">No lessons found</h3><p className="mt-2 text-sm text-zinc-500">Try a different search term or category.</p><button type="button" onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-5 text-sm font-semibold text-violet-300">Clear filters</button></div>}
      </div>
    </section>
  );
}
