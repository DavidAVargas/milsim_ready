import { Lock, ShieldAlert } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — Milsim Ready",
  description: "Team portal — restricted access.",
};

export default function TeamPage() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="border border-border p-6 mb-6 inline-flex">
          <Lock size={32} className="text-tactical" />
        </div>

        <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical mb-3">// RESTRICTED ACCESS</p>
        <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl mb-4">TEAM PORTAL</h1>
        <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
          This area is for team members only. Sign in with your credentials to access the team portal.
        </p>

        <div className="mt-8 flex items-center gap-2 border border-tactical/30 bg-tactical/5 px-4 py-3">
          <ShieldAlert size={14} className="text-tactical shrink-0" />
          <p className="font-mono text-xs tracking-widest uppercase text-tactical">Authentication coming soon</p>
        </div>
      </div>
    </PageContainer>
  );
}
