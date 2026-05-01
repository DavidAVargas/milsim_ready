import Link from "next/link";
import { ChevronLeft, AlertTriangle, CheckCircle2, Package, Star } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gear Guide — Milsim West",
  description: "What you actually need for a Milsim West op. Required gear, what to carry on you, and the reality of packing for 40–72 hours.",
};

const REQUIRED_GEAR = [
  {
    item: "Uniform — correct faction camo",
    detail: "Matching top and bottom in your faction's approved pattern. NATO = Original Multicam only. RUSFOR = any Russian camo. Militia = US Woodland, solid green, or any RUSFOR camo. Wrong camo = turned away at the gate, no refund.",
  },
  {
    item: "Eye protection — full seal, ANSI rated",
    detail: "Must be ANSI Z87.1 rated and full seal (no gaps around the lens). On at all times — including while sleeping. This is the one item cadre takes most seriously.",
  },
  {
    item: "Load bearing equipment",
    detail: "Plate carrier, chest rig, or belt rig. Must have magazine pouches, an admin pouch, and your MSW tourniquet rubber-banded to the outside of your kit where it's visible and accessible.",
  },
  {
    item: "Primary replica + mags + battery + charger + sling",
    detail: "Correct replica for your faction. Fully charged battery. Bring your charger — you'll be on site for hours before the op starts. Mid-cap or standard magazines only (no box/drum mags unless you're running an LMG or MMG).",
  },
  {
    item: "2L of water minimum on your kit",
    detail: "Must be accessible from your load bearing equipment — not buried in your pack. You will drink this. Bring more than 2L total.",
  },
  {
    item: "Flashlight or headlamp with red lens mode",
    detail: "Red light preserves your night vision and doesn't blow your position. Must have this mode — white light only is not acceptable for a night op.",
  },
  {
    item: "Chemlights",
    detail: "Used for marking, signaling, and identifying friend from foe at night. Bring several. Your platoon will tell you what color to use for your faction.",
  },
  {
    item: "MSW Tourniquet (MSWTQ)",
    detail: "Issued to you at registration — do not lose it. Rubber-band it to your kit before the op starts, not pre-threaded through the tri-glide. That's for your buddy to do when they apply it.",
  },
  {
    item: "Printed deployment orders + photo ID",
    detail: "Both must be on your person at all times — not in your pack. Keep them in a ziplock bag. See the Before You Go page for full details.",
  },
  {
    item: "Medical card",
    detail: "In your left breast or shoulder pocket. Name, address, emergency contact, allergies, medical conditions. Cadre knows where to look — make it easy to find.",
  },
];

export default function GearPage() {
  return (
    <PageContainer>
      <Link
        href="/newbie/milsim-west"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
      >
        <ChevronLeft size={14} />
        BACK TO MILSIM WEST
      </Link>

      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// 02</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">GEAR GUIDE</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        A 40–72 hour op is not a weekend airsoft game. What you bring and how you carry it
        directly affects how long you last. Start with what's required, then keep it practical.
      </p>

      <div className="mt-12 flex flex-col gap-10">

        {/* Required Gear */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <AlertTriangle size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Required Gear — Bag Inspection
            </h2>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            These are the red-line items cadre checks before you can play. Missing any of them means you are not getting in.
          </p>
          <div className="flex flex-col gap-2">
            {REQUIRED_GEAR.map(({ item, detail }) => (
              <div key={item} className="flex items-start gap-3 border border-border bg-card p-4">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-tactical" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{item}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Keep On You */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              What to Keep On You
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              The TACSOP lists an assault pack with a full loadout. The reality is most people don't roll
              with a dedicated assault pack — your uniform pockets are bigger than you think and that's
              where most of your field essentials live.
            </p>
            <p>
              What you keep on you is personal, but the basics that make sense:{" "}
              <span className="font-semibold text-foreground">a snack or two</span> (protein bar, beef jerky),{" "}
              <span className="font-semibold text-foreground">any personal medications</span> you might need in the field,{" "}
              <span className="font-semibold text-foreground">a notebook and pen</span> for intel and orders,
              and a <span className="font-semibold text-foreground">poncho</span> that folds down small enough to fit in a cargo pocket.
              That's it. Quick access, no digging through a bag mid-contact.
            </p>
            <div className="rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">The point:</span> anything you might need fast goes on your person. Anything you can afford to not touch for a few hours goes in your pack.
            </div>
          </div>
        </div>

        {/* The Ruck */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <Package size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              The Ruck — Get a Good One
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Your ruck is not something you drop off at camp and forget about for 12 hours. You are
              moving with it. You're rucking terrain with it on your back, and at some events you'll be
              doing things like dismounting off a moving vehicle with it — so it needs to actually hold up.
            </p>
            <p>
              <span className="font-semibold text-foreground">Do not buy a cheap pack.</span> A Chinese knockoff ruck
              will break on you mid-event — seams blow out, straps fail, frames collapse. It has happened.
              Cadre have actually inspected packs at check-in to make sure they're structurally sound enough
              for what the op demands. Get a military surplus pack or a reputable brand.
              You don't have to spend a fortune — surplus stores carry solid options.
            </p>
            <p>
              Keep it light enough to actually move in. The TACSOP lists a lot of items for your ruck
              and most of them are worth bringing — but pack smart. You need to be able to grab it and go.
              At 4 AM when your platoon is moving out, you don't have time to break down a tent and reorganize
              your kit. Sleep setup should pack in under two minutes.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Sleeping bag + pad", detail: "Rated for the expected temps. Cold nights after sweating all day are brutal — don't underpack your sleep system." },
                { label: "Poncho or bivy", detail: "Rain cover. If your sleeping gear gets soaked you're done. Keep it waterproofed." },
                { label: "Food and water for two days", detail: "Don't rely on resupply. Be self-sufficient. Eat before the op starts — don't burn through your field rations waiting around." },
                { label: "Cold/wet weather layer", detail: "Even if the forecast looks clear. Conditions change and you'll be stationary for long stretches at night." },
                { label: "Extra socks + dry clothes", detail: "Bring them. You probably won't have time to change as often as you'd like — but when you do get a window, dry socks make a real difference." },
                { label: "Hygiene basics", detail: "Toothbrush, deodorant, hand soap. Reality is you might not use them every day. Bring them anyway for when you get the chance." },
                { label: "Replica repair kit", detail: "Spare fuses, Allen keys, speed loader, anything specific to your AEG. A broken replica mid-op with nothing to fix it is a long night." },
                { label: "2x heavy-duty garbage bags", detail: "MSW requires you to police call any area you rest in. Pack in, pack out." },
              ].map(({ label, detail }) => (
                <div key={label} className="flex items-start gap-3 border border-border bg-card p-4">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-tactical" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Field-Tested Picks */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <Star size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Field-Tested Picks
            </h2>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            Not required. Just stuff that actually makes a difference once you're 20 hours in.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              {
                label: "Electric hand warmer",
                detail: "Cold nights in the field hit different when you've been sweating all day and suddenly stop moving. An electric hand warmer tucked into your kit keeps your hands functional and takes the edge off between movements. Recharges via USB — bring a power bank.",
              },
            ].map(({ label, detail }) => (
              <div key={label} className="rounded border border-border bg-card p-4">
                <p className="font-semibold text-foreground text-sm">{label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageContainer>
  );
}
