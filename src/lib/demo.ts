import { addOns, heatZones, reviewItems, tours } from "@/lib/site-data";
import type {
  AvailabilityRequest,
  AvailabilitySlot,
  ItineraryDraft,
  QuoteBreakdown,
  QuoteRequest,
  ReviewReplyDraft,
  RunSheet,
  SentimentSummary,
  VipRequest,
} from "@/lib/types";

const guides = ["Lebo", "Jade", "Taariq", "Mila"];
const vehicles = ["Mercedes V-Class", "Range Rover", "Sprinter Lounge", "Executive SUV"];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug) ?? tours[0];
}

export function createAvailability(request: AvailabilityRequest): AvailabilitySlot[] {
  const dateSeed = new Date(request.date || Date.now()).getDate() || 4;
  const statuses: AvailabilitySlot["status"][] = ["available", "limited", "available"];

  return [9, 11, 14].map((hour, index) => ({
    id: `${request.tourSlug}-${hour}`,
    startTime: `${String(hour).padStart(2, "0")}:00`,
    guide: guides[(dateSeed + index) % guides.length],
    vehicle: vehicles[(dateSeed + index) % vehicles.length],
    status:
      request.groupSize > 6 && index === 0
        ? "waitlist"
        : request.groupSize > 4 && index === 1
          ? "limited"
          : statuses[index],
  }));
}

export function createQuote(request: QuoteRequest): QuoteBreakdown {
  const tour = getTour(request.tourSlug);
  const tierMultiplier = {
    Explore: 1,
    Private: 1.12,
    Signature: 1.34,
    Black: 2.4,
  }[request.tier];

  const selectedAddOns = addOns.filter((item) => request.addOnIds.includes(item.id));
  const addOnTotal = selectedAddOns.reduce((sum, item) => sum + item.price, 0);
  const subtotal = Math.round(tour.basePrice * request.groupSize * tierMultiplier);
  const transport = request.pickupArea.toLowerCase().includes("airport") ? 850 : 420;
  const premiumTierAdjustment = Math.round(subtotal * (tierMultiplier - 1));
  const estimatedTotal = subtotal + transport + addOnTotal;

  return {
    subtotal,
    transport,
    premiumTierAdjustment,
    addOns: selectedAddOns.map((item) => ({
      id: item.id,
      label: item.name,
      price: item.price,
    })),
    estimatedTotal,
    depositDue: Math.round(estimatedTotal * 0.35),
    currency: "ZAR",
    caveat:
      "Mock quote for demo only. Final confirmation depends on live partner availability, route conditions, and human review.",
  };
}

export function createItinerary(request: QuoteRequest): ItineraryDraft {
  const tour = getTour(request.tourSlug);

  return {
    title: `${tour.name} | tailored for ${request.groupSize} guests`,
    summary:
      "This itinerary demo follows the PDF playbook: personalized pacing, run-sheet clarity, fallback planning, and structured human handoff.",
    timeline: tour.itinerary.map((entry) => ({
      time: entry.time,
      stop: entry.title,
      detail: entry.detail,
    })),
    upsells: [
      "Swap one standard scenic stop for a photographer-led golden-hour stop.",
      "Add a private dining or club handoff for the post-tour evening.",
    ],
    weatherFallback:
      "If wind or visibility affects mountain or coastal access, CapePulse switches to a city-heritage or Winelands detour without losing the booking window.",
    packingList: ["Light layer", "Water", "Sunglasses", "Comfort shoes", "Phone charger"],
  };
}

export function createReviewReply(reviewId: string): ReviewReplyDraft {
  const review = reviewItems.find((item) => item.id === reviewId) ?? reviewItems[0];
  const escalationNeeded = review.rating < 4;

  return {
    tone: escalationNeeded ? "recovery" : "warm and grateful",
    response: escalationNeeded
      ? `Thank you for the honest feedback. We are glad the route and overall experience felt strong, and we are reviewing how to create more breathing room for scenic stops on similar Winelands returns. Our team would love to follow up directly and learn where we could have shaped the day better.`
      : `Thank you for traveling with CapePulse. We’re glad the coordination, timing, and guide pacing made the day feel effortless. We’ve shared your note with the operations team because that level of calm, tailored execution is exactly what we aim to deliver every time.`,
    escalationNeeded,
  };
}

export function createSentimentSummary(): SentimentSummary {
  return {
    positiveThemes: ["Fast WhatsApp replies", "Family-aware pacing", "Safety and route confidence"],
    frictionThemes: ["Guests want more explicit scenic-stop options", "Some visitors want stronger arrival briefings"],
    actions: [
      "Add a scenic-stop preference toggle in booking.",
      "Promote the handoff summary earlier in the inquiry flow.",
      "Surface route-confidence notes more visibly on tour detail pages.",
    ],
  };
}

export function createRunSheet(tourSlug: string): RunSheet {
  const tour = getTour(tourSlug);

  return {
    bookingCode: "CP-48219",
    guide: "Lebo",
    vehicle: "Mercedes V-Class",
    pickup: "One&Only Cape Town, 08:30",
    guests: "2 adults + 2 kids (ages 6 and 10)",
    route: tour.itinerary.map((item) => item.title),
    briefing: [
      "Confirm kid seats before departure.",
      "Cape Point wind threshold check at 07:45.",
      "If queues exceed 25 minutes, move penguins earlier and lunch later.",
    ],
    emergencyNote:
      "For any route disruption or guest concern, shift to operations line and trigger the delayed-arrival comms template immediately.",
  };
}

export function createVipResponse(name: string, level: string): VipRequest {
  return {
    requester: name || "Principal guest",
    serviceLevel: (level as VipRequest["serviceLevel"]) || "Black",
    responseTime: "15 minutes",
    nextAction: "A human concierge will confirm route, partner readiness, and secure transfer windows.",
    notice:
      "Security and armoured mobility services are demoed as partner-facilitated and remain subject to licensing, insurance, and availability checks.",
  };
}

export function createHeatPayload() {
  return heatZones.map((zone) => ({
    id: zone.id,
    name: zone.name,
    lat: zone.coordinates[0],
    lng: zone.coordinates[1],
    intensity: zone.intensity,
    activeNow: zone.activeNow,
    headline: zone.headline,
  }));
}
