"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CalendarDaysIcon, CheckCircle2Icon, Clock3Icon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { addOns, tours } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ServiceType = "tour" | "activity" | "transfer" | "nightlife" | "vip" | "custom";
type TierType = "Explore" | "Private" | "Signature" | "Black";

type DemoOption = {
  id: string;
  title: string;
  description: string;
  price: number;
  accent: string;
};

const serviceTypes: Array<{ id: ServiceType; label: string; description: string }> = [
  { id: "tour", label: "Tours", description: "Peninsula, Winelands, safari, city, couples, and family days." },
  { id: "activity", label: "Activities", description: "Helicopter flips, yacht time, padel, wellness, and adventure." },
  { id: "transfer", label: "Transfers", description: "Airport, hotel, villa, and private chauffeur movement." },
  { id: "nightlife", label: "Tables & nightlife", description: "Dinner bookings, clubs, bottle service, and pickups." },
  { id: "vip", label: "VIP & security", description: "Executive arrivals, private air, and discreet premium movement." },
  { id: "custom", label: "Custom request", description: "Tell us exactly what you need and we will shape the plan." },
];

const activityOptions: DemoOption[] = [
  {
    id: "heli-ribbon",
    title: "Helicopter ribbon",
    description: "Quick scenic flight above the Atlantic Seaboard and city bowl.",
    price: 5800,
    accent: "High altitude highlight",
  },
  {
    id: "yacht-sunset",
    title: "Sunset yacht charter",
    description: "Private harbor departure with drinks, music, and a golden-hour route.",
    price: 7800,
    accent: "Best for couples and groups",
  },
  {
    id: "padel-morning",
    title: "Padel and recovery morning",
    description: "Premium court, rackets, smoothies, and post-session recovery.",
    price: 1450,
    accent: "Cape Town fitness energy",
  },
];

const transferOptions: DemoOption[] = [
  {
    id: "airport-luxe",
    title: "Airport to hotel or villa",
    description: "CTIA pickup with meet-and-greet and luggage handling.",
    price: 980,
    accent: "Most booked",
  },
  {
    id: "chauffeur-half-day",
    title: "Half-day chauffeur",
    description: "Private driver on standby for daytime meetings or city movement.",
    price: 3200,
    accent: "4 hours with waiting time",
  },
  {
    id: "chauffeur-full-day",
    title: "Full-day luxury chauffeur",
    description: "Premium vehicle with a flexible all-day route around Cape Town.",
    price: 6200,
    accent: "Best for event-heavy days",
  },
];

const nightlifeOptions: DemoOption[] = [
  {
    id: "restaurant-priority",
    title: "Dinner priority booking",
    description: "Secure a premium restaurant slot with arrival timing built in.",
    price: 650,
    accent: "Great for date nights",
  },
  {
    id: "club-table",
    title: "Club table and bottle service",
    description: "Best for groups who want fast entry, table control, and seamless pickups.",
    price: 3400,
    accent: "After-dark favorite",
  },
  {
    id: "night-out-pickups",
    title: "Night-out pickup and drop-off",
    description: "Link the table, route, and return trip into one simple booking.",
    price: 1800,
    accent: "Safe and easy movement",
  },
];

const vipOptions: DemoOption[] = [
  {
    id: "executive-arrival",
    title: "Executive airport arrival",
    description: "Premium reception, discreet routing, and a polished first arrival into the city.",
    price: 8400,
    accent: "Best for principals and families",
  },
  {
    id: "secure-movement",
    title: "Secure movement overlay",
    description: "Dedicated route planning with executive vehicle coordination and private concierge handling.",
    price: 16500,
    accent: "High-touch movement",
  },
  {
    id: "private-air-villa",
    title: "Private air and villa coordination",
    description: "Private jet support, villa setup, arrival transfers, and guest-flow planning.",
    price: 42000,
    accent: "Ultra-luxury itinerary",
  },
];

export function BookingFlow() {
  const [tourSlug, setTourSlug] = useState(tours[0].slug);
  const [serviceType, setServiceType] = useState<ServiceType>("tour");
  const [date, setDate] = useState("2026-05-18");
  const [groupSize, setGroupSize] = useState(2);
  const [tier, setTier] = useState<TierType>("Private");
  const [pickupArea, setPickupArea] = useState("One&Only Cape Town");
  const [dropoffArea, setDropoffArea] = useState("Camps Bay");
  const [budgetBand, setBudgetBand] = useState("Luxury");
  const [paymentRail, setPaymentRail] = useState("Visa");
  const [giftMode, setGiftMode] = useState(false);
  const [giftRecipient, setGiftRecipient] = useState("Amina Rahman");
  const [notes, setNotes] = useState("Want a polished day plan, sunset drinks, and return transport already arranged.");
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>(["photo-stops", "wine-pairing"]);
  const [activityId, setActivityId] = useState(activityOptions[0].id);
  const [transferId, setTransferId] = useState(transferOptions[0].id);
  const [nightlifeId, setNightlifeId] = useState(nightlifeOptions[1].id);
  const [vipId, setVipId] = useState(vipOptions[0].id);
  const [quoteUnlocked, setQuoteUnlocked] = useState(true);
  const [checkoutStarted, setCheckoutStarted] = useState(false);

  const selectedTour = useMemo(() => tours.find((tour) => tour.slug === tourSlug) ?? tours[0], [tourSlug]);
  const selectedAddOns = useMemo(() => addOns.filter((item) => selectedAddOnIds.includes(item.id)), [selectedAddOnIds]);

  const activeOption = useMemo(() => {
    switch (serviceType) {
      case "activity":
        return activityOptions.find((item) => item.id === activityId) ?? activityOptions[0];
      case "transfer":
        return transferOptions.find((item) => item.id === transferId) ?? transferOptions[0];
      case "nightlife":
        return nightlifeOptions.find((item) => item.id === nightlifeId) ?? nightlifeOptions[0];
      case "vip":
        return vipOptions.find((item) => item.id === vipId) ?? vipOptions[0];
      case "custom":
        return {
          id: "custom-plan",
          title: "Custom plan",
          description: "A concierge-built request based on your exact notes, timing, and budget.",
          price: 4200,
          accent: "Quoted to fit the brief",
        };
      case "tour":
      default:
        return {
          id: selectedTour.slug,
          title: selectedTour.name,
          description: selectedTour.summary,
          price: selectedTour.basePrice,
          accent: `${selectedTour.duration} · ${selectedTour.groupSize}`,
        };
    }
  }, [activityId, nightlifeId, selectedTour, serviceType, transferId, vipId]);

  const quote = useMemo(() => {
    const tierMultiplier: Record<TierType, number> = {
      Explore: 1,
      Private: 1.12,
      Signature: 1.38,
      Black: 2.25,
    };

    const addOnTotal = selectedAddOns.reduce((sum, item) => sum + item.price, 0);
    let base = 0;

    switch (serviceType) {
      case "tour":
        base = Math.round(selectedTour.basePrice * Math.max(groupSize, 1) * tierMultiplier[tier]);
        break;
      case "activity":
        base = Math.round((activeOption.price + groupSize * 220) * tierMultiplier[tier]);
        break;
      case "transfer":
        base = Math.round((activeOption.price + groupSize * 140) * tierMultiplier[tier]);
        break;
      case "nightlife":
        base = Math.round((activeOption.price + Math.max(groupSize - 2, 0) * 380) * tierMultiplier[tier]);
        break;
      case "vip":
        base = Math.round((activeOption.price + groupSize * 600) * tierMultiplier[tier]);
        break;
      case "custom":
        base = Math.round((activeOption.price + groupSize * 320) * tierMultiplier[tier]);
        break;
      default:
        base = activeOption.price;
        break;
    }

    const transportFee = pickupArea.toLowerCase().includes("airport") || serviceType === "transfer" || serviceType === "vip" ? 950 : 420;
    const conciergePriority = tier === "Black" ? 1850 : tier === "Signature" ? 950 : 450;
    const total = base + addOnTotal + transportFee + conciergePriority;

    return {
      base,
      addOnTotal,
      transportFee,
      conciergePriority,
      total,
      deposit: Math.round(total * 0.3),
    };
  }, [activeOption, groupSize, pickupArea, selectedAddOns, selectedTour.basePrice, serviceType, tier]);

  const previewTimeline = useMemo(() => {
    if (serviceType === "tour") {
      return selectedTour.itinerary.map((stop) => ({
        time: stop.time,
        stop: stop.title,
        detail: stop.detail,
      }));
    }

    const defaultTimelines: Record<Exclude<ServiceType, "tour">, Array<{ time: string; stop: string; detail: string }>> = {
      activity: [
        { time: "10:00", stop: "Concierge confirmation", detail: "Final timing, guests, and weather conditions are confirmed for the activity." },
        { time: "12:30", stop: "Experience window", detail: "Your selected activity goes live with transport and host handling already aligned." },
        { time: "17:45", stop: "After-plan add-on", detail: "CapePulse can pivot the day into dinner, drinks, or a return transfer without a separate request." },
      ],
      transfer: [
        { time: "Arrival", stop: "Driver assigned", detail: "Vehicle, pickup point, and guest details are pinned to your live trip card." },
        { time: "On the move", stop: "Route tracking", detail: "Pickup timing, destination changes, and stops are managed in one place." },
        { time: "Drop-off", stop: "Next move ready", detail: "CapePulse can roll the transfer directly into a table booking, hotel check-in, or return trip." },
      ],
      nightlife: [
        { time: "18:00", stop: "Table secured", detail: "Your dinner, club, or bottle-service booking is held under the selected guest name." },
        { time: "20:30", stop: "Pickup staged", detail: "Departure timing and the best route into the zone are coordinated around live crowd heat." },
        { time: "Late", stop: "Return flow", detail: "When you are ready to leave, the driver and after-plan are already visible in the same itinerary." },
      ],
      vip: [
        { time: "T-24h", stop: "Advance coordination", detail: "Arrival windows, addresses, vehicle choice, and special handling needs are locked in." },
        { time: "Arrival", stop: "Discreet movement", detail: "The guest flow moves from airport, villa, hotel, or venue with tightly managed handoffs." },
        { time: "On request", stop: "Ongoing support", detail: "The same dashboard can extend into private air, villa operations, or secure local movement." },
      ],
      custom: [
        { time: "Now", stop: "Brief received", detail: "Your exact request is captured with timing, guest mix, budget, and special preferences." },
        { time: "Next", stop: "Concierge proposal", detail: "CapePulse turns the brief into a tailored shortlist with pricing and route logic." },
        { time: "Booked", stop: "One payment flow", detail: "The final plan is reserved, paid, and stored inside the same customer dashboard." },
      ],
    };

    return defaultTimelines[serviceType];
  }, [selectedTour.itinerary, serviceType]);

  function toggleAddOn(addOnId: string) {
    setSelectedAddOnIds((current) =>
      current.includes(addOnId) ? current.filter((item) => item !== addOnId) : [...current, addOnId]
    );
  }

  function generateQuote() {
    setQuoteUnlocked(true);
    toast.success("Instant quote refreshed");
  }

  function startCheckout() {
    setCheckoutStarted(true);
    toast.success(`Secure ${paymentRail} checkout opened`);
  }

  return (
    <div className="chapter-card space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="section-tag">Booking desk</p>
          <h3 className="mt-2 text-3xl font-semibold text-foreground">Book tours, nightlife, transfers, VIP requests, or a custom Cape Town plan.</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            One flow for the full trip: choose what you want, shape the details, see an instant quote, and move straight into secure payment.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["Explore", "Private", "Signature", "Black"] as TierType[]).map((option) => (
            <button
              key={option}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                tier === option
                  ? "border-[#08141F] bg-[#08141F] !text-white hover:!text-white focus-visible:!text-white"
                  : "border-foreground/8 bg-white/75 text-foreground"
              )}
              onClick={() => setTier(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-4">
            <label className="section-tag">What do you want to book?</label>
            <div className="mt-3 grid gap-2">
              {serviceTypes.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    "rounded-[1.2rem] border px-4 py-3 text-left transition",
                    serviceType === item.id ? "border-[#08141F]/18 bg-accent" : "border-foreground/8 bg-white/60"
                  )}
                  onClick={() => setServiceType(item.id)}
                  type="button"
                >
                  <p className="font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-4">
            <label className="section-tag">Choose the experience</label>
            <div className="mt-3 grid gap-2">
              {serviceType === "tour"
                ? tours.map((tour) => (
                    <button
                      key={tour.slug}
                      className={cn(
                        "rounded-[1.2rem] border px-4 py-3 text-left transition",
                        tourSlug === tour.slug ? "border-[#08141F]/18 bg-accent" : "border-foreground/8 bg-white/60"
                      )}
                      onClick={() => setTourSlug(tour.slug)}
                      type="button"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium">{tour.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{tour.tagline}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">R {tour.basePrice.toLocaleString()}</span>
                      </div>
                    </button>
                  ))
                : (serviceType === "activity"
                    ? activityOptions
                    : serviceType === "transfer"
                      ? transferOptions
                      : serviceType === "nightlife"
                        ? nightlifeOptions
                        : serviceType === "vip"
                          ? vipOptions
                          : [
                              {
                                id: "custom-plan",
                                title: "Build a custom request",
                                description: "Perfect for villas, jets, events, shopping, bespoke itineraries, or multi-day plans.",
                                price: 4200,
                                accent: "Concierge quoted",
                              },
                            ]
                  ).map((item) => {
                    const selected =
                      (serviceType === "activity" && item.id === activityId) ||
                      (serviceType === "transfer" && item.id === transferId) ||
                      (serviceType === "nightlife" && item.id === nightlifeId) ||
                      (serviceType === "vip" && item.id === vipId) ||
                      serviceType === "custom";

                    return (
                      <button
                        key={item.id}
                        className={cn(
                          "rounded-[1.2rem] border px-4 py-3 text-left transition",
                          selected ? "border-[#08141F]/18 bg-accent" : "border-foreground/8 bg-white/60"
                        )}
                        onClick={() => {
                          if (serviceType === "activity") setActivityId(item.id);
                          if (serviceType === "transfer") setTransferId(item.id);
                          if (serviceType === "nightlife") setNightlifeId(item.id);
                          if (serviceType === "vip") setVipId(item.id);
                        }}
                        type="button"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.accent}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">R {item.price.toLocaleString()}</span>
                        </div>
                      </button>
                    );
                  })}
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
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
              <label className="section-tag">Pickup</label>
              <Input className="mt-3 rounded-2xl" onChange={(event) => setPickupArea(event.target.value)} value={pickupArea} />
            </div>
            <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
              <label className="section-tag">Drop-off</label>
              <Input className="mt-3 rounded-2xl" onChange={(event) => setDropoffArea(event.target.value)} value={dropoffArea} />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
            <label className="section-tag">Budget feel</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Smart value", "Comfort", "Luxury", "Ultra luxury"].map((band) => (
                <button
                  key={band}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    budgetBand === band
                      ? "border-[#08141F] bg-[#08141F] !text-white hover:!text-white focus-visible:!text-white"
                      : "border-foreground/8 bg-white/65 text-foreground"
                  )}
                  onClick={() => setBudgetBand(band)}
                  type="button"
                >
                  {band}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
            <label className="section-tag">Upgrades and add-ons</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {addOns.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    selectedAddOnIds.includes(item.id)
                      ? "border-[#08141F]/18 bg-accent text-foreground"
                      : "border-foreground/8 bg-white/65 text-foreground"
                  )}
                  onClick={() => toggleAddOn(item.id)}
                  type="button"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
            <label className="section-tag">Anything else we should know?</label>
            <Textarea className="mt-3 min-h-28 rounded-[1.3rem]" onChange={(event) => setNotes(event.target.value)} value={notes} />
          </div>
          <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="section-tag">Gift an experience</p>
                <p className="mt-2 text-sm text-muted-foreground">Turn the booking into a premium gift with a personal note and digital delivery.</p>
              </div>
              <button
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  giftMode
                    ? "border-[#08141F] bg-[#08141F] !text-white hover:!text-white focus-visible:!text-white"
                    : "border-foreground/8 bg-white/65 text-foreground"
                )}
                onClick={() => setGiftMode((current) => !current)}
                type="button"
              >
                {giftMode ? "Gift mode on" : "Add gift mode"}
              </button>
            </div>
            {giftMode ? (
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Input onChange={(event) => setGiftRecipient(event.target.value)} placeholder="Recipient name" value={giftRecipient} />
                <Input placeholder="Recipient email or WhatsApp" value="+27 82 555 0144" />
              </div>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full" onClick={generateQuote}>
              Generate instant quote
            </Button>
            <Button className="rounded-full" onClick={startCheckout} variant="outline">
              Continue to secure payment
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <CalendarDaysIcon className="size-5 text-[#00A3E6]" />
              <p className="font-medium">Selected plan</p>
            </div>
            <div className="mt-4 rounded-[1.35rem] border border-foreground/8 bg-white/78 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{activeOption.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{activeOption.description}</p>
                </div>
                <span className="metric-chip">{tier}</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                  <p className="section-tag">Guests</p>
                  <p className="mt-2 font-medium">{groupSize} guests</p>
                </div>
                <div className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                  <p className="section-tag">Date</p>
                  <p className="mt-2 font-medium">{date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <SparklesIcon className="size-5 text-[#2F6B4F]" />
              <p className="font-medium">Instant quote</p>
            </div>
            {quoteUnlocked ? (
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Selected service</span>
                  <span className="font-medium text-foreground">R {quote.base.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Movement and logistics</span>
                  <span className="font-medium text-foreground">R {quote.transportFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Upgrades</span>
                  <span className="font-medium text-foreground">R {quote.addOnTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Concierge priority</span>
                  <span className="font-medium text-foreground">R {quote.conciergePriority.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-base">
                  <span className="font-medium text-foreground">Estimated total</span>
                  <span className="font-heading text-2xl text-foreground">R {quote.total.toLocaleString()}</span>
                </div>
                <div className="rounded-[1.2rem] border border-[#2F6B4F]/12 bg-[#2F6B4F]/6 p-4">
                  <p className="font-medium text-foreground">Secure now from R {quote.deposit.toLocaleString()} deposit</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Pay by Visa, Mastercard, Apple Pay, Google Pay, or crypto and keep everything inside one customer profile.
                  </p>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Generate a quote to see pricing, deposit, and the next steps for payment.</p>
            )}
          </div>
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <Clock3Icon className="size-5 text-[#FF6B4A]" />
              <p className="font-medium">What the customer sees next</p>
            </div>
            <div className="mt-4 space-y-4">
              {previewTimeline.map((step) => (
                <div key={`${step.time}-${step.stop}`} className="rounded-[1.2rem] border border-foreground/8 bg-white/75 p-4">
                  <p className="section-tag">{step.time}</p>
                  <p className="mt-1 font-medium">{step.stop}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-foreground/8 bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-5 text-[#2F6B4F]" />
              <p className="font-medium">Secure payment rails and guest profile</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Visa", "Mastercard", "Apple Pay", "Google Pay", "Crypto"].map((method) => (
                <button
                  key={method}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    paymentRail === method
                      ? "border-[#08141F] bg-[#08141F] !text-white hover:!text-white focus-visible:!text-white"
                      : "border-foreground/8 bg-white/70 text-foreground"
                  )}
                  onClick={() => setPaymentRail(method)}
                  type="button"
                >
                  {method}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-[1.2rem] border border-foreground/8 bg-white/75 p-4 text-sm leading-7 text-muted-foreground">
              <p>
                Guest: <span className="font-medium text-foreground">Waseem Dada</span>
              </p>
              <p>
                Pickup: <span className="font-medium text-foreground">{pickupArea}</span>
              </p>
              <p>
                Drop-off: <span className="font-medium text-foreground">{dropoffArea}</span>
              </p>
              <p>
                Budget feel: <span className="font-medium text-foreground">{budgetBand}</span>
              </p>
              <p>
                Gift mode: <span className="font-medium text-foreground">{giftMode ? `Yes, for ${giftRecipient}` : "No"}</span>
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button className="rounded-full" onClick={startCheckout}>
                Pay with {paymentRail}
              </Button>
              <Link className="inline-flex items-center rounded-full border border-foreground/8 bg-white/75 px-4 py-2 text-sm font-medium text-foreground" href="/profile">
                Open my profile
              </Link>
            </div>
            {checkoutStarted ? (
              <div className="mt-4 rounded-[1.2rem] border border-[#2F6B4F]/15 bg-[#2F6B4F]/6 p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2Icon className="size-5 text-[#2F6B4F]" />
                  <p className="font-medium text-foreground">Checkout staged successfully</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Your quote, payment rail, invoice, and booking details are now mirrored inside the CapePulse profile dashboard for Waseem Dada.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
