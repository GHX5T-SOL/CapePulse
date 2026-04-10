import { ConciergeLab } from "@/components/cape/concierge-lab";

export default function ConciergePage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">AI Concierge</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">The concierge that helps you plan, book, and move faster.</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          Ask CapePulse to shape a day plan, build a night out, organize a transfer, or coordinate a premium arrival. It is designed to feel fast, polished, and useful from the first question.
        </p>
      </div>
      <ConciergeLab />
    </div>
  );
}
