import { WifiOff, FileDown, Smartphone, Download, CheckCircle2, Signal, BatteryMedium, BookOpen } from "lucide-react";
import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Guide — Milsim Ready",
  description: "Access the Milsim Ready site offline in the field, or download a PDF field guide to keep on your phone.",
};

export default function FieldGuidePage() {
  return (
    <PageContainer>
      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// FIELD GUIDE</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">ACCESS IN THE FIELD</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        You&apos;re going to be 40–72 hours deep in the field with no cell signal. Here&apos;s how to make sure
        the information you need is still on your phone when you need it.
      </p>

      {/* Offline mode */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <WifiOff size={18} className="text-tactical shrink-0" />
          <h2 className="font-mono text-lg font-bold text-foreground tracking-tight">OFFLINE MODE</h2>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-xl">
          Milsim Ready works offline. If you visit the site at least once before the event — while you still have
          internet — your phone caches the whole site. After that, you can pull it up in the field with no signal
          and everything will still load.
        </p>

        <div className="border-l-2 border-tactical pl-5 mb-8">
          <p className="font-mono text-xs tracking-widest uppercase text-tactical mb-2">How to use it</p>
          <ol className="flex flex-col gap-3 text-sm text-muted-foreground list-none">
            <li className="flex items-start gap-3">
              <span className="font-mono text-tactical font-bold shrink-0">01</span>
              Open milsimready.com before your event while you have Wi-Fi or cell service
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-tactical font-bold shrink-0">02</span>
              Browse the Newbie Guide pages you&apos;ll want to reference — lingo, gear, tactics, etc.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-tactical font-bold shrink-0">03</span>
              In the field, open your browser and go to milsimready.com — it loads from cache, no signal needed
            </li>
          </ol>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-border p-4 flex items-start gap-3">
            <Signal size={15} className="text-tactical mt-0.5 shrink-0" />
            <div>
              <p className="font-mono text-xs font-bold tracking-widest uppercase text-foreground mb-1">No signal required</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Once cached, the site loads fully even in dead zones — same pages, same content.</p>
            </div>
          </div>
          <div className="border border-border p-4 flex items-start gap-3">
            <Smartphone size={15} className="text-tactical mt-0.5 shrink-0" />
            <div>
              <p className="font-mono text-xs font-bold tracking-widest uppercase text-foreground mb-1">Works on any phone</p>
              <p className="text-xs text-muted-foreground leading-relaxed">iOS Safari, Android Chrome — no app install needed. Just use your browser.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-border" />

      {/* PDF Field Guide */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <FileDown size={18} className="text-tactical shrink-0" />
          <h2 className="font-mono text-lg font-bold text-foreground tracking-tight">PDF FIELD GUIDE</h2>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-xl">
          Prefer something you can keep open without touching your phone? Download a PDF
          of the highlights before you leave. It&apos;s designed to be quick to scan — covers gear,
          lingo, tactics, and the key things to know before you arrive.
        </p>

        <div className="border-l-2 border-tactical pl-5 mb-8">
          <p className="font-mono text-xs tracking-widest uppercase text-tactical mb-2">How to download</p>
          <ol className="flex flex-col gap-3 text-sm text-muted-foreground list-none">
            <li className="flex items-start gap-3">
              <span className="font-mono text-tactical font-bold shrink-0">01</span>
              Tap the <span className="font-mono text-foreground">Field Guide</span> button in the bottom-left corner of any page
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-tactical font-bold shrink-0">02</span>
              Choose which sections to include — or keep them all
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-tactical font-bold shrink-0">03</span>
              Hit Download PDF — save it to your phone before you head out
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-tactical font-bold shrink-0">iOS</span>
              <span>On iPhone, the PDF opens in your browser instead of downloading. Tap the <span className="font-mono text-foreground">Share</span> button at the bottom of the screen, then <span className="font-mono text-foreground">Save to Files</span>. Do this before you leave — not in the field.</span>
            </li>
          </ol>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-border p-4 flex items-start gap-3">
            <BatteryMedium size={15} className="text-tactical mt-0.5 shrink-0" />
            <div>
              <p className="font-mono text-xs font-bold tracking-widest uppercase text-foreground mb-1">Saves battery</p>
              <p className="text-xs text-muted-foreground leading-relaxed">A PDF in your files app uses zero data and no browser needed — just open and read.</p>
            </div>
          </div>
          <div className="border border-border p-4 flex items-start gap-3">
            <BookOpen size={15} className="text-tactical mt-0.5 shrink-0" />
            <div>
              <p className="font-mono text-xs font-bold tracking-widest uppercase text-foreground mb-1">Pick what you need</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Select only the sections you care about — keep it short or grab everything.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-border" />

      {/* Pro tip */}
      <div className="border border-tactical/30 bg-tactical/5 p-5">
        <p className="font-mono text-xs tracking-widest uppercase text-tactical mb-3">// PRO TIP</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Do both. Visit the site the night before your event to cache it, then also download the PDF as a backup.
          Battery dies, phone restarts, browser clears cache — whatever happens, you&apos;ll still have your reference.
          The field is not the place to figure this stuff out.
        </p>
      </div>

      {/* Checklist */}
      <div className="mt-12">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical mb-4">// PRE-EVENT CHECKLIST</p>
        <div className="flex flex-col gap-3">
          {[
            "Visit milsimready.com while on Wi-Fi (caches the site for offline use)",
            "Download the PDF field guide to your phone",
            "Save the PDF to your files app — not just your browser downloads",
            "Test offline: turn on airplane mode and reload the site to confirm it works",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 size={15} className="text-tactical mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
