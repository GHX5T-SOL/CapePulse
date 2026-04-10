"use client";

import { useMemo, useState } from "react";
import { CalendarDaysIcon, CheckCircle2Icon, Clock3Icon, SparklesIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { tours } from "@/lib/site-data";
import type { AvailabilitySlot, ItineraryDraft, QuoteBreakdown } from "@/lib/types";

export function BookingFlow() {
  const [tourSlug, setTourSlug] = useState(tours[0].slug);
  const [date, setDate] = useState("2026-05-18");
  const [groupSize, setGroupSize] = useState(2);
  const [tier, setTier] = useState("Private");
  const [pickupArea, setPickupArea] = useState("Atlantic Seaboard");
  const [notes, setNotes] = useState("Need penguins, easy walking pace, and a lunch that works for two kids.");
  const [availability, setAvailability] = useState<AvailabilitySlot[]>([]);
  const [quote, setQuote] = useState<QuoteBreakdown | null>(null);
  const [itinerary, setItinerary] = useState<ItineraryDraft | null>(null);

  const selectedTour = useMemo(() => tours.find((tour) => tour.slug === tourSlug) ?? tours[0], [tourSlug]);

  async function readJsonOrThrow<T>(response: Response): Promise<T> {
    const payload = (await response.json().catch(() => null)) as T & { error?: string } | null;

    if (!response.ok) {
      throw new Error(payload?.error ?? "The demo request could not be completed.");
    }

    return payload as T;
  }

  async function loadAvailability() {
    try {
      const response = await fetch("/api/demo/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tourSlug, date, groupSize, tier }),
      });

      const data = await readJsonOrThrow<{ slots: AvailabilitySlot[] }>(response);
      setAvailability(data.slots);
      toast.success("Availability simulated");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Availability check failed.");
    }
  }

  async function loadQuote() {
    try {
      const response = await fetch("/api/demo/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourSlug,
          date,
          groupSize,
          tier,
          pickupArea,
          budgetBand: "R4k-R12k",
          addOnIds: ["photo-stops"],
        }),
      });

      const data = await readJsonOrThrow<{ quote: QuoteBreakdown }>(response);
      setQuote(data.quote);
      toast.success("Quote generated");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Quote generation failed.");
    }
  }

  async function loadItinerary() {
    try {
      const response = await fetch("/api/demo/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourSlug,
          date,
          groupSize,
          tier,
          pickupArea,
          budgetBand: "R4k-R12k",
          addOnIds: ["photo-stops"],
        }),
      });

      const data = await readJsonOrThrow<{ itinerary: ItineraryDraft }>(response);
      setItinerary(data.itinerary);
      toast.success("Itinerary ready");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Itinerary generation failed.");
    }
  }

  return (
    <div className="chapter-card space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="section-tag">Booking system demo</p>
          <h3 className="mt-2 text-3xl font-semibold text-foreground">Inquiry to handoff summary in one motion.</h3>
        </div>
        <Tabs defaultValue={tier} onValueChange={setTier}>
          <TabsList>
            <TabsTrigger value="Explore">Explore</TabsTrigger>
            <TabsTrigger value="Private">Private</TabsTrigger>
            <TabsTrigger value="Signature">Signature</TabsTrigger>
            <TabsTrigger value="Black">Black</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-4">
            <label className="section-tag">Tour</label>
            <div className="mt-3 grid gap-2">
              {tours.slice(0, 4).map((tour) => (
                <button
                  key={tour.slug}
                  className={`rounded-[1.2rem] border px-4 py-3 text-left transition ${tourSlug === tour.slug ? "border-foreground/12 bg-accent" : "border-foreground/8 bg-white/60"}`}
                  onClick={() => setTourSlug(tour.slug)}
                  type="button"
                >
                  <p className="font-medium">{tour.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{tour.tagline}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
              <label className="section-tag">Date</label>
              <Input className="mt-3 rounded-2xl" onChange={(event) => setDate(event.target.value)} type="date" value={date} />
            </div>
            <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
              <label className="section-tag">Group size</label>
              <Input
                className="mt-3 rounded-2xl"
                min={1}
                onChange={(event) => setGroupSize(Number(event.target.value))}
                type="number"
                value={groupSize}
              />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
            <label className="section-tag">Pickup area</label>
            <Input className="mt-3 rounded-2xl" onChange={(event) => setPickupArea(event.target.value)} value={pickupArea} />
          </div>
          <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
            <label className="section-tag">Notes and constraints</label>
            <Textarea className="mt-3 min-h-28 rounded-[1.3rem]" onChange={(event) => setNotes(event.target.value)} value={notes} />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full" onClick={loadAvailability}>
              Check availability
            </Button>
            <Button className="rounded-full" onClick={loadQuote} variant="outline">
              Generate quote
            </Button>
            <Button className="rounded-full" onClick={loadItinerary} variant="outline">
              Draft itinerary
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <CalendarDaysIcon className="size-5 text-[#00A3E6]" />
              <p className="font-medium">Availability-aware planning</p>
            </div>
            <div className="mt-4 grid gap-3">
              {availability.length ? (
                availability.map((slot) => (
                  <div key={slot.id} className="rounded-[1.2rem] border border-foreground/8 bg-white/75 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium">{slot.startTime}</p>
                      <span className="rounded-full bg-accent px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground">{slot.status}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Guide {slot.guide} · {slot.vehicle}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm leading-6 text-muted-foreground">Pull slots to show how the concierge can quote against actual route and guide windows.</p>
              )}
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <SparklesIcon className="size-5 text-[#2F6B4F]" />
              <p className="font-medium">Quote preview</p>
            </div>
            {quote ? (
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Journey subtotal</span>
                  <span className="font-medium text-foreground">R {quote.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transport logic</span>
                  <span className="font-medium text-foreground">R {quote.transport.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected add-on</span>
                  <span className="font-medium text-foreground">
                    R {quote.addOns.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-base">
                  <span className="font-medium text-foreground">Estimated total</span>
                  <span className="font-heading text-2xl text-foreground">R {quote.estimatedTotal.toLocaleString()}</span>
                </div>
                <p>{quote.caveat}</p>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Quote logic mirrors the plan: pricing bands, pickup influence, add-ons, deposit, and clear human caveats.</p>
            )}
          </div>
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <Clock3Icon className="size-5 text-[#FF6B4A]" />
              <p className="font-medium">Run-sheet style itinerary</p>
            </div>
            {itinerary ? (
              <div className="mt-4 space-y-4">
                {itinerary.timeline.map((step) => (
                  <div key={`${step.time}-${step.stop}`} className="rounded-[1.2rem] border border-foreground/8 bg-white/75 p-4">
                    <p className="section-tag">{step.time}</p>
                    <p className="mt-1 font-medium">{step.stop}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Itinerary outputs are intentionally operational, not fluffy. They should be usable as guest-facing previews and staff handoff inputs.
              </p>
            )}
          </div>
          <div className="rounded-[1.7rem] border border-[#2F6B4F]/15 bg-[#2F6B4F]/6 p-5">
            <div className="flex items-center gap-3">
              <CheckCircle2Icon className="size-5 text-[#2F6B4F]" />
              <p className="font-medium">WhatsApp-ready summary</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Dates: {date} · Pickup: {pickupArea} · Group: {groupSize} guests · Tour: {selectedTour.name} · Notes: {notes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
