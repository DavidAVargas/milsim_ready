import Link from "next/link";
import { ChevronLeft, ChevronRight, AlertTriangle, Clock, Mail, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before You Go — Milsim West",
  description: "Everything you need before arriving at a Milsim West event.",
};

const ARRIVAL_CHECKLIST = [
  "Printed deployment orders (sent via email — keep an eye on your inbox)",
  "Valid government-issued photo ID",
  "All red-highlighted gear from the TACSOP packing list",
  "Airsoft replica + magazines + BBs",
  "Radio + batteries",
  "Sleeping gear (sleeping bag, pad, tent or tarp)",
  "Food & water for the full op",
  "Red light flashlight (no white lights at night)",
  "Cash (some vendors on site)",
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
              MSW will send your deployment orders to the email you used to buy your ticket — sometimes weeks in advance, sometimes the day before. <span className="font-semibold text-foreground">Check your email and print them the moment they arrive.</span>
            </p>
            <p>
              Your orders contain your faction assignment, rules of engagement, and a gear checklist. All items highlighted in red on that list are <span className="font-semibold text-foreground">mandatory</span> — show up missing any of them and you will be turned away and told not to come back until you have everything.
            </p>
            <p>
              Items in black are recommended but optional. Don't stress those — focus on the red ones first.
            </p>
            <p>
              During the game, any leader or cadre can stop you at any time and ask to see your papers. If your gear check isn't signed off, you're out of the game — mid-op. Keep your orders on you.
            </p>
          </div>
        </div>

        {/* Arrival Time */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <Clock size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              When to Arrive
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              In-processing opens at <span className="font-semibold text-foreground">1400 (2:00 PM)</span> and closes at <span className="font-semibold text-foreground">1800 (6:00 PM)</span>.{" "}
              <span className="font-semibold text-foreground">Do not arrive before 1400</span> — the venue is private property.
            </p>
            <p>
              The game officially kicks off around <span className="font-semibold text-foreground">2200–0000 (10 PM–midnight)</span>, so you'll have several hours to get settled after check-in.
            </p>
            <p className="rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">First timer tip:</span> Arrive early — around 1400–1500. Use the extra time to set up your sleeping area, eat, hydrate, and mentally prep before the game starts. You don't want to be rushing through check-in and setting up camp in the dark right before op start.
            </p>
          </div>
        </div>

        {/* Check-in Process */}
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
                { step: "01", text: "Arrive and go directly to your assigned platoon area — don't set up camp first." },
                { step: "02", text: "Lay out your gear. A cadre (the admin or faction leader) will do your back check-in — they inspect all red-highlighted items from your orders and initial each one off." },
                { step: "03", text: "Once your gear check is signed off, head to chrono. Your replica must pass the FPS check to play." },
                { step: "04", text: "If you're running a BFA (Blank Firing Adapter), let the cadre know at back check-in — there's a separate process for blanks and they'll point you in the right direction." },
              ].map(({ step, text }) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-tactical shrink-0 mt-0.5">{step}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>

            {/* Links to other sections */}
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
              MSW does not allow DMRs. You're running a standard AEG. Check the specific event's orders for the exact FPS limit — it's typically around <span className="font-semibold text-foreground">400 FPS with 0.20g BBs</span>.
            </p>
            <p>
              If your replica shoots over the limit it doesn't play — period. Know your gun before you show up.
            </p>
          </div>
        </div>
      </div>

      {/* Packing checklist */}
      <div className="mt-12">
        <h2 className="mb-2 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
          // DAY-OF CHECKLIST
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          The essentials for arriving. For faction-specific gear and full loadout see the{" "}
          <Link href="/newbie/milsim-west/gear" className="text-tactical hover:underline">Gear Guide</Link>.
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
