import Link from "next/link";
import { WifiOff, FileDown, Eye } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center overflow-hidden bg-background px-4 text-center">
      {/* Grid overlay for tactical feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Callsign label */}
      <p className="mb-4 font-mono text-xs tracking-[0.3em] uppercase text-tactical">
        // OPERATION BRIEFING
      </p>

      <h1 className="max-w-3xl font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
        SURVIVE THE FIELD.
        <br />
        <span className="text-tactical">KNOW BEFORE YOU GO.</span>
      </h1>

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Milsim isn&apos;t just airsoft — it&apos;s 40 to 72 hours of military
        simulation in the field. Gear up right, learn the lingo, and don&apos;t
        be the one who quits on day one.
      </p>

      {/* Feature badges */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 border border-border px-3 py-2 text-xs text-muted-foreground">
            <WifiOff size={13} className="text-tactical" />
            <span>Works offline — no signal needed in the field</span>
          </div>
          <div className="flex items-center gap-2 border border-border px-3 py-2 text-xs text-muted-foreground">
            <FileDown size={13} className="text-tactical" />
            <span>Download a PDF field guide before you go</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-border px-3 py-2 text-xs text-muted-foreground">
          <Eye size={13} className="text-tactical" />
          <span>Red light mode — preserves your night vision in the field</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/newbie"
          className="inline-block bg-tactical px-8 py-3 font-mono text-xs font-bold tracking-widest uppercase text-tactical-foreground transition-opacity hover:opacity-80"
        >
          GET BRIEFED
        </Link>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
