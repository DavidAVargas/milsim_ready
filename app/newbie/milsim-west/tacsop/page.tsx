import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TACSOP Simplified — Milsim West",
};

export default function TacsopPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-8 flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
        <Link href="/newbie" className="hover:text-tactical transition-colors">NEWBIE</Link>
        <ChevronRight size={12} />
        <Link href="/newbie/milsim-west" className="hover:text-tactical transition-colors">MILSIM WEST</Link>
        <ChevronRight size={12} />
        <span className="text-tactical">TACSOP</span>
      </div>
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical mb-3">// 05</p>
      <h1 className="font-mono text-3xl font-bold text-foreground">TACSOP SIMPLIFIED</h1>
      <p className="mt-4 text-sm text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
