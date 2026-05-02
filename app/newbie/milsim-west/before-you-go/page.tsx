import Link from "next/link";
import { ChevronLeft, ChevronRight, AlertTriangle, Clock, Mail, MapPin, CheckCircle2, ShieldCheck, HeartPulse, Dumbbell } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before You Go — Milsim West",
  description: "Everything you need before arriving at a Milsim West event.",
};

const ARRIVAL_CHECKLIST = [
  "Printed deployment orders (in a ziplock bag — keep them dry)",
  "Medical card (in the same ziplock bag as your orders)",
  "Valid government-issued photo ID",
  "All red-highlighted gear from your deployment orders",
  "Eye protection (full seal, ANSI rated) — on at all times, including while sleeping",
  "Airsoft replica + magazines (no BBs — provided at the event)",
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

      {/* Critical warnings */}
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-start gap-3 border border-tactical/40 bg-tactical/5 p-4">
          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-tactical" />
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">No deployment orders = no entry.</span>{" "}
            MSW will not have your orders on hand. If you don't print them and bring them, you are not getting in — no exceptions.
          </p>
        </div>
        <div className="flex items-start gap-3 border border-tactical/40 bg-tactical/5 p-4">
          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-tactical" />
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">Eye pro on at all times. No exceptions.</span>{" "}
            During setup, during the op, during breaks, and yes — while you are sleeping. Getting caught without it is an ejection offense.
          </p>
        </div>
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
              Your orders are a printed document with the event name, address, and a checklist at the bottom. That checklist is what the cadre uses during bag check-in — they go through each item and initial it off. You need every red item on that list checked and signed before you can play.
            </p>
            <p>
              During the game, any leader or cadre can stop you at any time and ask to see your orders. If your check list isn't signed off or your paper is gone, you're out mid-op. Keep them on you at all times.
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
              After purchasing your ticket, join the <span className="font-semibold text-foreground">private Facebook group for your faction</span> — the link is on the MSW website. Your platoon and squad assignment will be posted there. Know it before you arrive.
            </p>
            <p>
              Want to team up with a friend? Request it early — either in the comments when buying your ticket or by reaching out to the group admins before the event. The earlier you ask, the easier it is for them to organize. Don't wait until you're already on site.
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
              The game kicks off around <span className="font-semibold text-foreground">2200–0000 (10 PM – midnight)</span>. Be prepared — you could be up all night.
            </p>
            <div className="rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">First timer tip:</span> Arrive early around 1400–1500. After check-in, eat, hydrate, talk to your platoon — and if there's downtime, take a nap. Seriously. You're going to need it. Alternatively, if you're not far from the venue, arriving a little later gives you more time to rest at home before the long night ahead.
            </div>
            <div className="rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">Bonus tip:</span> Bring a separate water bottle and snacks that are NOT part of your game gear. You'll be on site for several hours before the game even starts — don't burn through your field rations just sitting around waiting. Eat before you go and keep your game food and water sealed for the actual op.
            </div>
            <div className="flex items-start gap-3 rounded border border-tactical/40 bg-tactical/5 px-3 py-2">
              <AlertTriangle size={14} className="mt-0.5 shrink-0 text-tactical" />
              <p className="text-sm">
                <span className="font-semibold text-foreground">Do not go to your car to sleep after in-processing.</span>{" "}
                Once you're checked in, going back to your car for any reason requires a cadre escort and full gear re-inspection. Going there to sleep means you are out of the event — no return, no exceptions.
              </p>
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
              Standard AEGs are limited to{" "}
              <span className="font-semibold text-foreground">366 fps measured with a 0.25g BB (1.5 joules)</span>. MSW chronos by joule energy, not raw FPS — the number on the screen changes depending on what BB weight the operator uses. Check your specific event's orders for the exact limit.
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

        {/* Medical Card */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <HeartPulse size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Medical Card
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              A medical card is a small piece of paper — laminated if you have it, written down if you don't — that stays on your person during the entire op. Sometimes cadre checks for it, sometimes they don't, but it's a listed item and more importantly it's a real safety tool.
            </p>
            <p>At minimum your medical card should include:</p>
            <ul className="flex flex-col gap-1 pl-1">
              {["Full name", "Home address", "Emergency contact name & phone number", "Any allergies", "Any medical conditions"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-tactical">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-1 rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">Tip:</span> Keep both your deployment orders and medical card in the same ziplock bag and store it in your left shoulder pocket. If something happens in the field, that's the first place anyone is going to look — make it easy to find fast.
            </div>
          </div>
        </div>

        {/* Physical Fitness */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <Dumbbell size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Physical Fitness
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Milsim looks cool from the outside — and it is — but the physical reality hits different once you're in it. You're carrying a loaded vest and a replica for over 24 hours straight, moving through terrain, staying alert, and doing it all while sleep deprived. Body shock is real. People have blacked out and thrown up within the first 30 minutes. This isn't meant to scare you — it's meant to make sure you actually show up ready.
            </p>
            <p>
              Your fitness level directly affects your squad. One person who can't keep up slows everyone down and puts the team at a disadvantage. Start training with your actual gear — vest, replica, pack — so your body isn't shocked the moment the op starts. Put in the work before the event and you'll enjoy it a lot more.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Go running", detail: "Be comfortable running 3 miles straight before the event. This op is a physical challenge — your cardio will be tested." },
                { label: "Practice rucking", detail: "Rucking means moving with your full kit — replica, vest, and a loaded pack on your back. Depending on the event you could ruck anywhere from 2 to 8 miles in a single day. Get comfortable carrying that weight before you show up, not during." },
                { label: "Break in your boots", detail: "Do not show up in a fresh pair of boots. Wear them on runs and walks beforehand — blisters 10 hours into an op are brutal." },
                { label: "Get sleep before", detail: "You're going to be up all night. Don't show up already running on empty." },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded border border-border bg-background p-3">
                  <p className="font-semibold text-foreground">{label}</p>
                  <p className="mt-1 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
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
