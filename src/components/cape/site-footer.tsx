import Link from "next/link";

import { LogoMark } from "@/components/cape/ui";
import { complianceNotes, navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 px-4 pb-8 sm:px-6 lg:px-8">
      <div className="page-shell space-y-6 rounded-[2rem] border border-white/70 bg-white/40 p-6 backdrop-blur-2xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div className="space-y-4">
            <LogoMark />
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              CapePulse brings Cape Town tours, activities, nightlife, airport movement, concierge planning, and premium guest support into one clear booking experience.
            </p>
          </div>
          <div>
            <p className="section-tag mb-4">Explore</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <Link key={item.href} className="hover:text-foreground" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="section-tag mb-4">Guest standards</p>
            <div className="space-y-3 text-sm leading-6 text-muted-foreground">
              {complianceNotes.map((note) => (
                <div key={note.id}>
                  <p className="font-medium text-foreground">{note.title}</p>
                  <p>{note.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-3 border-t border-foreground/8 pt-5 text-xs text-muted-foreground md:grid-cols-3">
          <p>Licensed guides, trusted vehicles, and polished guest coordination across the city.</p>
          <p>Secure payment rails, protected guest data, and a concierge line that stays easy to reach.</p>
          <p>From value-friendly bookings to ultra-luxury requests, CapePulse is built to move at your pace.</p>
        </div>
      </div>
    </footer>
  );
}
