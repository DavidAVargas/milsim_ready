import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milsim West Guide — MILSIM",
  description: "The complete first-timer guide for Milsim West events.",
};

const SECTIONS = [
  {
    slug: "before-you-go",
    label: "01 — BEFORE YOU GO",
    title: "Before You Go",
    description:
      "Check-in times, waiver printing, what to pack the day of, parking, and everything you need to not show up unprepared.",
  },
  {
    slug: "gear",
    label: "02 — GEAR",
    title: "Gear Guide",
    description:
      "What you actually need for a 40–72 hour op. Broken down by category — clothing, weapon, protection, hydration, and sleep.",
  },
  {
    slug: "tactics",
    label: "03 — TACTICS",
    title: "Tactics 101",
    description:
      "Basic movement, cover vs concealment, buddy team fundamentals, and how not to get your squad wiped in the first hour.",
  },
  {
    slug: "lingo",
    label: "04 — LINGO",
    title: "Platoon Lingo",
    description:
      "The commands your platoon leader is going to yell and what they actually mean. Learn these before the op, not during.",
  },
  {
    slug: "tacsop",
    label: "05 — TACSOP",
    title: "TACSOP Simplified",
    description:
      "MSW's rules of engagement cut down to what actually matters. The parts that'll get you hit, eliminated, or kicked if you miss them.",
  },
];

export default function MilsimWestPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
        <Link href="/newbie" className="hover:text-tactical transition-colors">
          NEWBIE
        </Link>
        <ChevronRight size={12} />
        <span className="text-tactical">MILSIM WEST</span>
      </div>

      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">
        // OPERATION BRIEFING
      </p>
      <h1 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        MILSIM WEST
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        MSW runs some of the most immersive ops in the country. Long hours, real
        friction, and zero handholding. Use this guide so you show up ready
        instead of becoming a liability.
      </p>

      {/* Section cards */}
      <div className="mt-12 flex flex-col gap-3">
        {SECTIONS.map((section) => (
          <Link
            key={section.slug}
            href={`/newbie/milsim-west/${section.slug}`}
            className="group flex items-center justify-between border border-border bg-card p-5 transition-colors hover:border-tactical"
          >
            <div>
              <p className="mb-1 font-mono text-xs tracking-widest uppercase text-tactical">
                {section.label}
              </p>
              <h2 className="font-mono text-base font-bold text-foreground">
                {section.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {section.description}
              </p>
            </div>
            <ChevronRight
              size={18}
              className="ml-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-tactical"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
