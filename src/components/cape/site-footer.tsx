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
              CapePulse is a frontend demo for a Cape Town intelligence-and-experience platform. It shows how private touring,
              social discovery, AI concierge workflows, and partner-facilitated VIP logistics can live in one bright, operationally
              credible product.
            </p>
          </div>
          <div>
            <p className="section-tag mb-4">Routes</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <Link key={item.href} className="hover:text-foreground" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="section-tag mb-4">Trust notes</p>
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
          <p>POPIA-aware demo. Human handoff remains visible in all automated flows.</p>
          <p>WhatsApp logic shown conceptually only. Sensitive data stays out of chat.</p>
          <p>VIP and security services are represented as partner-facilitated, subject to legal and operational review.</p>
        </div>
      </div>
    </footer>
  );
}
