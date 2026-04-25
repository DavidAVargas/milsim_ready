import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PageContainer from "@/components/layout/page-container";

export default function Page() {
  return (
    <PageContainer>
      <Link href="/newbie/milsim-west" className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical">
        <ChevronLeft size={14} /> BACK TO MILSIM WEST
      </Link>
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical mb-3">// 01</p>
      <h1 className="font-mono text-3xl font-bold text-foreground">BEFORE YOU GO</h1>
      <p className="mt-4 text-sm text-muted-foreground">Content coming soon.</p>
    </PageContainer>
  );
}
