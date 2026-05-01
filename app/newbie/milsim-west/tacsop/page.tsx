import Link from "next/link";
import { ChevronLeft, AlertTriangle, HeartPulse, ShieldCheck, Ban, Hash } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TACSOP Simplified — Milsim West",
  description: "The MSW rules that actually matter for first-timers. No walls of text.",
};

const QUICK_REF = [
  { label: "Grenade kill radius", value: "15 ft", note: "Solid cover saves you. Soft cover (bushes, grass) does not." },
  { label: "Rocket / 40mm kill radius", value: "20 ft", note: "Same cover rules apply. 1 hit kills the vehicle, driver, and TC." },
  { label: "MMG minimum engagement", value: "50 ft", note: "M240, M60, PKM — regardless of what it chronos at." },
  { label: "Sniper minimum engagement", value: "100 ft", note: "DMRs too. Semi-auto only at this range." },
  { label: "Rifleman BB allotment", value: "500 rds", note: "LMG gets 1,500. MMG gets 3,000. No extra for grenades." },
  { label: "Standard AEG FPS limit", value: "366 fps", note: "With 0.25g BB (1.5 joules). BBs are issued at check-in — do not bring your own." },
];

const EJECTION_LIST = [
  "Disrespecting cadre or other participants",
  "Blind firing (firing without eyes on target)",
  "Removing eye protection — yes, even while sleeping",
  "Alcohol or drugs at any point during the event",
  "Using a safety flag to gain a tactical advantage",
  "Going to your car to sleep after in-processing — you are done for the event, no return",
];

export default function TacsopPage() {
  return (
    <PageContainer>
      <Link
        href="/newbie/milsim-west"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
      >
        <ChevronLeft size={14} />
        BACK TO MILSIM WEST
      </Link>

      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// 05</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">TACSOP SIMPLIFIED</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        The full MSW TACSOP is 59 pages. This is what actually matters for your first op.
        Read the real document before the event — this is the primer, not the replacement.
      </p>

      <div className="mt-12 flex flex-col gap-6">

        {/* Hit Calling */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Hit Calling & Integrity
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              MSW runs on integrity. There are no referees watching every firefight —
              <span className="font-semibold text-foreground"> you call your own hits</span>, and you never call someone else's.
              If you're caught gaming the system you'll be removed without a refund.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "What counts as a hit", detail: "Any BB that strikes your body or any gear secured to your person — including ricochets. If it hit you, you're out." },
                { label: "What doesn't count", detail: "BB hits on your weapon only. That's it. Everything else on you counts." },
                { label: "Friendly fire", detail: "Counts. Full stop. Check your targets before you fire." },
                { label: "When you're hit", detail: "Drop immediately. Be loud. Call for a medic. Do not reload, do not test-fire, do not move toward the objective." },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded border border-border bg-background p-3">
                  <p className="font-semibold text-foreground">{label}</p>
                  <p className="mt-1 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Mechanic */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <HeartPulse size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              The Medical Mechanic
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              This is the one system that trips first-timers up the most. Learn it before you show up.
            </p>

            {/* Flow */}
            <div className="flex flex-col gap-2">
              {[
                {
                  step: "01",
                  label: "You get hit",
                  detail: "Drop, yell, display your MSW Tourniquet (MSWTQ) — issued at check-in. Do not self-apply it. That's for your buddy to do.",
                },
                {
                  step: "02",
                  label: "Buddy applies your tourniquet within 5 minutes",
                  detail: "You are now \"wounded\" — you can keep fighting. You may still share intel and talk while wounded.",
                },
                {
                  step: "03",
                  label: "Nobody reaches you within 5 minutes",
                  detail: "You \"bleed out\" and are considered killed. Follow the dead rules below.",
                },
                {
                  step: "04",
                  label: "You get hit again while \"wounded\"",
                  detail: "You are killed. No buddy aid this time — you need a medic or the company CCP.",
                },
                {
                  step: "05",
                  label: "Getting healed (dead → alive)",
                  detail: "Find a Platoon Medic or the Company CCP. Drink an entire 16oz water bottle (the \"IV\"). Once it's gone, you're back in the fight.",
                },
              ].map(({ step, label, detail }) => (
                <div key={step} className="flex items-start gap-3 rounded border border-border bg-background p-3">
                  <span className="font-mono text-xs font-bold text-tactical shrink-0 mt-0.5">{step}</span>
                  <div>
                    <p className="font-semibold text-foreground text-xs">{label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-1 flex items-start gap-3 rounded border border-tactical/40 bg-tactical/5 px-3 py-2">
              <AlertTriangle size={14} className="mt-0.5 shrink-0 text-tactical" />
              <p className="text-xs leading-relaxed">
                <span className="font-semibold text-foreground">When dead and moving to a medic or CCP:</span>{" "}
                hold your weapon over your head. This signals to everyone that you are out of the game. When healed, you lose all intel you had collected up to that point.
              </p>
            </div>

            <div className="rounded border border-border bg-background px-3 py-2">
              <span className="font-semibold text-foreground">Remember:</span> You can never self-heal. You can never hand your MSWTQ to your buddy — they reach over and use it themselves. Do not pre-thread it through the tri-glide before the op.
            </div>
          </div>
        </div>

        {/* Safety Rules */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <AlertTriangle size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Safety Rules
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">

            <div>
              <p className="font-semibold text-foreground mb-2">Eye Pro</p>
              <p>
                On at all times. That means during setup, during the op, during breaks, and{" "}
                <span className="font-semibold text-foreground">yes — while you are sleeping</span>.
                No exceptions. Getting caught without eye pro is an ejection offense.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">The EMERGENCY Call</p>
              <p className="mb-2">
                MSW uses <span className="font-semibold text-foreground">"EMERGENCY"</span> instead of "cease fire."
                This is called for real injuries, brush fires, or any life-threatening situation. The moment you hear it:
              </p>
              <ol className="flex flex-col gap-1 pl-1">
                {[
                  "Stop playing immediately",
                  "Echo the command — yell EMERGENCY",
                  "Display your safety flag",
                  "Stay exactly where you are and wait for cadre instructions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-tactical shrink-0 mt-0.5">0{i + 1}</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Safety Flag</p>
              <p>
                A red rag, VS-17 panel section, or yellow reflective belt worn around your body. Use it when going to the latrine, when you&apos;ve bled out and are walking to the CCP, or when leaving the event area for any reason.{" "}
                <span className="font-semibold text-foreground">Using a safety flag to gain a tactical advantage is an immediate ejection.</span>
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Blind Fire</p>
              <p>
                Firing without eyes on your target is strictly prohibited. Do not stick your replica around a corner and squeeze the trigger. If you can&apos;t see what you&apos;re shooting, you don&apos;t shoot.
              </p>
            </div>

          </div>
        </div>

        {/* What gets you kicked */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <Ban size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              What Gets You Ejected
            </h2>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            All of these result in removal from the event with no refund.
          </p>
          <div className="flex flex-col gap-2">
            {EJECTION_LIST.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded border border-border bg-background px-3 py-2">
                <span className="mt-0.5 shrink-0 text-tactical font-bold text-sm leading-none">×</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference */}
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <Hash size={18} className="shrink-0 text-tactical" />
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              Quick Reference Numbers
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            {QUICK_REF.map(({ label, value, note }) => (
              <div key={label} className="flex items-start gap-4 rounded border border-border bg-background px-3 py-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{note}</p>
                </div>
                <span className="shrink-0 font-mono text-sm font-bold text-tactical">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer note */}
      <div className="mt-12 flex items-start gap-3 border border-border bg-card p-4">
        <AlertTriangle size={16} className="mt-0.5 shrink-0 text-tactical" />
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">This is not the full rulebook.</span>{" "}
          Read the complete MSW TACSOP before your first event. Your platoon leaders and cadre are the final authority on rules calls during the op — if you&apos;re unsure, ask them.
        </p>
      </div>
    </PageContainer>
  );
}
