import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milsim West Guide — MILSIM",
  description: "The complete first-timer guide for Milsim West events.",
};

const SECTIONS = [
  {
    slug: "before-you-go",
    number: "01",
    emoji: "📋",
    title: "Before You Go",
    description: "Waiver, check-in time, what to pack the day of. Don't show up unprepared.",
  },
  {
    slug: "gear",
    number: "02",
    emoji: "🎒",
    title: "Gear Guide",
    description: "What you actually need for a 40–72 hr op. Budget picks included.",
  },
  {
    slug: "tactics",
    number: "03",
    emoji: "🎯",
    title: "Tactics 101",
    description: "Basic movement and cover so you don't get your squad wiped in hour one.",
  },
  {
    slug: "lingo",
    number: "04",
    emoji: "📻",
    title: "Platoon Lingo",
    description: "Commands your PL will yell. Learn them before the op, not during.",
  },
  {
    slug: "tacsop",
    number: "05",
    emoji: "📖",
    title: "TACSOP Simplified",
    description: "MSW rules cut down to what actually matters. No walls of text.",
  },
  {
    slug: "factions",
    number: "06",
    emoji: "🪖",
    title: "Factions",
    description: "NATO, RUFOR, and who else is on the field. Know your side before you show up.",
  },
];

export default function MilsimWestPage() {
  return (
    <PageContainer>
      <Link
        href="/newbie"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
      >
        <ChevronLeft size={14} />
        BACK TO NEWBIE GUIDE
      </Link>

      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">
        // OPERATION BRIEFING
      </p>
      <h1 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        MILSIM WEST
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        MSW runs some of the most immersive ops in the country. Long hours, real
        friction, and zero handholding. Pick a section and get ready.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((section) => (
          <Link
            key={section.slug}
            href={`/newbie/milsim-west/${section.slug}`}
            className="group relative flex flex-col gap-4 border border-border bg-card p-5 transition-all hover:border-tactical hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="text-4xl leading-none">{section.emoji}</span>
            <span className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/40">
              {section.number}
            </span>
            <div>
              <h2 className="font-mono text-base font-bold text-foreground transition-colors group-hover:text-tactical">
                {section.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            </div>
            <div className="mt-auto flex items-center gap-1 font-mono text-xs tracking-widest uppercase text-tactical opacity-0 transition-opacity group-hover:opacity-100">
              OPEN <ChevronRight size={12} />
            </div>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
