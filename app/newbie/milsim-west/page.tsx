import Link from "next/link";
import { ChevronLeft, ListChecks, Backpack, Crosshair, Radio, FileText, Users } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milsim West Guide — Milsim Ready",
  description: "The complete first-timer guide for Milsim West events.",
};

const SECTIONS = [
  {
    slug: "before-you-go",
    number: "01",
    Icon: ListChecks,
    title: "Before You Go",
    description: "Waiver, check-in time, what to pack the day of. Don't show up unprepared.",
  },
  {
    slug: "gear",
    number: "02",
    Icon: Backpack,
    title: "Gear Guide",
    description: "What you actually need for a 40–72 hr op. Budget picks included.",
  },
  {
    slug: "tactics",
    number: "03",
    Icon: Crosshair,
    title: "Tactics 101",
    description: "Basic movement and cover so you don't get your squad wiped in hour one.",
  },
  {
    slug: "lingo",
    number: "04",
    Icon: Radio,
    title: "Platoon Lingo",
    description: "Commands your PL will yell. Learn them before the op, not during.",
  },
  {
    slug: "tacsop",
    number: "05",
    Icon: FileText,
    title: "TACSOP Simplified",
    description: "MSW rules cut down to what actually matters. No walls of text.",
  },
  {
    slug: "factions",
    number: "06",
    Icon: Users,
    title: "Factions",
    description: "NATO, RUFOR, and Militia. Know your side before you show up.",
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
        {SECTIONS.map(({ slug, number, Icon, title, description }) => (
          <Link
            key={slug}
            href={`/newbie/milsim-west/${slug}`}
            className="group relative flex flex-col gap-6 border border-border bg-card p-7 transition-all hover:border-tactical hover:-translate-y-0.5 hover:shadow-lg"
          >
            {/* Number */}
            <span className="absolute right-5 top-5 font-mono text-xs font-bold text-muted-foreground/30">
              {number}
            </span>

            {/* Icon block */}
            <div className="flex items-center justify-center w-14 h-14 border border-border bg-background group-hover:border-tactical group-hover:bg-tactical/5 transition-all">
              <Icon size={28} className="text-foreground transition-colors group-hover:text-tactical" />
            </div>

            <div>
              <h2 className="font-mono text-base font-bold text-foreground transition-colors group-hover:text-tactical">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            {/* Bottom tactical bar — animates in on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-tactical scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
