import Link from "next/link";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tactics 101 — Milsim West",
  description: "Basic movement and cover so you don't get your squad wiped in hour one.",
};

const REACT_TO_CONTACT = [
  { step: "01", label: "Get down", detail: "Drop immediately. Standing is how you get wiped. Get low and get behind something." },
  { step: "02", label: "Return fire", detail: "Shoot back in the direction of contact. You don't need a target — suppression buys your squad time to move." },
  { step: "03", label: "Communicate", detail: "Yell \"CONTACT\" and the direction — \"CONTACT NORTH\", \"CONTACT LEFT\". Your SL needs to know immediately." },
  { step: "04", label: "Wait for orders", detail: "Don't charge or flank on your own. Your SL will call the move. Stay put, stay low, keep suppressing until told otherwise." },
];

const SPACING_RULES = [
  { label: "5–10m between each person", detail: "This is combat spacing. One grenade has a 15ft kill radius — if you're stacked on your buddy, you both die. Spread out." },
  { label: "Never walk in a straight line", detail: "Single file on a trail is how your whole squad gets ambushed at once. Offset your spacing and use the terrain." },
  { label: "Don't cluster when stopped", detail: "When your element halts, face outward — everyone covers a different direction. This is 360 security. If everyone looks the same way, you have a blind side." },
  { label: "Keep eyes on the person in front", detail: "Don't lose visual on your element. If the person ahead disappears, stop and wait — don't wander off." },
];

const COVER_TYPES = [
  { type: "HARD COVER", examples: "Concrete walls, berms, trees, vehicles", detail: "Stops BBs. Get behind it. This is what actually saves you." },
  { type: "SOFT COVER", examples: "Bushes, tall grass, netting, fabric", detail: "Hides you but doesn't stop anything. BBs go right through. Don't mistake concealment for safety." },
];

export default function TacticsPage() {
  return (
    <PageContainer>
      <Link
        href="/newbie/milsim-west"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
      >
        <ChevronLeft size={14} />
        BACK TO MILSIM WEST
      </Link>

      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// 03</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">TACTICS 101</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        You don't need to be a tactician. You need to know enough to not get your squad killed. These are the basics that every first-timer should have locked before the op starts.
      </p>

      <div className="mt-12 flex flex-col gap-14">

        {/* Spacing */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            Combat Spacing
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            The most common first-timer mistake. Everyone bunches up and one grenade wipes the squad.
          </p>
          <div className="flex flex-col gap-2">
            {SPACING_RULES.map(({ label, detail }) => (
              <div key={label} className="flex items-start gap-4 border border-border bg-card p-4">
                <span className="mt-0.5 shrink-0 font-bold text-tactical text-sm leading-none">—</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cover vs Concealment */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            Cover vs Concealment
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            They are not the same thing. Mixing them up will get you killed.
          </p>
          <div className="flex flex-col gap-3">
            {COVER_TYPES.map(({ type, examples, detail }) => (
              <div key={type} className="border border-border bg-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-tactical">{type}</span>
                  <span className="font-mono text-xs text-muted-foreground">{examples}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
            <div className="flex items-start gap-3 border border-tactical/40 bg-tactical/5 px-4 py-3">
              <AlertTriangle size={14} className="mt-0.5 shrink-0 text-tactical" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Grenade rule:</span> Soft cover does not save you from grenades or rockets. Only solid cover counts. If a grenade lands near you and all you have is bushes, you're dead.
              </p>
            </div>
          </div>
        </div>

        {/* React to Contact */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            React to Contact
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            The moment you start taking fire, most new players freeze or run. Neither is correct. This is what you do.
          </p>
          <div className="flex flex-col gap-2">
            {REACT_TO_CONTACT.map(({ step, label, detail }) => (
              <div key={step} className="flex items-start gap-4 border border-border bg-card p-4">
                <span className="font-mono text-sm font-bold text-tactical shrink-0 mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bounding Overwatch */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            Bounding Overwatch
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            How you move under fire. One element suppresses while the other moves — then you switch.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { step: "01", label: "Element A suppresses", detail: "Lay down fire on the enemy position. You don't need hits — you need them keeping their heads down." },
              { step: "02", label: "Element B moves", detail: "While A is suppressing, B rushes to the next piece of cover. Short bursts — never run further than you can make it in a few seconds." },
              { step: "03", label: "B takes cover and suppresses", detail: "Once B is set and firing, A stops suppressing and bounds forward past B to the next position." },
              { step: "04", label: "Repeat", detail: "Keep leapfrogging forward. You're always covered — one element is always firing while the other moves." },
            ].map(({ step, label, detail }) => (
              <div key={step} className="flex items-start gap-4 border border-border bg-card p-4">
                <span className="font-mono text-sm font-bold text-tactical shrink-0 mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 border border-border bg-card px-4 py-3">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">In practice:</span> Your SL will call this. You'll hear "Alpha — move!" or "Bravo — suppress!" Listen and react fast. Don't think too hard about it, just do your job when called.
            </p>
          </div>
        </div>

        {/* L-Shape */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            The L-Shape
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            A classic ambush setup. When your element sets an ambush, this is often how it's positioned.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Alpha — the base of fire", detail: "Sets up facing the kill zone directly. When the enemy enters the kill zone, Alpha engages from the front, pinning them in place." },
              { label: "Bravo — the flank", detail: "Positioned perpendicular to Alpha, forming the \"L\". Once Alpha initiates, Bravo hits from the side. The enemy is now taking fire from two directions with nowhere to go." },
              { label: "The kill zone", detail: "The open area between Alpha and Bravo where the enemy is caught. Once they're in it and the ambush is initiated, they have no good options." },
            ].map(({ label, detail }) => (
              <div key={label} className="flex items-start gap-4 border border-border bg-card p-4">
                <span className="mt-0.5 shrink-0 font-bold text-tactical text-sm leading-none">—</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-start gap-3 border border-tactical/40 bg-tactical/5 px-4 py-3">
            <AlertTriangle size={14} className="mt-0.5 shrink-0 text-tactical" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Fratricide risk:</span> Make absolutely sure Alpha and Bravo are not in each other's line of fire. The L-shape only works if the two elements are shooting away from each other, not across.
            </p>
          </div>
        </div>

        {/* Sectors of Fire */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            Sectors of Fire
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Every person covers a direction. No blind sides.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Don't all shoot the same thing", detail: "When contact happens, the instinct is to all look and shoot in the same direction. That leaves your flanks and rear completely open for a second element to wipe you." },
              { label: "Your SL will assign sectors", detail: "\"Alpha, watch left.\" \"Bravo, cover the rear.\" When you're given a sector, own it. Don't drift toward where the action is — that's someone else's job." },
              { label: "If you're not assigned, ask", detail: "New to the squad? Ask your ATL or the person next to you: \"what's my sector?\" Don't just stand there looking at what everyone else is looking at." },
            ].map(({ label, detail }) => (
              <div key={label} className="flex items-start gap-4 border border-border bg-card p-4">
                <span className="mt-0.5 shrink-0 font-bold text-tactical text-sm leading-none">—</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hand Signals */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            Hand Signals
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Used when radio silence is needed or noise discipline is in effect. When you see a signal, pass it to the person behind you — that's how it travels down the line.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { signal: "Fist raised up", meaning: "Halt", detail: "Stop moving. Hold your position." },
              { signal: "Fist raised, no movement", meaning: "Freeze", detail: "Same as halt but tighter — don't move, don't make a sound. Enemy is close." },
              { signal: "One arm straight up, index finger pointing up", meaning: "Column / Single File", detail: "Get into a single file line. Used when terrain is tight or you need to minimize your footprint." },
              { signal: "Both arms out, hand rotating up and down alternating (pancake flip)", meaning: "Staggered Column", detail: "Offset your spacing left and right of the person in front of you, alternating sides. Standard patrol formation — more coverage, harder to wipe with one grenade." },
              { signal: "Two fingers pointed at eyes, then pointed in a direction", meaning: "Enemy spotted", detail: "I see the enemy — in that direction. Heads up, prepare to engage or take cover." },
              { signal: "Palm facing down, pushed downward", meaning: "Get down", detail: "Drop low immediately. No noise." },
              { signal: "Arm raised forward, sweeping motion", meaning: "Move out / Follow me", detail: "Let's go. Forward movement." },
            ].map(({ signal, meaning, detail }) => (
              <div key={meaning} className="flex gap-4 border border-border bg-card p-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-mono text-xs font-bold text-tactical">{meaning}</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground">{signal}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 border border-border bg-card px-4 py-3">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Pass it down:</span> When you see a signal, immediately repeat it for the person behind you. Don't assume they saw it. The whole point is that everyone gets the message without a word being said.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-12 border border-border bg-card p-5">
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-foreground mb-2">Bottom Line</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          You don't need to master all of this before day one. Spread out, get behind real cover, call contact when you see the enemy, and listen to your SL. The rest comes with reps. Most first-timers who struggle do so because they didn't do those four things — not because they didn't know the L-shape.
        </p>
      </div>
    </PageContainer>
  );
}
