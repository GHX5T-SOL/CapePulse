export type JourneyTier = "Explore" | "Private" | "Signature" | "Black";

export type TourCategory =
  | "coastal"
  | "safari"
  | "winelands"
  | "city"
  | "family"
  | "romance"
  | "fitness"
  | "vip";

export interface ExperienceAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "transport" | "lifestyle" | "vip" | "wellness" | "adventure";
}

export interface TourProduct {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  duration: string;
  groupSize: string;
  basePrice: number;
  tier: JourneyTier;
  category: TourCategory;
  highlights: string[];
  itinerary: Array<{
    time: string;
    title: string;
    detail: string;
  }>;
  addOns: ExperienceAddon[];
}

export interface AvailabilityRequest {
  tourSlug: string;
  date: string;
  groupSize: number;
  tier: JourneyTier;
}

export interface AvailabilitySlot {
  id: string;
  startTime: string;
  guide: string;
  vehicle: string;
  status: "available" | "limited" | "waitlist";
}

export interface QuoteRequest extends AvailabilityRequest {
  addOnIds: string[];
  budgetBand: string;
  pickupArea: string;
}

export interface QuoteBreakdown {
  subtotal: number;
  transport: number;
  premiumTierAdjustment: number;
  addOns: Array<{ id: string; label: string; price: number }>;
  estimatedTotal: number;
  depositDue: number;
  currency: "ZAR";
  caveat: string;
}

export interface ItineraryDraft {
  title: string;
  summary: string;
  timeline: Array<{
    time: string;
    stop: string;
    detail: string;
  }>;
  upsells: string[];
  weatherFallback: string;
  packingList: string[];
}

export interface BookingFlowState {
  step: "inquiry" | "availability" | "quote" | "itinerary" | "confirmation";
  tourSlug: string;
  date: string;
  groupSize: number;
  tier: JourneyTier;
  addOnIds: string[];
  pickupArea: string;
  notes: string;
}

export interface LiveCheckIn {
  id: string;
  userName: string;
  persona: string;
  location: string;
  vibe: string;
  image: string;
  status: "live" | "just-arrived" | "planning";
}

export interface HeatZone {
  id: string;
  name: string;
  coordinates: [number, number];
  intensity: number;
  activeNow: number;
  headline: string;
  emoji: string;
  peakWindow: string;
  topSpots: string[];
  crowdNote: string;
}

export interface UserProfile {
  id: string;
  name: string;
  handle: string;
  bio: string;
  homeBase: string;
  interests: string[];
  avatarLabel: string;
  relationshipStatus: "single" | "taken" | "open to plans";
}

export interface FeedPost {
  id: string;
  authorId: string;
  location: string;
  caption: string;
  media: string;
  reactions: number;
  comments: number;
  checkIns: number;
  timestamp: string;
}

export interface DmThread {
  id: string;
  participants: string[];
  preview: string;
  updatedAt: string;
}

export interface ReviewItem {
  id: string;
  guest: string;
  rating: number;
  channel: string;
  body: string;
}

export interface ReviewReplyDraft {
  tone: string;
  response: string;
  escalationNeeded: boolean;
}

export interface SentimentSummary {
  positiveThemes: string[];
  frictionThemes: string[];
  actions: string[];
}

export interface RunSheet {
  bookingCode: string;
  guide: string;
  vehicle: string;
  pickup: string;
  guests: string;
  route: string[];
  briefing: string[];
  emergencyNote: string;
}

export interface VipRequest {
  requester: string;
  serviceLevel: JourneyTier;
  responseTime: string;
  nextAction: string;
  notice: string;
}

export interface ComplianceBanner {
  id: string;
  title: string;
  detail: string;
}

export interface AlertState {
  kind: "info" | "warning" | "success";
  title: string;
  detail: string;
}

export interface JournalEntry {
  slug: string;
  title: string;
  deck: string;
  readTime: string;
  image: string;
}
