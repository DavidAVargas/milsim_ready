import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factions — Milsim West",
  description: "NATO, RUFOR, and who else is on the field. Know your side before you show up.",
};

const FACTIONS = [
  {
    id: "NATO",
    full: "North Atlantic Treaty Organization",
    represents: "U.S. Army / Western Coalition",
    uniform: "MultiCam / OCP",
    detail:
      "NATO represents the U.S. Army and allied Western forces. If you're coming from an airsoft background with standard MultiCam or OCP kit, you'll likely end up on this side. NATO forces typically operate with Western-style gear, MOLLE rigs, and U.S. military equipment.",
  },
  {
    id: "RUFOR",
    full: "Russian Forces",
    represents: "Russian Army",
    uniform: "Russian patterns — EMR, Flora, KLMK",
    detail:
      "RUFOR represents the Russian Army. If you're running Russian-pattern kit — EMR (Digital Flora), Flora, or KLMK — you'll be on this side. Russian-style chest rigs, AK platforms, and Soviet/Russian gear are the standard. MSW takes faction authenticity seriously.",
  },
  {
    id: "MILITIA",
    full: "Irregular Forces / Local Militia",
    represents: "Non-state armed group",
    uniform: "Civilian clothes, mixed military gear",
    detail:
      "Militia represents irregular, non-state forces — think local fighters, insurgents, or resistance elements. Uniform requirements are looser than NATO or RUFOR: civilian clothing mixed with military surplus is the look. If you don't have a full kit yet, Militia is often the most accessible starting point. Check your specific op's deployment orders for exactly what's allowed.",
  },
];

export default function FactionsPage() {
  return (
    <PageContainer>
      <Link
        href="/newbie/milsim-west"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
      >
        <ChevronLeft size={14} />
        BACK TO MILSIM WEST
      </Link>

      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// 06</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">FACTIONS</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        MSW ops run three factions. Your faction determines your uniform, your kit, and who you're fighting alongside. You don't always get to pick — MSW assigns you based on registration and balance.
      </p>

      <div className="mt-12 flex flex-col gap-6">
        {FACTIONS.map(({ id, full, represents, uniform, detail }) => (
          <div key={id} className="border border-border bg-card p-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="font-mono text-2xl font-bold text-tactical">{id}</p>
                <p className="mt-0.5 font-mono text-xs tracking-widest uppercase text-muted-foreground">{full}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs tracking-widest uppercase text-foreground font-semibold">{represents}</p>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{uniform}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-border bg-card p-5">
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-foreground mb-2">How Assignment Works</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          MSW assigns factions to keep numbers balanced on both sides. You may be able to request a side when you register, but it's not guaranteed. Make sure your kit matches your assigned faction — showing up in MultiCam on RUFOR or Flora on NATO is not going to fly. Check your deployment orders.
        </p>
      </div>
    </PageContainer>
  );
}
