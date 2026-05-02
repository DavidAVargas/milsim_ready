import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platoon Lingo — Milsim West",
  description: "Roles, call signs, and field terms your PL will use. Learn them before the op.",
};


const FIELD_TERMS = [
  {
    term: "LACE Report",
    detail: "Liquids, Ammo, Casualties, Equipment. Your SL will ask for this to check your squad's status. Know your numbers.",
  },
  {
    term: "SALUTE Report",
    detail: "Size, Activity, Location, Unit, Time, Equipment. How you report enemy contact. Keep it fast and factual.",
  },
  {
    term: "FRAGO",
    detail: "Fragmentary Order. A quick update to the current mission — change of objective, new orders mid-op. Pay attention.",
  },
  {
    term: "WARNO",
    detail: "Warning Order. Advance notice that a mission is coming. Gives you time to prepare before the full order is issued.",
  },
  {
    term: "ROE",
    detail: "Rules of Engagement. The rules governing when and how you can engage the enemy. Know yours before the op starts.",
  },
  {
    term: "CCP",
    detail: "Casualty Collection Point. Your faction's respawn zone. Where you go when you're dead to drink an IV and get back in the fight.",
  },
  {
    term: "MEDEVAC",
    detail: "Medical Evacuation. Called when a participant needs to be moved to a medic or CCP urgently.",
  },
  {
    term: "OPORD",
    detail: "Operations Order. The full mission briefing — objectives, routes, timelines, call signs, frequencies. Issued before each mission.",
  },
  {
    term: "RON",
    detail: "Remain Overnight. When your element stays in a position through the night instead of returning to base.",
  },
  {
    term: "Hasty Defense",
    detail: "A quick defensive position set up on the move — not a full fortified position, just enough cover to hold ground temporarily.",
  },
];

export default function LingoPage() {
  return (
    <PageContainer>
      <Link
        href="/newbie/milsim-west"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
      >
        <ChevronLeft size={14} />
        BACK TO MILSIM WEST
      </Link>

      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// 04</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">PLATOON LINGO</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Your PL and SL will use these constantly. Learn them before the op — asking what "SL" means mid-contact is not a good look.
      </p>

      <div className="mt-12 flex flex-col gap-14">

        {/* Unit Structure */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            How It's Structured
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            From top to bottom — where you fit and who you report to.
          </p>

          <div className="flex flex-col gap-2">
            {[
              {
                level: "COMPANY",
                label: "The whole faction on the field",
                detail: "Everyone on your side. Commanded by the CO (cadre). You are one small part of this.",
                indent: 0,
              },
              {
                level: "PLATOON",
                label: "Your group — e.g. Platoon 1",
                detail: "Led by your PL. This is the unit you belong to for the entire event. You'll know your platoon number from your deployment orders.",
                indent: 1,
              },
              {
                level: "SQUAD",
                label: "Your smaller unit — e.g. Squad 4",
                detail: "A 9-man element within your platoon. Led by your SL. When you hear \"Platoon 1, Squad 4\" — that's your home. On the field when you get separated, you scream your number — \"ONE FOUR\" means Platoon 1, Squad 4. That's how your team finds you.",
                indent: 2,
              },
              {
                level: "TEAM",
                label: "Alpha, Bravo, or Charlie",
                detail: "Fire teams within your squad. Alpha is typically first in — they take the most contact. Bravo flanks. Charlie provides support or backup. Led by your ATL or BTL.",
                indent: 3,
              },
            ].map(({ level, label, detail, indent }) => (
              <div
                key={level}
                className="flex items-start gap-3 border border-border bg-card p-4"
                style={{ marginLeft: `${indent * 20}px` }}
              >
                <div className="shrink-0 w-24">
                  <span className="font-mono text-xs font-bold text-tactical">{level}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            Roles & Abbreviations
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Everyone on the field has a role. These are the ones you'll hear.{" "}
            <span className="font-semibold text-foreground">Cadre</span> = MSW staff. They lead, sleep, and fight alongside you the entire op.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { abbr: "CO", full: "Company Commander", cadre: true, detail: "Commands the entire company — everyone on your faction. You can talk to them if you need to.", indent: 0 },
              { abbr: "XO", full: "Executive Officer", cadre: true, detail: "Second in command of the company. Steps in when the CO needs support.", indent: 1 },
              { abbr: "1SG", full: "First Sergeant", cadre: true, detail: "Handles logistics, accountability, and the company CCP. If you're lost or have a problem, find the 1SG.", indent: 1 },
              { abbr: "PL", full: "Platoon Leader", cadre: false, detail: "Commands your platoon. When they give an order, you move. This is the person you'll hear the most from.", indent: 2 },
              { abbr: "PSG", full: "Platoon Sergeant", cadre: true, detail: "Supports the PL and steps in if the PL goes down. Manages ammo, water, and logistics within the platoon.", indent: 3 },
              { abbr: "RTO", full: "Radio Telephone Operator", cadre: false, detail: "The PL's radioman. Manages all communications, tracks call signs and frequencies, relays information up and down the chain.", indent: 3 },
              { abbr: "Medic", full: "Platoon Medic", cadre: false, detail: "Carries up to 30 IV bottles. Heals dead participants. One per platoon — do not waste their supplies.", indent: 3 },
              { abbr: "SL", full: "Squad Leader", cadre: false, detail: "Runs your squad. Receives orders from the PL and translates them into movement for your team. Your most direct point of contact.", indent: 4 },
              { abbr: "SFR", full: "Squad First Responder", cadre: false, detail: "One per squad. Carries up to 4 IV bottles. Your first option for a heal before going to the Platoon Medic or CCP.", indent: 4 },
              { abbr: "ATL / BTL", full: "Alpha / Bravo Team Leader", cadre: false, detail: "Leads the Alpha or Bravo fire team within your squad. Directly above the riflemen. If your SL is down, your TL takes over.", indent: 5 },
            ].map(({ abbr, full, cadre, detail, indent }) => (
              <div
                key={abbr}
                className="flex gap-4 border border-border bg-card p-4"
                style={{ marginLeft: `${indent * 16}px` }}
              >
                <div className="shrink-0 w-14 text-center">
                  <span className="font-mono text-base font-bold text-tactical leading-none">{abbr}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-foreground">{full}</p>
                    {cadre && (
                      <span className="font-mono text-xs text-muted-foreground border border-border px-1.5 py-0.5 leading-none">
                        CADRE
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call Signs */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            Call Signs
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Everyone on the radio uses a call sign, not their name. The pattern is simple once you know it.
          </p>
          <div className="flex flex-col gap-3">
            <div className="rounded border border-border bg-card p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">The pattern</p>
              <p>
                The number before = <span className="font-semibold text-foreground">platoon number</span>.
                The number after = <span className="font-semibold text-foreground">role</span>.
                So <span className="font-semibold text-foreground">16</span> = Platoon 1, Platoon Leader.{" "}
                <span className="font-semibold text-foreground">24</span> would be Platoon 2, Squad 4.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { sign: "X6", meaning: "Platoon Leader (X = platoon number)" },
                { sign: "X7", meaning: "Platoon Sergeant" },
                { sign: "X6R", meaning: "Platoon RTO (radioman)" },
                { sign: "X1 / X2 / X3", meaning: "Squad Leaders 1, 2, 3" },
                { sign: "X1A / X1B", meaning: "Alpha and Bravo Team Leaders, Squad 1" },
                { sign: "6", meaning: "Company Commander (CO)" },
                { sign: "7", meaning: "First Sergeant (1SG)" },
                { sign: "5", meaning: "Executive Officer (XO)" },
                { sign: "Sierra 1 / 2", meaning: "Sniper Teams" },
              ].map(({ sign, meaning }) => (
                <div key={sign} className="flex items-center gap-4 border border-border bg-card px-4 py-3">
                  <span className="font-mono text-sm font-bold text-tactical shrink-0 w-20">{sign}</span>
                  <span className="text-xs text-muted-foreground">{meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Field Terms */}
        <div>
          <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            Field Terms
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Words and reports you'll hear called out during the op.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {FIELD_TERMS.map(({ term, detail }) => (
              <div key={term} className="border border-border bg-card p-4">
                <p className="font-mono text-xs font-bold text-tactical">{term}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageContainer>
  );
}
