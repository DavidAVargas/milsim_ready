import Link from "next/link";
import { ChevronRight, ChevronLeft, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newbie Guide — MILSIM",
  description: "Everything a first-timer needs before stepping onto the field.",
};

const ORGS = [
  {
    slug: "milsim-west",
    name: "Milsim West",
    description:
      "The full breakdown for MSW events — gear, tactics, lingo, TACSOP simplified, and everything to do before you show up.",
    available: true,
    tag: "ATTENDED",
  },
  {
    slug: "american-milsim",
    name: "American Milsim",
    description:
      "Haven't attended yet. Guide coming once I've got boots-on-ground experience to back it up.",
    available: false,
    tag: "COMING SOON",
  },
];

export default function NewbiePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {/* Back button */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
      >
        <ChevronLeft size={14} />
        BACK TO HOME
      </Link>

      {/* Header */}
      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">
        // NEWBIE GUIDE
      </p>
      <h1 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        PICK YOUR OP
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Different orgs run different ops. Each one has its own rules, culture,
        and gear requirements. Pick the one you&apos;re attending and get the
        full breakdown.
      </p>

      {/* Org cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {ORGS.map((org) =>
          org.available ? (
            <Link
              key={org.slug}
              href={`/newbie/${org.slug}`}
              className="group relative flex flex-col justify-between border border-border bg-card p-6 transition-colors hover:border-tactical"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest uppercase text-tactical">
                    {org.tag}
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-tactical"
                  />
                </div>
                <h2 className="font-mono text-xl font-bold text-foreground">
                  {org.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {org.description}
                </p>
              </div>
            </Link>
          ) : (
            <div
              key={org.slug}
              className="relative flex flex-col justify-between border border-border bg-card p-6 opacity-50"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                    {org.tag}
                  </span>
                  <Lock size={16} className="text-muted-foreground" />
                </div>
                <h2 className="font-mono text-xl font-bold text-foreground">
                  {org.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {org.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
