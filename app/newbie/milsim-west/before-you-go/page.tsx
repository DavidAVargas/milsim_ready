import Link from "next/link";
import { ChevronLeft, ChevronRight, AlertTriangle, Clock, Mail, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before You Go — Milsim West",
  description: "Everything you need before arriving at a Milsim West event.",
};

const ARRIVAL_CHECKLIST = [
  "Printed deployment orders (in a ziplock bag — keep them dry)",
  "Valid government-issued photo ID",
  "All red-highlighted gear from your deployment orders",
  "Airsoft replica + magazines (no BBs — provided at the event)",
  "Red light flashlight (no white lights at night)",
  "Cash (~$50 for patches and miscellaneous)",
  "Personal medications",
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
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">BEFORE YOU GO</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Most newbies show up unprepared and spend the first few hours scrambling.
        Read this before you leave the house.
      </p>

      {/* Critical warning */}
      <div className="mt-8 flex items-start gap-3 border border-tactical/40 bg-tactical/5 p-4">
        <AlertTriangle size={16} className="mt-0.5 shrink-0 text-tactical" />
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">No deployment orders = no entry.</span>{" "}
          MSW will not have your orders on hand. If you don't print them and bring them, you are not getting in — no exceptions.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-6">

        {/* Deployment Orders */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <Mail size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Deployment Orders
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              MSW will send your deployment orders to the email you used to buy your ticket — sometimes weeks in advance, sometimes the day before.{" "}
              <span className="font-semibold text-foreground">Check your email and print them the moment they arrive.</span>
            </p>
            <p>
              Your orders are a printed document with the event name, address, and a checklist at the bottom. That checklist is what the cadre uses during back check-in — they go through each item and initial it off. You need every red item on that list checked and signed before you can play.
            </p>
            <p>
              During the game, any leader or cadre can stop you at any time and ask to see your orders. If your check isn't signed off or your paper is gone, you're out mid-op. Keep them on you at all times.
            </p>
            <div className="mt-1 rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">First timer tip:</span> Put your deployment orders in a ziplock sandwich bag before you leave. Rain, sweat, river crossings — anything can destroy paper out in the field. If a leader asks for your orders and the paper is destroyed, you're getting kicked. Keep them dry.
            </div>
          </div>
        </div>

        {/* Check-in Process — intentionally before When to Arrive */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <MapPin size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Check-In Process
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Before the event, join the <span className="font-semibold text-foreground">MSW Facebook group for your faction</span>. Your platoon assignment will be posted there — know it before you arrive.
            </p>
            <ol className="flex flex-col gap-3">
              {[
                {
                  step: "01",
                  text: "When you arrive, go directly to your assigned platoon area. Do not set up camp — you are not camping at the spawn or check-in area.",
                },
                {
                  step: "02",
                  text: "Find the bag check-in area. There will be a group of people with a cadre calling out items — that's where you lay your gear out for inspection, not just where you lined up with your platoon.",
                },
                {
                  step: "03",
                  text: "The cadre goes through all the red-highlighted items and initials them off on your orders. Once everything is checked, you're cleared.",
                },
                {
                  step: "04",
                  text: "Head to chrono. Your replica must pass the FPS check to play.",
                },
                {
                  step: "05",
                  text: "Running a BFA (Blank Firing Adapter)? Let the cadre know at back check-in — there's a separate process and they'll point you in the right direction.",
                },
              ].map(({ step, text }) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-tactical shrink-0 mt-0.5">{step}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/newbie/milsim-west/gear"
                className="inline-flex items-center gap-1 font-mono text-xs tracking-widest uppercase text-tactical hover:underline"
              >
                SEE GEAR GUIDE <ChevronRight size={11} />
              </Link>
              <Link
                href="/newbie/milsim-west/factions"
                className="inline-flex items-center gap-1 font-mono text-xs tracking-widest uppercase text-tactical hover:underline"
              >
                SEE FACTIONS <ChevronRight size={11} />
              </Link>
            </div>
          </div>
        </div>

        {/* When to Arrive */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <Clock size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              When to Arrive
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              In-processing opens at <span className="font-semibold text-foreground">1400 (2:00 PM)</span> and closes at{" "}
              <span className="font-semibold text-foreground">1800 (6:00 PM)</span>.{" "}
              <span className="font-semibold text-foreground">Do not arrive before 1400</span> — the venue is private property.
            </p>
            <p>
              The game kicks off around <span className="font-semibold text-foreground">2200–0000 (10 PM – midnight)</span>. Be prepared — you could be up all night, which is pretty much a full 24 hours on your feet by the time the game is over.
            </p>
            <div className="rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">First timer tip:</span> Arrive early around 1400–1500. After check-in, eat, hydrate, talk to your platoon — and if there's downtime, take a nap. Seriously. You're going to need it. Alternatively, if you're not far from the venue, arriving a little later gives you more time to rest at home before the long night ahead.
            </div>
            <div className="rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">Bonus tip:</span> Bring a separate water bottle and snacks that are NOT part of your game gear. You'll be on site for several hours before the game even starts — don't burn through your field rations just sitting around waiting. Eat before you go and keep your game food and water sealed for the actual op.
            </div>
          </div>
        </div>

        {/* Chrono */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Chrono
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Standard AEGs follow the same rules as any airsoft field —{" "}
              <span className="font-semibold text-foreground">under 400 FPS</span>. Check your specific event's orders for the exact limit.
            </p>
            <div className="flex items-start gap-3 rounded border border-tactical/40 bg-tactical/5 px-3 py-2">
              <AlertTriangle size={14} className="mt-0.5 shrink-0 text-tactical" />
              <p>
                <span className="font-semibold text-foreground">Do not bring your own BBs.</span>{" "}
                BBs are provided at the event. Leave yours at home.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Packing checklist */}
      <div className="mt-12">
        <h2 className="mb-2 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
          // DAY-OF CHECKLIST
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          The essentials for arriving. For full loadout and faction-specific gear see the{" "}
          <Link href="/newbie/milsim-west/gear" className="text-tactical hover:underline">
            Gear Guide
          </Link>.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {ARRIVAL_CHECKLIST.map((item) => (
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
