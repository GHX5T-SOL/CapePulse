import type {
  ComplianceBanner,
  DmThread,
  ExperienceAddon,
  FeedPost,
  HeatZone,
  JournalEntry,
  LiveCheckIn,
  ReviewItem,
  TourProduct,
  UserProfile,
} from "@/lib/types";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover Cape" },
  { href: "/tours", label: "Tours" },
  { href: "/experiences", label: "Experiences" },
  { href: "/social/live-map", label: "CapePulse App" },
  { href: "/concierge", label: "AI Concierge" },
  { href: "/vip", label: "VIP" },
  { href: "/book", label: "Book" },
  { href: "/profile", label: "Profile" },
];

export const spotlightImages = {
  heroA: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1400&q=80",
  heroB: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=1400&q=80",
  tableMountain:
    "https://images.unsplash.com/photo-1606799955515-85468ee78c26?auto=format&fit=crop&w=1200&q=80",
  penguins:
    "https://images.unsplash.com/photo-1580238097712-81c187bd0f72?auto=format&fit=crop&w=1200&q=80",
  boKaap:
    "https://images.unsplash.com/photo-1570527141186-e391a3914c42?auto=format&fit=crop&w=1200&q=80",
  winelands:
    "https://images.unsplash.com/photo-1559160581-1bce5694a595?auto=format&fit=crop&w=1200&q=80",
  safari:
    "https://images.unsplash.com/photo-1544211393-7fdc8fca9f4f?auto=format&fit=crop&w=1200&q=80",
  peninsula:
    "https://images.unsplash.com/photo-1591303872989-2640dc28185b?auto=format&fit=crop&w=1200&q=80",
};

export const siteMetrics = [
  { label: "Party zones live", value: "12" },
  { label: "Tables opening now", value: "48" },
  { label: "Drivers en route", value: "26" },
  { label: "Concierge online", value: "24/7" },
];

export const addOns: ExperienceAddon[] = [
  {
    id: "heli",
    name: "Atlantic helicopter ribbon flight",
    description: "Short scenic helicopter arc above the city bowl and coastline.",
    price: 5800,
    category: "adventure",
  },
  {
    id: "security",
    name: "Discreet security escort",
    description: "Low-profile escort planning for guests who want added peace of mind.",
    price: 9500,
    category: "vip",
  },
  {
    id: "wine-pairing",
    name: "Private cellar pairing",
    description: "Sommelier-led tasting with a curated food pairing.",
    price: 2600,
    category: "lifestyle",
  },
  {
    id: "padel",
    name: "Sunrise padel slot",
    description: "Reserved premium court with rackets and recovery smoothies.",
    price: 950,
    category: "wellness",
  },
  {
    id: "photo-stops",
    name: "Editorial photo stop package",
    description: "Extended scenic windows with professional shot planning.",
    price: 1400,
    category: "lifestyle",
  },
  {
    id: "cobra",
    name: "AC Cobra self-drive escort",
    description: "Classic-car add-on with route prep and concierge support.",
    price: 7200,
    category: "transport",
  },
];

export const tours: TourProduct[] = [
  {
    slug: "cape-peninsula-signal-drive",
    name: "Cape Peninsula Signal Drive",
    tagline: "Chapman's Peak, Cape Point, penguins, and your own pace.",
    summary:
      "A private peninsula day with cinematic coastal driving, curated timing, and flexible pace for couples, families, or high-touch visitors.",
    image: spotlightImages.peninsula,
    duration: "8 hours",
    groupSize: "1-6 guests",
    basePrice: 3850,
    tier: "Private",
    category: "coastal",
    highlights: ["Chapman's Peak", "Cape Point timing strategy", "Boulders penguins", "Kid-friendly lunch routing"],
    itinerary: [
      { time: "08:30", title: "Pickup and espresso brief", detail: "Atlantic Seaboard pickup with weather and road briefing." },
      { time: "10:00", title: "Chapman's Peak run", detail: "Timed photo windows and curve-side scenic pull-offs." },
      { time: "11:30", title: "Cape Point and reserve", detail: "Fast-entry timing and optional short nature walk." },
      { time: "13:45", title: "Penguins and family lunch", detail: "Boulders Beach stop with lunch matched to queue conditions." },
    ],
    addOns,
  },
  {
    slug: "stellenbosch-franschhoek-flair",
    name: "Stellenbosch & Franschhoek Flair",
    tagline: "Cellars, pairings, architecture, and easy elegance.",
    summary:
      "A flexible Winelands day for people who want the valley atmosphere without losing the rhythm of the city.",
    image: spotlightImages.winelands,
    duration: "7.5 hours",
    groupSize: "2-8 guests",
    basePrice: 4300,
    tier: "Signature",
    category: "winelands",
    highlights: ["Stellenbosch heritage streets", "Franschhoek valley lunch", "Pairings by taste profile", "Non-drinker alternatives"],
    itinerary: [
      { time: "09:00", title: "Departure to Stellenbosch", detail: "Route brief and vineyard profile based on mood and budget." },
      { time: "10:15", title: "Estate one", detail: "Cellar tasting or coffee-and-garden alternative." },
      { time: "12:30", title: "Franschhoek lunch", detail: "Long-table lunch with mountain-facing seating." },
      { time: "15:00", title: "Golden-hour return", detail: "Optional final scenic pour or local design stop." },
    ],
    addOns,
  },
  {
    slug: "big-five-day-window",
    name: "Big Five Day Window",
    tagline: "A safari-linked Cape Town extension with comfort-first logistics.",
    summary:
      "A reserve-partnered day built for visitors who want a polished safari add-on from Cape Town with clear timing and honest expectations.",
    image: spotlightImages.safari,
    duration: "10-12 hours",
    groupSize: "2-6 guests",
    basePrice: 6900,
    tier: "Signature",
    category: "safari",
    highlights: ["Reserve-partner availability", "Early departure routing", "Wildlife expectations briefing", "Recovery snacks for return"],
    itinerary: [
      { time: "05:30", title: "Early departure", detail: "Comfort stop and reserve timing buffers built in." },
      { time: "08:45", title: "Arrival and game drive", detail: "Partner-led safari window with guide notes." },
      { time: "13:30", title: "Lunch and rest", detail: "Midday reset with optional wellness add-ons." },
      { time: "17:30", title: "Cape Town return", detail: "Road updates and return ETA shared live." },
    ],
    addOns,
  },
  {
    slug: "city-heritage-afterglow",
    name: "City & Heritage Afterglow",
    tagline: "Table Mountain energy, Bo-Kaap color, Waterfront ease.",
    summary:
      "For travelers who want the city story, not just the postcard. This route blends icons, heritage texture, and contemporary design culture.",
    image: spotlightImages.boKaap,
    duration: "6 hours",
    groupSize: "1-6 guests",
    basePrice: 3200,
    tier: "Explore",
    category: "city",
    highlights: ["Table Mountain timing", "Bo-Kaap heritage notes", "Waterfront finish", "Flexible museum or design stop"],
    itinerary: [
      { time: "09:30", title: "Mountain decision point", detail: "Cableway or scenic alternative depending on weather." },
      { time: "11:00", title: "Bo-Kaap walk", detail: "Context-led heritage stop with respectful pacing." },
      { time: "13:00", title: "Design lunch", detail: "City bowl lunch with local makers nearby." },
      { time: "15:00", title: "Waterfront landing", detail: "Retail, harbor, or departure handoff." },
    ],
    addOns,
  },
  {
    slug: "romance-coastline-club",
    name: "Romance Coastline Club",
    tagline: "Private coastline, champagne timing, and no rushed moments.",
    summary:
      "Cape Town for two, built with softness and polish: scenic timing, private picnic energy, and night-fall handoff into dinner or nightlife.",
    image: spotlightImages.heroB,
    duration: "6.5 hours",
    groupSize: "2 guests",
    basePrice: 4800,
    tier: "Signature",
    category: "romance",
    highlights: ["Sunset-timed route", "Picnic styling", "Dinner handoff", "Photo-stop package"],
    itinerary: [
      { time: "14:00", title: "Late start", detail: "Easy pickup and chilled coastal drive." },
      { time: "16:00", title: "Private golden-hour stop", detail: "Styled setup and optional photographer cueing." },
      { time: "18:30", title: "Dinner landing", detail: "Reserved seating and handoff notes sent ahead." },
    ],
    addOns,
  },
  {
    slug: "black-arrival-corridor",
    name: "Executive Arrival & Secure Movement",
    tagline: "Airport reception, discreet transfers, and high-touch city movement.",
    summary:
      "A high-touch arrival service for principals, families, and guests who want discreet airport reception, premium vehicles, trusted routing, and a seamless handoff into Cape Town.",
    image: spotlightImages.tableMountain,
    duration: "Custom",
    groupSize: "1-4 principals",
    basePrice: 12000,
    tier: "Black",
    category: "vip",
    highlights: ["Airport meet and greet", "Executive chauffeurs", "Discreet routing", "Private concierge line"],
    itinerary: [
      { time: "On request", title: "Advance assessment", detail: "Arrival notes, destination routing, and partner readiness." },
      { time: "Live", title: "Secure movement", detail: "Coordinated transfer and discretionary site planning." },
    ],
    addOns,
  },
];

export const experiences = [
  {
    title: "Helicopter and private air",
    detail: "Helicopter flips, scenic ribbons, and private jet requests built around your timing.",
  },
  {
    title: "Yachts and boat charters",
    detail: "Late-day harbor departures, private decks, sundowners, and curated hospitality.",
  },
  {
    title: "Wellness and fitness bookings",
    detail: "Padel, recovery sessions, running routes, yoga, and the Cape Town wellness circuit.",
  },
  {
    title: "Restaurant and club access",
    detail: "Dinner reservations, club tables, bottle service, and late-night routing handled in one place.",
  },
  {
    title: "Hidden gems and locals-only routes",
    detail: "Coffee, design stores, beaches, and low-key stops that make the city feel personal.",
  },
  {
    title: "Airport, villa, and chauffeur movement",
    detail: "Airport transfers, hourly chauffeurs, villa arrivals, and all-day premium transport.",
  },
  {
    title: "Giftable Cape Town moments",
    detail: "Send a sunset drive, safari day, cellar lunch, or luxury weekend as a fully packaged gift.",
  },
];

export const users: UserProfile[] = [
  {
    id: "maya",
    name: "Maya Singh",
    handle: "@maya.moves",
    bio: "Sea Point regular. Runs before sunrise and collects new lunch spots by neighborhood.",
    homeBase: "Sea Point",
    interests: ["padel", "sunrise runs", "new restaurants"],
    avatarLabel: "MS",
    relationshipStatus: "open to plans",
  },
  {
    id: "noah",
    name: "Noah Becker",
    handle: "@noahfromberlin",
    bio: "Remote worker in town for six weeks, chasing coast roads and easy social nights.",
    homeBase: "Gardens",
    interests: ["coastal drives", "live music", "day trips"],
    avatarLabel: "NB",
    relationshipStatus: "single",
  },
  {
    id: "zinhle",
    name: "Zinhle Dlamini",
    handle: "@zinhle.weekends",
    bio: "Cape Town local. Loves beach energy, good coffee, and soft-luxury city plans.",
    homeBase: "Green Point",
    interests: ["brunch", "waterfront", "yoga"],
    avatarLabel: "ZD",
    relationshipStatus: "taken",
  },
  {
    id: "alex",
    name: "Alex Moreau",
    handle: "@alex.in.transit",
    bio: "Two-week traveler splitting time between wine country and the city.",
    homeBase: "V&A Waterfront",
    interests: ["wine", "design hotels", "helicopter rides"],
    avatarLabel: "AM",
    relationshipStatus: "open to plans",
  },
];

export const feedPosts: FeedPost[] = [
  {
    id: "feed-1",
    authorId: "maya",
    location: "Camps Bay",
    caption: "Sunset is crazy right now. DJ on fire, beach strip packed, and CapePulse just moved us onto a better table.",
    media: spotlightImages.heroA,
    reactions: 214,
    comments: 16,
    checkIns: 24,
    timestamp: "12m ago",
  },
  {
    id: "feed-2",
    authorId: "alex",
    location: "V&A Waterfront",
    caption: "Started with dinner on the harbor, now everyone is deciding between a yacht after-party or Kloof Street.",
    media: spotlightImages.winelands,
    reactions: 388,
    comments: 29,
    checkIns: 41,
    timestamp: "38m ago",
  },
  {
    id: "feed-3",
    authorId: "noah",
    location: "Kloof Street",
    caption: "This strip is moving tonight. Great crowd, no dead spots, and CapePulse sorted pickup plus club entry in one flow.",
    media: spotlightImages.peninsula,
    reactions: 503,
    comments: 44,
    checkIns: 57,
    timestamp: "1h ago",
  },
];

export const dmThreads: DmThread[] = [
  {
    id: "dm-1",
    participants: ["maya", "noah"],
    preview: "Padel at 07:30 then Camps Bay after?",
    updatedAt: "3m ago",
  },
  {
    id: "dm-2",
    participants: ["alex", "zinhle"],
    preview: "Need a dinner table for six near the Waterfront.",
    updatedAt: "11m ago",
  },
];

export const liveCheckIns: LiveCheckIn[] = [
  {
    id: "checkin-1",
    userName: "Maya Singh",
    persona: "Local runner",
    location: "Camps Bay",
    vibe: "Beach clubs are filling fast and the sunset crowd is only getting louder.",
    image: spotlightImages.heroA,
    status: "live",
  },
  {
    id: "checkin-2",
    userName: "Alex Moreau",
    persona: "Wine weekender",
    location: "V&A Waterfront",
    vibe: "Dinner bookings are moving into champagne bars and harbor-side late plans.",
    image: spotlightImages.winelands,
    status: "just-arrived",
  },
  {
    id: "checkin-3",
    userName: "Noah Becker",
    persona: "Digital nomad",
    location: "Kloof Street",
    vibe: "Crowd feels sharp tonight. Good music, easy hopping, and fast driver pickups.",
    image: spotlightImages.heroB,
    status: "planning",
  },
];

export const heatZones: HeatZone[] = [
  {
    id: "camps-bay",
    name: "Camps Bay",
    coordinates: [-33.9519, 18.3773],
    intensity: 0.98,
    activeNow: 274,
    headline: "Beachfront energy, sundowners, bottle service, and a late crowd stacking behind sunset.",
    emoji: "🔥",
    peakWindow: "19:00-23:45",
    topSpots: ["Cafe Caprice", "Chinchilla", "Bilboa socials"],
    crowdNote: "Best for beach clubs, sunset photos, and a glamorous first stop.",
  },
  {
    id: "waterfront",
    name: "V&A Waterfront",
    coordinates: [-33.9036, 18.4219],
    intensity: 0.91,
    activeNow: 322,
    headline: "Harbor-side dinner is peaking and the crowd is rolling from cocktails into yacht and rooftop plans.",
    emoji: "🥂",
    peakWindow: "18:30-23:00",
    topSpots: ["Silo rooftop", "Harbor House", "Bascule late tables"],
    crowdNote: "Best for polished dinner plans, hotel pickups, and luxury after-dark movement.",
  },
  {
    id: "kloof-street",
    name: "Kloof Street",
    coordinates: [-33.9285, 18.4108],
    intensity: 0.88,
    activeNow: 197,
    headline: "The city-bowl crowd is hopping hard here tonight with music, cocktails, and fast venue turnover.",
    emoji: "🎧",
    peakWindow: "20:00-01:30",
    topSpots: ["Kloof rooftops", "Cocktail lounges", "Late supper clubs"],
    crowdNote: "Best for people who want energy without losing style or easy transport links.",
  },
  {
    id: "sea-point",
    name: "Sea Point",
    coordinates: [-33.9106, 18.3904],
    intensity: 0.72,
    activeNow: 193,
    headline: "Promenade movement is handing off into casual bars, dinner energy, and post-gym meetups.",
    emoji: "🪩",
    peakWindow: "18:00-23:00",
    topSpots: ["Promenade meetups", "Supper spots", "After-run bars"],
    crowdNote: "Best for casual plans, friend meetups, and a softer start to the night.",
  },
  {
    id: "long-street",
    name: "Long Street",
    coordinates: [-33.9254, 18.4207],
    intensity: 0.79,
    activeNow: 156,
    headline: "The late crowd is building with DJs, dancing, and spontaneous street-level movement.",
    emoji: "🕺",
    peakWindow: "22:00-03:00",
    topSpots: ["Club strip", "Dance floors", "After-midnight crowd"],
    crowdNote: "Best for high-energy late nights and people who want to keep moving after midnight.",
  },
  {
    id: "clifton-bantry",
    name: "Clifton & Bantry Bay",
    coordinates: [-33.9427, 18.3704],
    intensity: 0.67,
    activeNow: 88,
    headline: "Private villa energy, house dinners, and low-noise luxury movement are trending upward.",
    emoji: "🍾",
    peakWindow: "19:30-00:30",
    topSpots: ["Villa dinners", "Private hosts", "Clifftop after-parties"],
    crowdNote: "Best for private groups, discreet arrivals, and ultra-premium nights.",
  },
];

export const reviewItems: ReviewItem[] = [
  {
    id: "rv-1",
    guest: "Clara M.",
    rating: 5,
    channel: "Google",
    body: "Fast WhatsApp replies, clear timing, and the guide actually adjusted the day around our kids.",
  },
  {
    id: "rv-2",
    guest: "Ravi N.",
    rating: 4,
    channel: "Tripadvisor",
    body: "The route was beautiful and felt safe, but we wanted one more stop built into the Winelands return.",
  },
  {
    id: "rv-3",
    guest: "Melissa J.",
    rating: 5,
    channel: "Google",
    body: "Our airport pickup and restaurant handoff were seamless. This felt far more coordinated than a normal tour company.",
  },
];

export const complianceNotes: ComplianceBanner[] = [
  {
    id: "popia",
    title: "Protected guest data",
    detail:
      "Your profile, payment methods, travel details, and VIP preferences are kept inside protected guest systems designed for privacy.",
  },
  {
    id: "whatsapp",
    title: "Licensed partners and insured routes",
    detail:
      "Tours, transfers, experiences, and premium movement are coordinated with verified operators, vehicles, and route planning standards.",
  },
  {
    id: "reviews",
    title: "Fast concierge response",
    detail:
      "Book online, continue on WhatsApp, or request a private callback for custom journeys, reservations, and after-hours planning.",
  },
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "24-hours-between-sea-point-and-signal-hill",
    title: "24 hours between Sea Point and Signal Hill",
    deck: "A locals-first day plan that moves from wellness into dinner without losing the city’s pace.",
    readTime: "6 min",
    image: spotlightImages.heroA,
  },
  {
    slug: "how-to-do-cape-point-without-losing-the-day",
    title: "How to do Cape Point without losing the whole day",
    deck: "Timing logic, weather windows, and which add-ons are actually worth your energy.",
    readTime: "7 min",
    image: spotlightImages.peninsula,
  },
  {
    slug: "where-cape-town-feels-most-luxurious-right-now",
    title: "Where Cape Town feels most luxurious right now",
    deck: "Not only hotel suites: pacing, silence, viewpoint control, and the right handoffs.",
    readTime: "5 min",
    image: spotlightImages.heroB,
  },
];
