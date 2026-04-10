import { BookingFlow } from "@/components/cape/booking-flow";

export default function BookPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">Book</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Book anything you want to do in Cape Town.</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          Tours, adventures, airport transfers, nightlife reservations, luxury movement, private aviation, secure arrivals, gifting, and fully custom requests all live in the same booking desk.
        </p>
      </div>
      <BookingFlow />
    </div>
  );
}
