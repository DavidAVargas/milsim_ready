"use client";

import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Move } from "lucide-react";
import { useFocusTrap } from "@/lib/use-focus-trap";

const MEMBERS = [
  { name: "Nick",    slug: "nick",    tags: [] as string[], photoCount: 2 },
  { name: "Sean",    slug: "sean",    tags: [] as string[], photoCount: 2 },
  { name: "Ryan",    slug: "ryan",    tags: [] as string[], photoCount: 4 },
  { name: "David",   slug: "david",   tags: [] as string[], photoCount: 2 },
  { name: "Lyle",    slug: "lyle",    tags: [] as string[], photoCount: 2 },
  { name: "Brandon", slug: "brandon", tags: [] as string[], photoCount: 1 },
];

// team1–5 are the gallery; team7 is the side card
const TEAM_GALLERY = ["/team/team1.jpeg", "/team/team2.jpeg", "/team/team3.jpeg", "/team/team4.jpeg", "/team/team5.jpeg", "/team/team7.jpeg"];

function memberPhotos(slug: string, count: number) {
  return Array.from({ length: count }, (_, i) => `/team/${slug}${i + 1}.jpeg`);
}

// ── Saved position ────────────────────────────────────────────────────────────
function useSavedPosition(key: string): [string, (pos: string) => void] {
  const storageKey = `photoPos_${key}`;
  const [position, setPosition] = useState<string>(() => {
    if (typeof window === "undefined") return "50% 50%";
    return localStorage.getItem(storageKey) ?? "50% 50%";
  });
  return [
    position,
    (pos: string) => {
      setPosition(pos);
      localStorage.setItem(storageKey, pos);
    },
  ];
}

// ── Basic photo ───────────────────────────────────────────────────────────────
function Photo({
  src, alt, className = "", style, onClick,
}: {
  src: string; alt: string; className?: string; style?: React.CSSProperties; onClick?: () => void;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-card border border-dashed border-border ${className}`}>
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">No photo</p>
      </div>
    );
  }
  return (
    <img
      src={src} alt={alt} onError={() => setFailed(true)} onClick={onClick}
      className={`object-cover ${onClick ? "cursor-pointer" : ""} ${className}`}
      style={style}
    />
  );
}

// ── Repositionable card photo ─────────────────────────────────────────────────
function RepositionablePhoto({
  src, alt, posKey, className = "",
}: {
  src: string; alt: string; posKey: string; className?: string;
}) {
  const [position, savePosition] = useSavedPosition(posKey);
  const [repositioning, setRepositioning] = useState(false);

  return (
    <div className={`group/repo relative overflow-hidden ${className}`}>
      <Photo
        src={src} alt={alt}
        className="h-full w-full"
        style={{ objectPosition: position }}
      />

      {/* reposition overlay */}
      {repositioning && (
        <>
          <div
            className="absolute inset-0 cursor-crosshair"
            onClick={(e) => {
              e.stopPropagation();
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
              const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
              savePosition(`${x}% ${y}%`);
              setRepositioning(false);
            }}
          />
          <div className="absolute inset-0 ring-2 ring-tactical pointer-events-none" />
          <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[10px] tracking-widest uppercase text-white bg-black/60 py-1 pointer-events-none">
            Click to set focal point
          </p>
        </>
      )}

      <button
        onClick={(e) => { e.stopPropagation(); setRepositioning((v) => !v); }}
        className={`absolute right-2 top-2 border p-1 transition-colors z-10 ${
          repositioning
            ? "border-tactical bg-tactical text-background"
            : "border-white/30 bg-black/50 text-white opacity-0 group-hover/repo:opacity-100"
        }`}
        title="Reposition photo"
        aria-label="Reposition photo"
      >
        <Move size={12} aria-hidden="true" />
      </button>
    </div>
  );
}

// ── Photo viewer (single lightbox — replaces the old card-then-popup flow) ─────
type GalleryTarget =
  | { kind: "member"; member: (typeof MEMBERS)[number] }
  | { kind: "team" };

function PhotoViewer({ target, onClose }: { target: GalleryTarget; onClose: () => void }) {
  const isTeam = target.kind === "team";
  const member = isTeam ? null : target.member;
  const photos = isTeam ? TEAM_GALLERY : memberPhotos(member!.slug, member!.photoCount);
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef, onClose);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-viewer-heading"
        className="relative flex w-full max-w-4xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical mb-0.5">
            {isTeam ? "// TEAM" : "// OPERATOR"}
          </p>
          <h2 id="photo-viewer-heading" className="font-mono text-sm font-bold uppercase text-white">
            {isTeam ? "The Death Stalkers" : member!.name}
          </h2>
        </div>

        {/* Main photo */}
        <div className="flex w-full items-center justify-center border border-white/10 bg-black">
          <img src={photos[current]} alt="" className="max-h-[80vh] w-full object-contain" />
        </div>

        {/* Navigation */}
        {photos.length > 1 && (
          <div className="flex items-center gap-4">
            <button onClick={prev} aria-label="Previous photo" className="border border-white/20 bg-black/60 p-1.5 text-white hover:bg-black/90 transition-colors">
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <p className="font-mono text-xs tracking-widest uppercase text-white/60">{current + 1} / {photos.length}</p>
            <button onClick={next} aria-label="Next photo" className="border border-white/20 bg-black/60 p-1.5 text-white hover:bg-black/90 transition-colors">
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}

        <button onClick={onClose} aria-label="Close photo viewer" className="absolute -right-3 -top-3 border border-white/20 bg-black/80 p-1 text-white hover:bg-black transition-colors">
          <X size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function TeamContent() {
  const [viewer, setViewer] = useState<GalleryTarget | null>(null);

  return (
    <>
      {viewer && <PhotoViewer target={viewer} onClose={() => setViewer(null)} />}

      {/* Team photos */}
      <div className="mt-12">
        <h2 className="mb-4 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
          Team Photo
        </h2>
        <div
          role="button"
          tabIndex={0}
          aria-label="View team photo gallery"
          className="group relative w-full h-[420px] overflow-hidden border border-border bg-black hover:border-tactical transition-colors cursor-pointer"
          onClick={() => setViewer({ kind: "team" })}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setViewer({ kind: "team" });
            }
          }}
        >
          <RepositionablePhoto
            src="/team/team7.jpeg"
            alt="Team photo"
            posKey="team7"
            className="absolute inset-0 h-full w-full border-0"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="font-mono text-xs tracking-widest uppercase text-white">
              A few photos →
            </p>
          </div>
        </div>
      </div>

      {/* Squad */}
      <div className="mt-14">
        <h2 className="mb-1 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
          The Squad
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">Six operators. One squad.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {MEMBERS.map((member) => (
            <button
              key={member.name}
              type="button"
              disabled={member.photoCount === 0}
              aria-label={`View photos of ${member.name}`}
              className="group flex flex-col border border-border bg-card text-left hover:border-tactical transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border"
              onClick={() => setViewer({ kind: "member", member })}
            >
              {member.photoCount > 0 ? (
                <Photo
                  src={`/team/${member.slug}1.jpeg`}
                  alt={member.name}
                  className="h-64 w-full border-b border-border bg-black sm:h-72"
                />
              ) : (
                <div className="flex h-64 w-full items-center justify-center border-b border-border bg-card sm:h-72">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">No photo yet</p>
                </div>
              )}
              <div className="p-3">
                <p className="font-mono text-sm font-bold uppercase text-foreground">{member.name}</p>
                {member.tags.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {member.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] tracking-widest uppercase border border-tactical/40 text-tactical px-1.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
