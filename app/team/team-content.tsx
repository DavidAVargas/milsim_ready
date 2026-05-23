"use client";

import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Move } from "lucide-react";

const MEMBERS = [
  { name: "Nick",    slug: "nick",    tags: ["Squad Leader", "Platoon Leader"], photoCount: 2 },
  { name: "Sean",    slug: "sean",    tags: ["Squad Leader", "Platoon Leader"], photoCount: 2 },
  { name: "Ryan",    slug: "ryan",    tags: ["Squad Leader", "Platoon Leader"], photoCount: 4 },
  { name: "David",   slug: "david",   tags: [],                                 photoCount: 2 },
  { name: "Lyle",    slug: "lyle",    tags: [],                                 photoCount: 0 },
  { name: "Brandon", slug: "brandon", tags: [],                                 photoCount: 1 },
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
      >
        <Move size={12} />
      </button>
    </div>
  );
}

// ── Photo popup ───────────────────────────────────────────────────────────────
function PhotoPopup({ photos, index, onClose }: { photos: string[]; index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6" onClick={onClose}>
      <div className="relative flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <img src={photos[current]} alt="" className="max-h-[65vh] max-w-[80vw] object-contain shadow-2xl" />
        {photos.length > 1 && (
          <div className="flex items-center gap-4">
            <button onClick={prev} className="border border-white/20 bg-black/60 p-1.5 text-white hover:bg-black/90 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <p className="font-mono text-xs tracking-widest uppercase text-white/60">{current + 1} / {photos.length}</p>
            <button onClick={next} className="border border-white/20 bg-black/60 p-1.5 text-white hover:bg-black/90 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        )}
        <button onClick={onClose} className="absolute -right-3 -top-3 border border-white/20 bg-black/80 p-1 text-white hover:bg-black transition-colors">
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

// ── Gallery modal ─────────────────────────────────────────────────────────────
type GalleryTarget =
  | { kind: "member"; member: (typeof MEMBERS)[number] }
  | { kind: "team" };

function GalleryModal({
  target, onClose, onOpenPopup,
}: {
  target: GalleryTarget;
  onClose: () => void;
  onOpenPopup: (photos: string[], index: number) => void;
}) {
  const isTeam = target.kind === "team";
  const member = isTeam ? null : (target as { kind: "member"; member: (typeof MEMBERS)[number] }).member;
  const photos = isTeam ? TEAM_GALLERY : memberPhotos(member!.slug, member!.photoCount);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative w-full max-w-sm border border-border bg-card p-4" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical mb-0.5">
              {isTeam ? "// TEAM" : "// OPERATOR"}
            </p>
            <h2 className="font-mono text-sm font-bold uppercase text-foreground">
              {isTeam ? "The Death Scorpions" : member!.name}
            </h2>
            {member && member.tags.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {member.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-widest uppercase border border-tactical/40 text-tactical px-1.5 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button onClick={onClose} className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Main photo — natural proportions, capped height */}
        <div className="mb-2 border border-border bg-black">
          <Photo
            src={photos[0]} alt="Main photo"
            className="w-full max-h-64 object-contain"
            onClick={() => onOpenPopup(photos, 0)}
          />
        </div>

        {/* Op photos */}
        {photos.length > 1 && (
          <div className={`grid gap-1.5 grid-cols-${Math.min(photos.length - 1, 4)}`}>
            {photos.slice(1).map((src, i) => (
              <div key={src} className="border border-border bg-black">
                <Photo
                  src={src} alt={`Op photo ${i + 1}`}
                  className="w-full max-h-20 object-contain"
                  onClick={() => onOpenPopup(photos, i + 1)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function TeamContent() {
  const [gallery, setGallery] = useState<GalleryTarget | null>(null);
  const [popup, setPopup] = useState<{ photos: string[]; index: number } | null>(null);

  return (
    <>
      {popup && <PhotoPopup photos={popup.photos} index={popup.index} onClose={() => setPopup(null)} />}
      {gallery && !popup && (
        <GalleryModal
          target={gallery}
          onClose={() => setGallery(null)}
          onOpenPopup={(photos, index) => setPopup({ photos, index })}
        />
      )}

      {/* Team photos */}
      <div className="mt-12">
        <h2 className="mb-4 font-mono text-sm font-bold tracking-widest uppercase text-foreground">
          Team Photo
        </h2>
        <button
          className="group relative w-full h-[420px] overflow-hidden border border-border bg-black hover:border-tactical transition-colors"
          onClick={() => setGallery({ kind: "team" })}
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
        </button>
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
              className="group flex flex-col border border-border bg-card text-left hover:border-tactical transition-colors"
              onClick={() => member.photoCount > 0 && setGallery({ kind: "member", member })}
            >
              {member.photoCount > 0 ? (
                <RepositionablePhoto
                  src={`/team/${member.slug}1.jpeg`}
                  alt={member.name}
                  posKey={member.slug}
                  className="h-48 w-full border-b border-border bg-black"
                />
              ) : (
                <div className="flex h-48 w-full items-center justify-center border-b border-border bg-card">
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
