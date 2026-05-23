import PageContainer from "@/components/layout/page-container";
import TeamContent from "./team-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Death Scorpions — Milsim Ready",
  description: "Meet the team.",
};

export default function TeamPage() {
  return (
    <PageContainer>
      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// TEAM</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">THE DEATH SCORPIONS</h1>

      <div className="mt-6 max-w-xl flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
        <p>
          Doom Platoon is going dark. The Death Scorpions are what's left of that core — same people, same standards, new name.
        </p>
        <p>
          Like the Deathstalker, we don't win with brute force. Nocturnal. Patient. We read the field and strike when it counts.
        </p>
        <p className="text-muted-foreground/60 text-xs italic">
          Not many photos — when we're out there, we're locked in. The camera comes out at ciao time. That's the squad.
        </p>
      </div>
      <TeamContent />
    </PageContainer>
  );
}
