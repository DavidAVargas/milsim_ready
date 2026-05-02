import Link from "next/link";
import { ChevronLeft, AlertTriangle, CheckCircle2, Package, Star, User } from "lucide-react";
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

const RUCK_ITEMS = [
  { label: "Sleeping bag + pad", detail: "Rated for the expected temps. Cold nights after sweating all day are brutal — don't underpack your sleep system." },
  { label: "Poncho or bivy", detail: "Rain cover. If your sleeping gear gets soaked you're done. Keep it waterproofed." },
  { label: "Food and water for two days", detail: "Don't rely on resupply. Be self-sufficient. Eat before the op starts — don't burn through your field rations waiting around." },
  { label: "Cold/wet weather layer", detail: "Even if the forecast looks clear. Conditions change and you'll be stationary for long stretches at night." },
  { label: "Extra socks + dry clothes", detail: "Bring them. You probably won't have time to change as often as you'd like — but when you do get a window, dry socks make a real difference." },
  { label: "Hygiene basics", detail: "Toothbrush, deodorant, hand soap. Reality is you might not use them every day. Bring them anyway for when you get the chance." },
  { label: "Replica repair kit", detail: "Spare fuses, Allen keys, speed loader, anything specific to your AEG. A broken replica mid-op with nothing to fix it is a long night." },
  { label: "2x heavy-duty garbage bags", detail: "MSW requires you to police call any area you rest in. Pack in, pack out." },
  { label: "Bug spray", detail: "Easy to forget, annoying to be without. You're in the field for days — bugs are part of it." },
];

const FIELD_PICKS = [
  {
    label: "Electric hand warmers — bring two",
    detail: "I bring two — one for my hands, one to tuck into my chest or sleeping bag. If you can keep your core warm, your whole body stays warm. Small, compact, rechargeable via USB. Bring a power bank.",
  },
  {
    label: "Waterproof bivy or sleeping bag cover",
    detail: "This is the one thing I wish I had on my first op. Rain puddles up and stays until the sun comes out. A bivy keeps you dry without setting up a shelter — and on the first night you're usually only getting 2–3 hours before you're moving out anyway.",
  },
  {
    label: "Two ponchos minimum",
    detail: "One covers your gear, one covers you. I use the button-clip kind that connect together. On fast nights when I know I'm moving out early, two ponchos thrown over me is the move — quick in, quick out.",
  },
  {
    label: "Gore-Tex or waterproof jacket",
    detail: "A poncho helps but it doesn't cover everything. I bring a Gore-Tex jacket to block wind and fill the gaps — it also doubles as an extra layer under my hoodie on cold nights. Carries on me or sits in my ruck either way.",
  },
  {
    label: "Hoodie or fleece — faction colors",
    detail: "Even desert events get brutally cold after dark when you're wet and not moving. I've seen four people quit at 2 AM on one op just from the cold. A mid-layer in your faction's color scheme is not optional — it's what keeps you in the fight.",
  },
  {
    label: "Wool socks (x3) + one waterproof pair",
    detail: "I bring three pairs of wool or outdoor-rated socks — not cotton, cotton stays wet. And at least one pair of waterproof hiking socks. On day two when my boots were soaked, those waterproof socks kept my feet completely dry inside the wet boot. Game changer.",
  },
  {
    label: "Two pairs of gloves",
    detail: "One field pair that's going to get wet and dirty, and one clean dry pair to rotate into at night or when the first pair is soaked. I learned this the hard way — running bare-handed out there is miserable.",
  },
  {
    label: "Three batteries for your replica",
    detail: "I bring three. One is none, two is one. My main battery failed mid-op once and my spare saved me — but I kept thinking what if that one dies too. Three means I always have something charged and ready. It's my primary weapon.",
  },
  {
    label: "Military canteen",
    detail: "I switched from a hydration pack on my vest after realizing how uncomfortable it was once my ruck went on — the pack behind my vest plus the ruck on my back was brutal. My military canteen clips to my belt or ruck instead. More flexible, much less annoying. I keep 20+ oz of water with electrolytes on me at all times.",
  },
  {
    label: "MREs over camping/freeze-dried food",
    detail: "I made the mistake of bringing camping food on my first op. Boiling water, soaking the food, eating — that whole process took 30–45 minutes. An MRE is a full meal, snack, and drink in under 30 with no setup. I switched to MREs and haven't looked back.",
  },
  {
    label: "Electrolyte packs — non-negotiable",
    detail: "I was drinking water on my first op and still hallucinating — seeing people behind trees that weren't there, hearing sounds that weren't happening, not even realizing it was happening. Water alone isn't enough. I use LMNT now but Liquid IV works too. Drop one in your water every time you refill.",
  },
  {
    label: "Mini Cliff bars + GoGo Squeez applesauce",
    detail: "For mornings when there's no time for an MRE. I keep mini Cliff bars in my cargo pockets — easier to eat fast than full-size. GoGo Squeez active applesauce has electrolytes built in, so it's a quick snack and hydration hit at the same time. Some mornings this is literally my breakfast.",
  },
  {
    label: "Caffeine — coffee and/or caffeine pouches",
    detail: "Hot coffee in the morning when it's cold is both energy and a morale boost for me — warms me up and gets me going at the same time. When there's no time to brew I use caffeine pouches. If you're 18+ and use nicotine, patches work the same way. Don't overdo it — just enough to take the edge off.",
  },
  {
    label: "Morale items — gum, candy, something you enjoy",
    detail: "MREs come with gum — I save mine for when morale is lowest, usually right before a push. I bring extra and share with my squad. Sharing something small with your team genuinely helps. Talk to your teammates on downtime. Enjoy it — we're not Delta Force.",
  },
  {
    label: "Face mask / lower face protection",
    detail: "I always keep my mask on. I've seen people get teeth shot out at events — it happens. A lower face mask or mesh protects your face the same way eye pro protects your eyes. You can fix a tooth but it's better to just not.",
  },
  {
    label: "Vitamin C and immune support",
    detail: "Pushing my body this hard tanks my immune system fast — I start getting a stuffy nose and feeling run down. I take immune support before the event and bring some along. Small thing, easy to forget, but I notice the difference.",
  },
  {
    label: "Garmin watch",
    detail: "I bring mine every op. I use it to track rucks, for the red torch at night, and for live tracking so my family knows I'm alive when there's no cell signal at the venue. Any watch works — but if you have a Garmin, bring it.",
  },
  {
    label: "Compression underwear + hygiene basics",
    detail: "You are not showering for three days and you're moving constantly. Regular cotton underwear will wreck you — chafing is a real problem most first-timers don't think about until it's too late. I wear Under Armour compression boxer briefs, the longer kind that reach the thighs. Breathable, moisture-wicking, no issues. I also pack dude wipes for a quick clean-up and baby powder for chafe prevention. Massive difference by day two.",
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

      <div className="mt-12 flex flex-col gap-14">

        {/* Required Gear */}
        <div id="required">
          <div className="mb-1 flex items-center gap-3">
            <AlertTriangle size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Required Gear — Bag Inspection
            </h2>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            These are the red-line items cadre checks before you can play. Missing any of them means you are not getting in.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
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
        <div id="on-you">
          <div className="mb-1 flex items-center gap-3">
            <User size={16} className="shrink-0 text-tactical" />
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
              and a <span className="font-semibold text-foreground">poncho</span> that folds small enough to fit in a cargo pocket.
              Quick access, no digging through a bag mid-contact.
            </p>
            <div className="rounded border border-border bg-card px-3 py-2">
              <span className="font-semibold text-foreground">The rule:</span> anything you might need fast goes on your person. Anything you can afford to not touch for a few hours goes in your pack.
            </div>
          </div>
        </div>

        {/* The Ruck */}
        <div id="ruck">
          <div className="mb-1 flex items-center gap-3">
            <Package size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              The Ruck — Get a Good One
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Your ruck is not something you drop off at camp and forget. You are moving with it —
              rucking terrain, and at some events dismounting off a moving vehicle with it on your back.
              It needs to hold up.
            </p>
            <p>
              <span className="font-semibold text-foreground">Do not buy a cheap pack.</span> A knockoff ruck
              will blow out mid-event — seams fail, straps go, frames collapse. Cadre have actually inspected
              packs at check-in for structural integrity. Get military surplus or a reputable brand.
              Surplus stores are your best value.
            </p>
            <p>
              Pack smart and pack fast. At 4 AM when your platoon moves out you don't have time to break down a tent.
              Your sleep setup should pack in under two minutes.
            </p>
            <div className="grid gap-2 sm:grid-cols-2 sm:grid-cols-3">
              {RUCK_ITEMS.map(({ label, detail }) => (
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
        <div id="field-picks">
          <div className="mb-1 flex items-center gap-3">
            <Star size={16} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Field-Tested Picks
            </h2>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            Not required — this is what I personally bring and swear by. Stuff that made a real difference once I was 20 hours in and the wheels started coming off.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {FIELD_PICKS.map(({ label, detail }) => (
              <div key={label} className="rounded border border-border bg-card p-4">
                <p className="font-semibold text-foreground text-sm">{label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground mb-1">Before the op: carb load</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              The night before or the morning of, eat a real carb-heavy meal — bread, pizza, burgers, whatever works. You are going to burn through carbs at a rate way above normal. Loading up beforehand means your body already has fuel in reserve when the op starts and you don't have time to eat. It makes a noticeable difference in how long you last before hitting the wall.
            </p>
          </div>
        </div>

      </div>
    </PageContainer>
  );
}
