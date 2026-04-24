import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Newbie Guide", href: "/newbie" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <span className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
          MILSIM
        </span>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-tactical"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} MILSIM
        </p>
      </div>
    </footer>
  );
}
