import { complianceNotes } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">About</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">A premium Cape Town product with operational discipline under the glass.</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
          CapePulse is positioned as a city movement layer: a place where experiences, logistics, trust, and concierge intelligence share the same interface.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="chapter-card">
          <p className="font-medium">Positioning</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            CapePulse serves both locals and international travelers, covering affordable journeys through ultra-premium movement while staying visually and operationally coherent.
          </p>
        </div>
        <div className="chapter-card">
          <p className="font-medium">Trust posture</p>
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
