import Link from "next/link";
import { ChevronLeft, ChevronRight, AlertTriangle, Clock, Mail, MapPin, CheckCircle2, ShieldCheck, HeartPulse, Dumbbell } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before You Go — Milsim West",
  description: "Everything you need before arriving at a Milsim West event.",
};

const ARRIVAL_CHECKLIST = [
  { icon: Mail, text: "Printed deployment orders (in a ziplock bag — keep them dry)" },
  { icon: HeartPulse, text: "Medical card (in the same ziplock bag as your orders)" },
  { icon: ShieldCheck, text: "Valid government-issued photo ID" },
  { icon: CheckCircle2, text: "All red-highlighted gear from your deployment orders" },
  { icon: CheckCircle2, text: "Eye protection (full seal, ANSI rated) — on at all times, including while sleeping" },
  { icon: CheckCircle2, text: "Airsoft replica + magazines (no BBs — provided at the event)" },
  { icon: CheckCircle2, text: "Cash (~$50 for patches and miscellaneous)" },
  { icon: CheckCircle2, text: "Personal medications" },
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
        <div className="flex items-start gap-4 border-l-4 border-tactical bg-tactical/5 p-4">
          <AlertTriangle size={20} className="shrink-0 text-tactical mt-0.5" />
          <div>
            <p className="font-mono text-sm font-bold text-foreground">NO DEPLOYMENT ORDERS = NO ENTRY</p>
            <p className="mt-1 text-sm text-muted-foreground">MSW will not have your orders on hand. If you don't print them and bring them, you are not getting in — no exceptions.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 border-l-4 border-tactical bg-tactical/5 p-4">
          <AlertTriangle size={20} className="shrink-0 text-tactical mt-0.5" />
          <div>
            <p className="font-mono text-sm font-bold text-foreground">EYE PRO ON AT ALL TIMES</p>
            <p className="mt-1 text-sm text-muted-foreground">During setup, during the op, during breaks, and yes — while you are sleeping. Getting caught without it is an ejection offense.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-10">

        {/* Deployment Orders */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 border border-border bg-card">
              <Mail size={28} className="text-tactical" />
            </div>
            <div>
              <h2 className="font-mono text-lg font-bold text-foreground">Deployment Orders</h2>
              <p className="text-sm text-muted-foreground">Sent to your email — print them the moment they arrive</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground pl-[4.5rem]">
            <p>
              MSW will email your deployment orders — sometimes weeks in advance, sometimes the day before.{" "}
              <span className="font-semibold text-foreground">Check your email and print them the moment they arrive.</span>
            </p>
            <p>
              Your orders are a printed document with the event name, address, and a checklist at the bottom. Cadre goes through each red-highlighted item and initials it off. You need every red item checked and signed before you can play.
            </p>
            <p>
              During the game, any leader or cadre can stop you at any time and ask to see your orders. If your checklist isn't signed off or your paper is gone, you're out mid-op. Keep them on you at all times.
            </p>
            <div className="rounded border border-border bg-card px-4 py-3">
              <span className="font-semibold text-foreground">Tip:</span> Put your orders in a ziplock sandwich bag. Rain, sweat, river crossings — anything can destroy paper in the field.
            </div>
          </div>
        </div>

        {/* Check-In */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 border border-border bg-card">
              <MapPin size={28} className="text-tactical" />
            </div>
            <div>
              <h2 className="font-mono text-lg font-bold text-foreground">Check-In Process</h2>
              <p className="text-sm text-muted-foreground">Know your platoon before you arrive</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-[4.5rem]">
            <div className="rounded border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              After buying your ticket, join the <span className="font-semibold text-foreground">private Facebook group for your faction</span> — the link is on the MSW website. Your platoon and squad assignment will be posted there. Want to team up with a friend? Put their name in the comments when purchasing or message the group admins early.
            </div>
            <div className="flex flex-col gap-2 mt-1">
              {[
                { step: "01", text: "When you arrive, go directly to your assigned platoon area. Do not set up camp." },
                { step: "02", text: "Find the bag check-in area. Lay your gear out for cadre inspection." },
                { step: "03", text: "Cadre goes through all red-highlighted items and initials them off your orders." },
                { step: "04", text: "Head to chrono. Your replica must pass the FPS check to play." },
                { step: "05", text: "Running a BFA? Let cadre know at bag check-in — there's a separate process." },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4 border border-border bg-card p-4">
                  <span className="font-mono text-lg font-bold text-tactical shrink-0 leading-none">{step}</span>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="/newbie/milsim-west/gear" className="inline-flex items-center gap-1 font-mono text-xs tracking-widest uppercase text-tactical hover:underline">
                SEE GEAR GUIDE <ChevronRight size={11} />
              </Link>
              <Link href="/newbie/milsim-west/factions" className="inline-flex items-center gap-1 font-mono text-xs tracking-widest uppercase text-tactical hover:underline">
                SEE FACTIONS <ChevronRight size={11} />
              </Link>
            </div>
          </div>
        </div>

        {/* When to Arrive */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 border border-border bg-card">
              <Clock size={28} className="text-tactical" />
            </div>
            <div>
              <h2 className="font-mono text-lg font-bold text-foreground">When to Arrive</h2>
              <p className="text-sm text-muted-foreground">Don't show up before 1400 — private property</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 pl-[4.5rem]">
            {/* Time blocks */}
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border bg-card p-4 text-center">
                <p className="font-mono text-3xl font-bold text-tactical">1400</p>
                <p className="font-mono text-xs text-muted-foreground mt-1 tracking-widest uppercase">Check-in Opens · 2:00 PM</p>
              </div>
              <div className="border border-border bg-card p-4 text-center">
                <p className="font-mono text-3xl font-bold text-foreground">1800</p>
                <p className="font-mono text-xs text-muted-foreground mt-1 tracking-widest uppercase">Check-in Closes · 6:00 PM</p>
              </div>
            </div>
            <div className="border border-border bg-card p-4 text-center">
              <p className="font-mono text-2xl font-bold text-foreground">2200 – 0000</p>
              <p className="font-mono text-xs text-muted-foreground mt-1 tracking-widest uppercase">Game Kicks Off · 10 PM – Midnight</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Do not arrive before 1400</span> — the venue is private property. The game kicks off around 2200–0000 (10 PM – midnight). Be prepared — you could be up all night.
            </p>
            <div className="rounded border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">First timer tip:</span> Arrive early around 1400–1500. After check-in, eat, hydrate, talk to your platoon — and if there's downtime, take a nap. Seriously. You're going to need it. Alternatively, if you're not far from the venue, arriving a little later gives you more time to rest at home before the long night ahead.
            </div>
            <div className="rounded border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Bonus tip:</span> Bring a separate water bottle and snacks that are NOT part of your game gear. You'll be on site for several hours before the game even starts — don't burn through your field rations just sitting around waiting. Eat before you go and keep your game food and water sealed for the actual op.
            </div>
            <div className="flex items-start gap-3 border-l-4 border-tactical bg-tactical/5 px-4 py-3">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-tactical" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Do not go to your car to sleep after in-processing.</span>{" "}
                Once you're checked in, going back to your car for any reason requires a cadre escort and full gear re-inspection. Going there to sleep means you are out of the event — no return, no exceptions.
              </p>
            </div>
          </div>
        </div>

        {/* Chrono */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 border border-border bg-card">
              <ShieldCheck size={28} className="text-tactical" />
            </div>
            <div>
              <h2 className="font-mono text-lg font-bold text-foreground">Chrono</h2>
              <p className="text-sm text-muted-foreground">Your replica must pass before you can play</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-[4.5rem]">
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-mono text-4xl font-bold text-tactical">366 FPS</p>
              <p className="font-mono text-xs text-muted-foreground mt-2 tracking-widest uppercase">With 0.25g BB · 1.5 Joules</p>
            </div>
            <p className="text-sm text-muted-foreground">
              MSW chronos by joule energy, not raw FPS — the number on screen changes depending on BB weight the operator uses. Check your specific event's orders for the exact limit.
            </p>
            <div className="flex items-start gap-3 border-l-4 border-tactical bg-tactical/5 px-4 py-3">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-tactical" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Do not bring your own BBs.</span>{" "}
                BBs are provided at the event. Leave yours at home.
              </p>
            </div>
          </div>
        </div>

        {/* Medical Card */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 border border-border bg-card">
              <HeartPulse size={28} className="text-tactical" />
            </div>
            <div>
              <h2 className="font-mono text-lg font-bold text-foreground">Medical Card</h2>
              <p className="text-sm text-muted-foreground">Stays on your person the entire op</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-[4.5rem]">
            <p className="text-sm text-muted-foreground">
              A small piece of paper — laminated if you have it, written if you don't. Cadre sometimes checks for it, but more importantly it's a real safety tool.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {["Full name", "Home address", "Emergency contact name & phone number", "Any allergies", "Any medical conditions"].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-border bg-card px-4 py-3">
                  <span className="text-tactical font-bold">—</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Tip:</span> Keep both your orders and medical card in the same ziplock bag in your left shoulder pocket. That's the first place anyone looks if something happens.
            </div>
          </div>
        </div>

        {/* Physical Fitness */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 border border-border bg-card">
              <Dumbbell size={28} className="text-tactical" />
            </div>
            <div>
              <h2 className="font-mono text-lg font-bold text-foreground">Physical Fitness</h2>
              <p className="text-sm text-muted-foreground">You're carrying kit for 24+ hours straight</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-[4.5rem]">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Milsim looks cool from the outside — and it is — but the physical reality hits different once you're in it. You're carrying a loaded vest and a replica for over 24 hours straight, moving through terrain, staying alert, and doing it all while sleep deprived. Body shock is real. People have blacked out and thrown up within the first 30 minutes. This isn't meant to scare you — it's meant to make sure you actually show up ready.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your fitness level directly affects your squad. One person who can't keep up slows everyone down and puts the team at a disadvantage. Start training with your actual gear — vest, replica, pack — so your body isn't shocked the moment the op starts. Put in the work before the event and you'll enjoy it a lot more.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Go running", detail: "Be comfortable running 3 miles straight before the event. Your cardio will be tested." },
                { label: "Practice rucking", detail: "Rucking means moving with your full kit — replica, vest, and a loaded pack. Depending on the event you could ruck 2–8 miles in a single day. Get comfortable carrying that weight before you show up, not during." },
                { label: "Break in your boots", detail: "Do not show up in a fresh pair of boots. Wear them on runs and walks beforehand — blisters 10 hours into an op are brutal." },
                { label: "Get sleep before", detail: "You're going to be up all night. Don't show up already running on empty." },
              ].map(({ label, detail }) => (
                <div key={label} className="border border-border bg-card p-4">
                  <p className="font-mono text-sm font-bold text-tactical">{label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Checklist */}
      <div className="mt-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">Day-Of Checklist</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {ARRIVAL_CHECKLIST.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-4 border border-border bg-card p-4">
              <Icon size={18} className="mt-0.5 shrink-0 text-tactical" />
              <span className="text-sm text-muted-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
