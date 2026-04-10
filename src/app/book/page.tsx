import { BookingFlow } from "@/components/cape/booking-flow";

export default function BookPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">Book</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">From inquiry to WhatsApp-ready handoff.</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          This demo flow shows the conversion layer the PDF pushes hardest: faster replies, availability-aware quoting, structured itinerary generation, and a clean human escalation path.
        </p>
      </div>
      <BookingFlow />
    </div>
  );
}
