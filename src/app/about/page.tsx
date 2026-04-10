import { complianceNotes } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">About</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">CapePulse is the modern way to book and move through Cape Town.</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
          We combine travel booking, nightlife discovery, airport movement, concierge planning, and premium support into one clear guest experience.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="chapter-card">
          <p className="font-medium">Positioning</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            CapePulse serves locals, travelers, couples, families, business visitors, and high-touch guests across every budget level, from easy day plans to ultra-luxury movement.
          </p>
        </div>
        <div className="chapter-card">
          <p className="font-medium">Why guests trust it</p>
          <div className="mt-4 space-y-3">
            {complianceNotes.map((note) => (
              <div key={note.id} className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
                <p className="font-medium">{note.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{note.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
