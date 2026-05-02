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
    detail: "Matching top and bottom in your faction's approved pattern. NATO = Original Multicam only. RUSFOR = any Russian camo. Militia = US Woodland, solid green, or any RUSFOR camo. Wrong camo = turned away at the gate, no refund. Includes top, t-shirt, trousers with belt, and boots.",
  },
  {
    item: "3x pairs of socks",
    detail: "Three pairs minimum — this is a red-line checked item. Wool or outdoor-rated socks, not cotton.",
  },
  {
    item: "Eye protection — full seal, ANSI rated",
    detail: "Must be ANSI Z87.1 rated and full seal (no gaps around the lens). On at all times — including while sleeping. This is the one item cadre takes most seriously.",
  },
  {
    item: "Primary replica + mags + battery + charger + sling",
    detail: "Correct replica for your faction. Fully charged battery. Bring your charger — you'll be on site for hours before the op starts. Mid-cap or standard magazines only (no box/drum mags unless you're running an LMG or MMG).",
  },
  {
    item: "Flashlight or headlamp with red lens mode — you cannot play without this",
    detail: "Red light is not optional. You cannot be on the field at night without one — cadre checks for it. Any red light works. Personally I recommend bringing two — someone on your team will forget theirs and you'll be glad you have a backup.",
  },
  {
    item: "Printed deployment orders + photo ID",
    detail: "Both must be on your person at all times — not in your pack. Keep them in a ziplock bag. See the Before You Go page for full details.",
  },
  {
    item: "Medical card",
    detail: "In your left breast or shoulder pocket. Name, allergies, major medical conditions, current medications, and emergency contact info. Cadre knows where to look — make it easy to find.",
  },
  {
    item: "Notepad and pen or pencil",
    detail: "For writing down orders, intel, frequencies, and call signs during the op.",
  },
  {
    item: "Wristwatch",
    detail: "Required to keep accurate track of time and the op schedule.",
  },
  {
    item: "Radio — FRS/GMRS (leadership only)",
    detail: "Required for Platoon Leaders, Platoon Sergeants, Squad Leaders, and Team Leaders. If you're not in a leadership role you don't need one, but your leaders do.",
  },
  {
    item: "Sleeping bag",
    detail: "Required at bag inspection. See the ruck section below for what kind to get.",
  },
  {
    item: "Food and water for two days",
    detail: "Must be able to sustain yourself for the full event. Don't rely on resupply.",
  },
  {
    item: "Cold/wet weather gear",
    detail: "Checked at bag inspection. Required regardless of forecast — cadre enforces this.",
  },
  {
    item: "2x heavy-duty garbage bags",
    detail: "MSW requires you to police call any area you rest in. Pack in, pack out.",
  },
];

const RUCK_ITEMS = [
  { label: "Sleeping bag — get a good one", detail: "Rated for cold weather even if the event is in a warm climate. Nights get freezing, especially when you're wet and exhausted. A quality bag also works in the heat — you can sleep on top of it. Don't cheap out on this." },
  { label: "Sleeping pad — thermal rated", detail: "You lose most body heat through the ground. A cheap pad without thermal insulation will leave you freezing from below even with a good bag. Get off the cold floor." },
  { label: "Tarp + poncho + bivy", detail: "All three serve a purpose. A roll tarp (body-length, OCP if possible) goes on the ground under your pad to keep it off dirt and bugs. Your bivy or sleeping bag cover goes around your sleeping bag for weatherproofing. Ponchos cover you and your gear on fast nights when there's no time for a full setup." },
  { label: "Extra clothes", detail: "At least one extra combat shirt — changing your shirt when you get a window makes a real difference. An extra pair of pants is nice but not necessary, you usually won't change them." },
  { label: "Hygiene basics", detail: "Toothbrush, deodorant, hand soap. Reality is you might not use them every day. Bring them anyway for when you get the chance." },
  { label: "Replica repair kit", detail: "Spare fuses, Allen keys, speed loader, anything specific to your AEG. A broken replica mid-op with nothing to fix it is a long night." },
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
    label: "Electrolyte packs — this is a must, not a suggestion",
    detail: "Drinking water by itself is not hydrating you. You must have electrolytes. I was drinking water constantly on my first op and still hallucinating — seeing people hiding behind trees that weren't there, hearing sounds that weren't happening. The dangerous part is you don't realize it's happening. There's no warning. It just starts and you don't even know when it began. I only figured it out when I noticed things that made no sense and started connecting the dots. Every time you refill your water, put an electrolyte packet in. LMNT, Liquid IV, anything. You are pushing your body way past its normal limits — water alone will not keep up with that.",
  },
  {
    label: "Mini Cliff bars + GoGo Squeez applesauce",
    detail: "For mornings when there's no time for an MRE. I keep mini Cliff bars in my cargo pockets — easier to eat fast than full-size, and gives you some protein. GoGo Squeez active applesauce has electrolytes built in, quick squeeze and done. Some mornings this is literally my breakfast. The goal is food you can eat in 60 seconds without stopping or needing water. Think like an ultra marathon runner — honey packets, Stroopwafels, honey energy chews, crackers with peanut butter packets, fruit strips. Soft, fast, and calorie-dense. Whatever works for you.",
  },
  {
    label: "Caffeine — camping coffee + caffeine pouches",
    detail: "When I have time in the morning I make coffee with camping coffee pouches — boil water, pour it through the pouch, done. It warms you up and gets you going, especially on cold mornings. When there's no time, I use nicotine-free caffeine pouches — 80mg of caffeine, mint flavored, which also helps with hygiene. If you're 21+ and use nicotine, pouches or patches work too. Don't overdo it — just enough to take the edge off when you need it.",
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
    detail: "Pushing this hard tanks your immune system fast. I start getting stuffy and run down when I overexert myself. If that happens to you out there, you're not alone — don't feel discouraged, you can still push through it. Take immune support before the event and bring some along to keep yourself going. Small thing, easy to forget.",
  },
  {
    label: "Garmin watch",
    detail: "I bring mine every op. I use it to track rucks, for the red torch at night, and for live tracking so my family knows I'm alive when there's no cell signal at the venue. Any watch works — but if you have a Garmin, bring it.",
  },
  {
    label: "Compression underwear + hygiene basics",
    detail: "You are not showering for three days and you're moving constantly. Regular cotton underwear will wreck you — chafing is a real problem most first-timers don't think about until it's too late. I wear Under Armour compression boxer briefs, the longer kind that reach the thighs. Breathable, moisture-wicking, no issues. I also pack dude wipes for a quick clean-up and baby powder for chafe prevention. Massive difference by day two.",
  },
  {
    label: "Waterproof bag for your clothes and sleep system — this is a must",
    detail: "Pack your sleeping bag and your sleep system in one garbage bag, and your extra clothes, socks, and hoodie in another. Your ruck can sit under a tree in the rain for hours — even with a rain cover, moisture comes up from the ground. If your sleeping bag and dry clothes are soaked, you have nothing. I bring the required 2 garbage bags for trash plus 2 more specifically for waterproofing my gear inside my ruck. Everything that needs to stay dry gets sealed before it goes in the pack.",
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
              Some people do run an assault pack and that's fine — it's optional. But personally I don't,
              and here's why: your uniform cargo pockets are bigger than you think and they cover everything
              you actually need fast access to. A snack or two, personal meds, notebook and pen, a poncho
              that folds down small — that's it. No bag, no extra weight.
            </p>
            <p>
              The other thing to keep in mind is that when you're down, the enemy can approach and ask
              permission to search you. If they do, they can take loose food, ammo, and snacks off your person.
              The less extra stuff you're carrying, the less you're handing over. Less weight also means
              more mobility — especially when you're rucking most of the time anyway. Save the energy for
              the actual movement.
            </p>
            <div className="rounded border border-border bg-card px-3 py-2">
              <span className="font-semibold text-foreground">The rule:</span> anything you might need fast goes on your person. Anything you can afford to not touch for a few hours goes in your ruck. If you have more to carry than your pockets fit, an assault pack is a valid option — just know the tradeoffs.
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
              Your ruck is not something you drop off at camp and forget. You are rucking terrain with it
              and at some events the truck you're on will be moving and you have to kick your ruck off the
              vehicle onto the ground — it hits hard, it tumbles, it takes real abuse. You jump off separately
              with your vest and kit on you. The bag needs to survive that.
            </p>
            <p>
              <span className="font-semibold text-foreground">Do not buy a cheap pack.</span> I bought a knockoff
              ruck for my first event and it broke on the second ruck — seams blew out, it was done. Cadre
              have actually inspected packs at check-in for structural integrity because of exactly this.
              Get military surplus or a reputable brand. Surplus stores are your best value.
            </p>
            <div className="flex items-start gap-3 rounded border border-tactical/40 bg-tactical/5 px-4 py-3">
              <AlertTriangle size={14} className="mt-0.5 shrink-0 text-tactical" />
              <p className="text-sm leading-relaxed">
                <span className="font-semibold text-foreground">You are not getting 8 hours of sleep.</span>{" "}
                Sleeping at MSW comes in quick bursts — the first night is usually a short nap, maybe a couple
                hours, and you're moving before you've really settled in. Do not set up a full tent system
                expecting to sleep through the night. Have a Plan B sleep setup you can throw together and
                break down in under two minutes. The second day usually gives you a longer rest window where
                you can actually use your full sleep system — but the first night, keep it fast.
              </p>
            </div>
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
