import { WifiOff } from "lucide-react";
import PageContainer from "@/components/layout/page-container";

export default function OfflinePage() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="border border-border p-6 mb-6 inline-flex">
          <WifiOff size={32} className="text-tactical" />
        </div>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical mb-3">// NO CONNECTION</p>
        <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl mb-4">YOU&apos;RE OFFLINE</h1>
        <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
          This page wasn&apos;t cached before you lost connection. Head back to a page you&apos;ve already visited, or check your PDF field guide.
        </p>
      </div>
    </PageContainer>
  );
}
