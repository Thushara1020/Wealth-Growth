"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Video,
  X,
} from "lucide-react";

type Message = {
  id: number;
  author: "advisor" | "user";
  text: string;
  time: string;
};

const initialMessages: Message[] = [
  { id: 1, author: "advisor", text: "Hi! I have reviewed your Wealth Growth journey. How can I help you today?", time: "09:42" },
  { id: 2, author: "user", text: "I would like to understand whether my monthly investment is enough for my goals.", time: "09:44" },
  { id: 3, author: "advisor", text: "Absolutely. We can review your goal timelines and test a few contribution scenarios together.", time: "09:45" },
];

export function AdvisorConnect() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (!bookingOpen) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setBookingOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [bookingOpen]);

  function sendMessage(event: FormEvent) {
    event.preventDefault();
    const message = draft.trim();
    if (!message) return;
    setMessages((current) => [...current, {
      id: Date.now(),
      author: "user",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }]);
    setDraft("");
  }

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBookingConfirmed(true);
  }

  function closeBooking() {
    setBookingOpen(false);
    window.setTimeout(() => setBookingConfirmed(false), 250);
  }

  return (
    <section id="advisor-connect" className="relative border-t border-white/[0.07] bg-[#101220] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(124,58,237,0.15),transparent_28%)]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">Screen 13 · Advisor Connect</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Expert guidance, when you need it</h2>
          <p className="mt-5 text-zinc-400">Choose the support channel that works for you and connect with an advisor who already understands your plan.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <a href="https://wa.me/94711488141?text=Hello%20WEALTH%20PLAN%2C%20I%20would%20like%20to%20speak%20with%20an%20advisor." target="_blank" rel="noopener noreferrer" className="group rounded-[24px] border border-emerald-400/20 bg-emerald-400/[0.05] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-emerald-500 text-white"><MessageCircle className="size-5" /></span><ArrowRight className="size-5 text-emerald-400 transition-transform group-hover:translate-x-1" /></div>
            <h3 className="mt-7 text-lg font-semibold">Chat on WhatsApp</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">Start a secure conversation with our advisory support team.</p>
            <p className="mt-5 text-xs font-semibold text-emerald-400">Typically replies in minutes</p>
          </a>

          <a href="tel:+94711488141" className="group rounded-[24px] border border-blue-400/20 bg-blue-400/[0.05] p-6 transition hover:-translate-y-1 hover:border-blue-400/40">
            <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-blue-500 text-white"><Phone className="size-5" /></span><ArrowRight className="size-5 text-blue-400 transition-transform group-hover:translate-x-1" /></div>
            <h3 className="mt-7 text-lg font-semibold">Call an Advisor</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">Speak directly about your plan, goals, or financial questions.</p>
            <p className="mt-5 text-xs font-semibold text-blue-300">+94 71 148 8141</p>
          </a>

          <button type="button" onClick={() => setBookingOpen(true)} className="group rounded-[24px] border border-violet-400/30 bg-violet-500/[0.07] p-6 text-left transition hover:-translate-y-1 hover:border-violet-400/50">
            <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-violet-600 text-white"><CalendarDays className="size-5" /></span><ArrowRight className="size-5 text-violet-400 transition-transform group-hover:translate-x-1" /></div>
            <h3 className="mt-7 text-lg font-semibold">Request a Meeting</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">Choose a convenient time for a focused one-to-one plan review.</p>
            <p className="mt-5 text-xs font-semibold text-violet-300">Online or in person</p>
          </button>
        </div>

        <div className="mt-5 grid overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#121426] lg:grid-cols-[360px_1fr]">
          <aside className="border-b border-white/[0.07] bg-[#0e101d] p-7 lg:border-r lg:border-b-0 lg:p-9">
            <div className="relative mx-auto size-36 overflow-hidden rounded-[28px] border border-violet-400/30">
              <Image src="/wealth-planning-hero.png" alt="Anushka Silva, senior wealth advisor" fill sizes="144px" className="object-cover object-[50%_24%]" />
            </div>
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2"><h3 className="text-xl font-semibold">Anushka Silva</h3><CheckCircle2 className="size-4 text-blue-400" /></div>
              <p className="mt-2 text-sm text-violet-300">Senior Wealth Advisor</p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-emerald-400"><span className="size-2 rounded-full bg-emerald-400" /> Available now</div>
            </div>

            <div className="mt-7 space-y-3">
              {[{ icon: Award, text: "CFP® · MSc Finance" }, { icon: ShieldCheck, text: "8+ years advisory experience" }, { icon: Sparkles, text: "Goal-based planning specialist" }].map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-xs text-zinc-400"><Icon className="size-4 text-violet-400" />{text}</div>)}
            </div>

            <div className="mt-7 border-t border-white/[0.07] pt-6">
              <p className="text-xs font-semibold tracking-[0.12em] text-zinc-600 uppercase">Contact</p>
              <a href="mailto:advisor@wealthgrowth.lk" className="mt-3 flex items-center gap-2 text-sm text-zinc-400 hover:text-white"><Mail className="size-4" /> advisor@wealthgrowth.lk</a>
            </div>
          </aside>

          <div className="flex min-h-[590px] flex-col">
            <header className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
              <div><p className="font-semibold">Message your advisor</p><p className="mt-1 text-xs text-zinc-500">Your messages are shown in this secure preview</p></div>
              <button type="button" onClick={() => setBookingOpen(true)} className="hidden items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/[0.04] sm:flex"><Video className="size-4 text-violet-400" /> Book call</button>
            </header>

            <div className="flex-1 space-y-5 overflow-y-auto bg-[radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.07),transparent_35%)] p-5 sm:p-7" aria-live="polite">
              <div className="mx-auto w-fit rounded-full bg-white/[0.04] px-3 py-1.5 text-[10px] text-zinc-600">Today</div>
              {messages.map((message) => (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} key={message.id} className={["flex", message.author === "user" ? "justify-end" : "justify-start"].join(" ")}>
                  <div className={["max-w-[85%] rounded-2xl px-4 py-3 sm:max-w-[70%]", message.author === "user" ? "rounded-br-md bg-violet-600 text-white" : "rounded-bl-md border border-white/[0.07] bg-[#191b2e] text-zinc-300"].join(" ")}>
                    <p className="text-sm leading-6">{message.text}</p>
                    <p className={["mt-1.5 text-right text-[10px]", message.author === "user" ? "text-violet-200" : "text-zinc-600"].join(" ")}>{message.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="border-t border-white/[0.07] p-4 sm:p-5">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0c0e1a] p-2 focus-within:border-violet-500/60">
                <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Type your message..." aria-label="Message your advisor" className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-zinc-600" />
                <button type="submit" disabled={!draft.trim()} aria-label="Send message" className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-600 transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"><Send className="size-4" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {bookingOpen && <motion.div role="dialog" aria-modal="true" aria-labelledby="meeting-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.currentTarget === event.target && closeBooking()} className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#080912]/85 p-5 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} className="w-full max-w-lg rounded-[28px] border border-white/10 bg-[#15172a] p-6 shadow-2xl sm:p-8">
            {bookingConfirmed ? <div className="py-6 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-400/10 text-emerald-400"><CheckCircle2 className="size-8" /></span>
              <h3 id="meeting-title" className="mt-6 text-2xl font-semibold">Meeting request received</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">An advisor will confirm your preferred time by email shortly.</p>
              <button type="button" onClick={closeBooking} className="mt-7 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold hover:bg-violet-500">Done</button>
            </div> : <>
              <div className="flex items-start justify-between gap-5"><div><p className="text-xs font-semibold tracking-[0.15em] text-violet-400 uppercase">Personal plan review</p><h3 id="meeting-title" className="mt-2 text-2xl font-semibold">Request a Meeting</h3></div><button type="button" onClick={closeBooking} aria-label="Close booking form" className="grid size-9 place-items-center rounded-full bg-white/[0.05] text-zinc-400 hover:text-white"><X className="size-4" /></button></div>
              <form onSubmit={submitBooking} className="mt-7 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2"><BookingField label="Full name"><input required name="name" className="booking-input" placeholder="Your name" /></BookingField><BookingField label="Email"><input required type="email" name="email" className="booking-input" placeholder="you@example.com" /></BookingField></div>
                <div className="grid gap-4 sm:grid-cols-2"><BookingField label="Preferred date"><input required type="date" name="date" className="booking-input" /></BookingField><BookingField label="Preferred time"><input required type="time" name="time" className="booking-input" /></BookingField></div>
                <BookingField label="Meeting type"><select name="type" className="booking-input"><option>Video consultation</option><option>Phone consultation</option><option>In-person meeting</option></select></BookingField>
                <BookingField label="What would you like to discuss?"><textarea name="notes" rows={3} className="booking-input min-h-24 resize-none py-3" placeholder="Tell us how we can prepare..." /></BookingField>
                <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-4 py-3 text-xs text-zinc-500"><Clock3 className="size-4 text-violet-400" /> Meetings are typically 30 minutes.</div>
                <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold hover:bg-violet-500">Send Meeting Request <ArrowRight className="size-4" /></button>
              </form>
            </>}
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}

function BookingField({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-xs font-medium text-zinc-500">{label}</span>{children}</label>;
}
