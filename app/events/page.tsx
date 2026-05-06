import PageContainer from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Milsim Ready",
  description: "Milsim events I've attended — rated on difficulty, cold weather, terrain, and overall experience.",
};

const EVENTS = [
  {
    name: "Operation Irene II",
    org: "Milsim West",
    date: "Feb 2025",
    location: "Texas",
    faction: "NATO",
    ratings: [
      { label: "Difficulty", value: 4 },
      { label: "Cold Weather", value: 5 },
      { label: "Night Ops", value: 3 },
      { label: "Overall", value: 5 },
    ],
    note: "Brutal cold, long nights, solid cadre. One of the best ops I've been to.",
  },
];

function RatingBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-muted-foreground w-24 shrink-0">{label}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-6 ${i < value ? "bg-tactical" : "bg-border"}`}
          />
        ))}
      </div>
      <span className="font-mono text-xs text-muted-foreground">{value}/5</span>
    </div>
  );
}

export default function EventsPage() {
  return (
    <PageContainer>
      <p className="mb-3 font-mono text-xs tracking-[0.3em] uppercase text-tactical">// AFTER ACTION</p>
      <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">EVENTS</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Ops I've attended, rated from boots-on-ground experience. Not a highlight reel — an honest breakdown of what to expect.
      </p>

      <div className="mt-12 flex flex-col gap-4">
        {EVENTS.map((event) => (
          <div key={event.name} className="border border-border bg-card p-6">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
              <div>
                <p className="font-mono text-lg font-bold text-foreground">{event.name}</p>
                <p className="font-mono text-xs text-muted-foreground mt-0.5 tracking-widest uppercase">
                  {event.org} · {event.location} · {event.date}
                </p>
              </div>
              <span className="font-mono text-xs border border-border px-2 py-1 text-tactical tracking-widest">
                {event.faction}
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-5">
              {event.ratings.map((r) => (
                <RatingBar key={r.label} label={r.label} value={r.value} />
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {event.note}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-border bg-card p-5">
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-foreground mb-1">More coming</p>
        <p className="text-sm text-muted-foreground">
          Only posting events I've personally attended. More ops, more ratings as I go.
        </p>
      </div>
    </PageContainer>
  );
}
