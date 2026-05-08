"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Download, FileDown, X } from "lucide-react";
import { SECTION_OPTIONS } from "./field-guide-pdf";

const PdfDownloadButton = dynamic(() => import("./pdf-download-button"), { ssr: false });

export default function PdfFab() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(SECTION_OPTIONS.map((s) => s.key));

  const toggle = (key: string) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-tactical text-white font-mono text-xs tracking-widest uppercase px-4 py-3 shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Download field guide PDF"
      >
        <FileDown size={15} />
        <span className="hidden sm:inline">Field Guide</span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full sm:max-w-sm bg-background border border-border p-6 shadow-2xl">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-tactical mb-1">// DOWNLOAD</p>
                <h2 className="font-mono text-lg font-bold text-foreground">Field Guide PDF</h2>
                <p className="text-xs text-muted-foreground mt-1">Highlight version — works offline in the field.</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors mt-1">
                <X size={18} />
              </button>
            </div>

            {/* Section checkboxes */}
            <div className="flex flex-col gap-2 mb-6">
              {SECTION_OPTIONS.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggle(key)}
                  className="flex items-center gap-3 cursor-pointer text-left w-full"
                >
                  <div
                    className={`w-4 h-4 border flex items-center justify-center shrink-0 transition-colors ${
                      selected.includes(key) ? "bg-tactical border-tactical" : "border-border"
                    }`}
                  >
                    {selected.includes(key) && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm transition-colors ${selected.includes(key) ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Download button */}
            {selected.length === 0 ? (
              <button disabled className="w-full flex items-center justify-center gap-2 bg-border text-muted-foreground font-mono text-xs tracking-widest uppercase py-3 cursor-not-allowed">
                <Download size={14} />
                SELECT AT LEAST ONE
              </button>
            ) : (
              <PdfDownloadButton selected={selected} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
