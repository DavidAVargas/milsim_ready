import Link from "next/link";
import { ChevronRight, ClipboardList, Shield, Crosshair, Radio, BookOpen, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milsim West Guide — MILSIM",
  description: "The complete first-timer guide for Milsim West events.",
};

const SECTIONS = [
  {
    slug: "before-you-go",
    number: "01",
    icon: ClipboardList,
    emoji: "📋",
    title: "Before You Go",
    description: "Waiver, check-in time, what to pack the day of. Don't show up unprepared.",
    color: "bg-amber-950/40 text-amber-400 border-amber-900/50",
  },
  {
    slug: "gear",
    number: "02",
    icon: Shield,
    emoji: "🎒",
    title: "Gear Guide",
    description: "What you actually need for a 40–72 hr op. Budget picks included.",
    color: "bg-green-950/40 text-green-400 border-green-900/50",
  },
  {
    slug: "tactics",
    number: "03",
    icon: Crosshair,
    emoji: "🎯",
    title: "Tactics 101",
    description: "Basic movement and cover so you don't get your squad wiped in hour one.",
    color: "bg-red-950/40 text-red-400 border-red-900/50",
  },
  {
    slug: "lingo",
    number: "04",
    icon: Radio,
    emoji: "📻",
    title: "Platoon Lingo",
    description: "Commands your PL will yell. Learn them before the op, not during.",
    color: "bg-blue-950/40 text-blue-400 border-blue-900/50",
  },
  {
    slug: "tacsop",
    number: "05",
    icon: BookOpen,
    emoji: "📖",
    title: "TACSOP Simplified",
    description: "MSW rules cut down to what actually matters. No walls of text.",
    color: "bg-purple-950/40 text-purple-400 border-purple-900/50",
  },
  {
    slug: "factions",
    number: "06",
    icon: Users,
    emoji: "🪖",
    title: "Factions",
    description: "NATO, RUFOR, and who else is on the field. Know your side before you show up.",
    color: "bg-orange-950/40 text-orange-400 border-orange-900/50",
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
        friction, and zero handholding. Pick a section and get ready.
      </p>

      {/* Section cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.slug}
              href={`/newbie/milsim-west/${section.slug}`}
              className="group relative flex flex-col gap-4 border border-border bg-card p-5 transition-all hover:border-tactical hover:-translate-y-0.5"
            >
              {/* Icon badge */}
              <div className={`flex h-11 w-11 items-center justify-center rounded border ${section.color}`}>
                <Icon size={20} />
              </div>

              {/* Number */}
              <span className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/40">
                {section.number}
              </span>

              {/* Text */}
              <div>
                <h2 className="font-mono text-base font-bold text-foreground group-hover:text-tactical transition-colors">
                  {section.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-auto flex items-center gap-1 font-mono text-xs tracking-widest uppercase text-tactical opacity-0 transition-opacity group-hover:opacity-100">
                OPEN <ChevronRight size={12} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
