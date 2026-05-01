import Link from "next/link";
import { ChevronLeft, AlertTriangle, CheckCircle2, Backpack, Package, Star } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gear Guide — Milsim West",
  description: "What you actually need for a Milsim West op. Required gear, assault pack, ruck, and field-tested recommendations.",
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
    detail: "Must be accessible from your load bearing equipment — not buried in your ruck. You will drink this. Bring more than 2L total.",
  },
  {
    item: "Flashlight or headlamp with red lens mode",
    detail: "Red light preserves your night vision and doesn't blow your position. Must have this mode — white light only is not acceptable for a night op.",
  },
  {
    item: "Chemlights",
    detail: "Used for marking, signaling, and IFF (identifying friend from foe) at night. Bring several. Your platoon will tell you what color to use for your faction.",
  },
  {
    item: "MSW Tourniquet (MSWTQ)",
    detail: "Issued to you at registration — do not lose it. Rubber-band it to your kit before the op starts, not pre-threaded through the tri-glide. That's for your buddy to do when they apply it.",
  },
  {
    item: "Printed deployment orders + photo ID",
    detail: "Both must be on your person at all times during the event — not in your ruck. Keep them in a ziplock bag. See the Before You Go page for full details.",
  },
  {
    item: "Medical card",
    detail: "In your left breast or shoulder pocket. Name, address, emergency contact, allergies, medical conditions. Cadre knows where to look — make it easy to find.",
  },
];

const ASSAULT_PACK = [
  { item: "Spare chemlights", detail: "You'll go through them faster than you think, especially on night ops." },
  { item: "1x MRE", detail: "One meal ready to eat for the field. Don't eat it before the op starts." },
  { item: "Spare batteries", detail: "Radio, AEG, flashlight, optic. All of them. Dead batteries mid-op are a squad problem." },
  { item: "Spare socks + t-shirt", detail: "Wet feet wreck you over 24+ hours. One dry pair changes everything." },
  { item: "10ft of 550 cord", detail: "Paracord. You'll find a use for it." },
  { item: "Small roll of duct tape", detail: "Gear breaks. Tape fixes it temporarily until you can get back to your ruck." },
  { item: "Emergency cold/wet weather layer", detail: "One compressible layer you can throw on fast if conditions turn." },
];

const RUCK = [
  { item: "Sleeping bag + sleeping pad", detail: "Rated for the expected temps. Don't underestimate how cold nights get in the field, especially after sweating all day." },
  { item: "Poncho or bivy", detail: "Rain cover for your sleeping setup. Wet sleep gear = miserable op." },
  { item: "Food and water for two days", detail: "Don't rely on resupply. Bring enough to be self-sufficient for the full event." },
  { item: "Cold/wet weather gear", detail: "Full set — jacket, pants, gloves, hat. Pack it even if the forecast looks clear." },
  { item: "3x pairs of socks + extra underwear + t-shirts", detail: "The TACSOP specifically calls out three pairs of socks. Take that seriously." },
  { item: "Personal hygiene kit", detail: "Toothbrush, toothpaste, deodorant, hand soap, towel. You're out there for days." },
  { item: "Personal medications", detail: "Any prescription meds you need. Don't leave these in your car." },
  { item: "2x large heavy-duty garbage bags", detail: "Pack in, pack out. MSW requires you to police call any area you rest in." },
  { item: "Replica repair kit", detail: "Spare fuses, Allen keys, speed loader, anything specific to your AEG. A broken replica you can't fix is a long night." },
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
        A 40–72 hour op is not a weekend airsoft game. What you bring — and how you pack it — directly affects how long you last. Start with the required gear and build from there.
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

        {/* Assault Pack */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <Backpack size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Assault Pack — On You During the Op
            </h2>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            Your assault pack goes with you into the field. Keep it light enough to move in but stocked enough to sustain yourself between objectives.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {ASSAULT_PACK.map(({ item, detail }) => (
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

        {/* Ruck */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <Package size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Rucksack — Your Overnight Kit
            </h2>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            Your ruck stays at your squad's bivouac or cache point — not on your back during every movement. Pack it like you won't see it again for 12 hours.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {RUCK.map(({ item, detail }) => (
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

        {/* Personal Recommendations */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <Star size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Field-Tested Picks
            </h2>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            Not required — just stuff that actually makes a difference once you're 20 hours in.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              {
                label: "Electric hand warmer",
                detail: "Cold nights in the field hit different when you've been sweating all day and suddenly stop moving. An electric hand warmer you can tuck into your kit keeps your hands functional and takes the edge off between movements. Recharges via USB — bring a power bank.",
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
