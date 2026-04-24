"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Newbie Guide", href: "/newbie" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-widest uppercase text-foreground hover:text-tactical transition-colors"
        >
          MILSIM
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs font-medium tracking-widest uppercase transition-colors hover:text-tactical ${
                pathname === href
                  ? "text-tactical"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-xs font-medium tracking-widest uppercase transition-colors hover:text-tactical ${
                pathname === href
                  ? "text-tactical"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
