import { ConciergeLab } from "@/components/cape/concierge-lab";

export default function ConciergePage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">AI Concierge</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">The AI layer that quotes, drafts, escalates, and stays inside the rules.</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          This is where the website demonstrates the operator playbook in public view: lead qualification, itinerary generation, review response drafting, handoff summaries, and compliance-aware escalation paths.
        </p>
      </div>
      <ConciergeLab />
    </div>
  );
}
