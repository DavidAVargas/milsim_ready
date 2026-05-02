import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical">
              // UNIT
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A milsim team built for the long op. 40 to 72 hours in the field —
              rain, cold, and all.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical">
              // NAVIGATE
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Newbie Guide", href: "/newbie" },
                { label: "Events", href: "/events" },
                { label: "Team", href: "/team" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-tactical">
              // STATUS
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              OPERATIONS: ACTIVE
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              NEXT EVENT: TBD
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MILSIM READY — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
