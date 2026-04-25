import Link from "next/link";
import { ChevronLeft, CheckCircle2, Clock, MapPin, FileText, ShieldCheck, AlertTriangle } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before You Go — Milsim West",
  description: "Everything you need to do and bring before showing up to a Milsim West event.",
};

const CHECKLIST = [
  "Printed & signed waiver (physical copy — no phone)",
  "Valid government-issued ID",
  "Faction-correct uniform (NATO or RUFOR — check your ticket)",
  "Eye protection (full seal, ANSI rated)",
  "Face protection (lower face mesh or goggles with coverage)",
  "Airsoft replica + magazines",
  "BBs (enough for 40–72 hrs — bring more than you think)",
  "Sleeping gear (sleeping bag, tent or tarp, sleeping pad)",
  "Food & water for the full op (MREs, snacks, hydration pack)",
  "Extra batteries or charger for your replica",
  "Radio + extra batteries",
  "First aid kit / personal medications",
  "Cash (some vendors on site)",
  "Red light flashlight (white light = you get lit up at night)",
];

const SECTIONS = [
  {
    Icon: Clock,
    title: "When to Arrive",
    content: [
      "Check-in usually opens Friday afternoon and closes in the evening — don't show up 20 minutes before it closes.",
      "Aim to arrive at least 1–2 hours before check-in closes. You'll need time to set up camp, get through the line, pass chrono, and get your briefing.",
      "Late arrivals miss the opening briefing and start the op already behind. Don't be that person.",
    ],
  },
  {
    Icon: FileText,
    title: "Your Waiver",
    content: [
      "Print it. Sign it. Bring the physical copy. They will not accept it on your phone.",
      "Download the MSW waiver from the official Milsim West website before you leave. If you forget it, you're not getting in.",
      "If you're under 18, a parent or guardian signature is required on the waiver.",
    ],
  },
  {
    Icon: MapPin,
    title: "Check-In Process",
    content: [
      "When you arrive, go straight to check-in. Don't set up camp first.",
      "You'll hand over your waiver, show your ID, and get your wristband and faction assignment confirmed.",
      "After check-in, your replica goes through chronograph testing. If your gun shoots over the event's FPS limit, you won't be able to use it — know your limits before you show up.",
      "After chrono, you'll get a briefing on the AO (area of operations), rules, and your first objectives.",
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Chrono Limits",
    content: [
      "AEGs (automatic electric guns): typically 400 FPS with 0.20g BBs.",
      "DMRs (semi-auto only): typically up to 450–500 FPS with a minimum engagement distance.",
      "Bolt-action sniper rifles: up to 550 FPS with a minimum engagement distance.",
      "Check the specific event page for exact limits — they can vary per op.",
    ],
  },
];

export default function BeforeYouGoPage() {
  return (
    <PageContainer>
      <Link
        href="/newbie/milsim-west"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
      >
        <ChevronLeft size={14} />
        BACK TO MILSIM WEST
      </Link>

      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// 01</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
        BEFORE YOU GO
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Most newbies show up unprepared and spend the first few hours scrambling.
        Read this before you leave the house.
      </p>

      {/* Warning banner */}
      <div className="mt-8 flex items-start gap-3 border border-tactical/40 bg-tactical/5 p-4">
        <AlertTriangle size={16} className="mt-0.5 shrink-0 text-tactical" />
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">No printed waiver = no entry.</span>{" "}
          This is the #1 reason new players get turned away at the gate. Print it before you leave.
        </p>
      </div>

      {/* Info sections */}
      <div className="mt-12 flex flex-col gap-8">
        {SECTIONS.map(({ Icon, title, content }) => (
          <div key={title} className="border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <Icon size={18} className="text-tactical shrink-0" />
              <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
                {title}
              </h2>
            </div>
            <ul className="flex flex-col gap-2">
              {content.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Checklist */}
      <div className="mt-12">
        <h2 className="mb-6 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
          // PACKING CHECKLIST
        </h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {CHECKLIST.map((item) => (
            <div key={item} className="flex items-start gap-3 border border-border bg-card p-3">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-tactical" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
