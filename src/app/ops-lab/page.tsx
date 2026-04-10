import { ConciergeLab } from "@/components/cape/concierge-lab";
import { complianceNotes } from "@/lib/site-data";

export default function OpsLabPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">Ops Lab</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Founder-facing proof that the frontend understands the operator reality.</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
          The attached PDF is translated here into visible product behavior: availability-aware sales, itinerary logic, run-sheets, review assistance, sentiment loops, and compliance signals.
        </p>
      </div>
      <ConciergeLab />
      <div className="grid gap-4 md:grid-cols-3">
        {complianceNotes.map((note) => (
          <div key={note.id} className="chapter-card">
            <p className="font-medium">{note.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{note.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
