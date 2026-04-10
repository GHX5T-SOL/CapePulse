import { HighlightCard, SectionIntro } from "@/components/cape/ui";
import { journalEntries, spotlightImages, tours } from "@/lib/site-data";

export default function DiscoverPage() {
  const discoverCards = [
    {
      title: "Today in Cape Town",
      detail: "Start with Sea Point movement, then shift into a city lunch or late coastline depending on wind.",
      media: spotlightImages.heroA,
    },
    {
      title: "Soft-luxury city routes",
      detail: "Design hotels, slow coffee, harbor light, and dinner handoffs without losing control of the day.",
      media: spotlightImages.heroB,
    },
    {
      title: "Shoulder-season wins",
      detail: "The province is no longer only a peak-season story. Smart pacing keeps the city alive all year.",
      media: spotlightImages.tableMountain,
    },
  ];

  return (
    <div className="page-shell space-y-10 py-8">
      <div className="chapter-card space-y-5">
        <SectionIntro
          eyebrow="Discover Cape"
          title="Editorial routes through a city that changes by neighborhood, light, and pace."
          copy="Discovery is grouped by mood: coastline, culture, fitness, nightlife, family pacing, and premium movement. The goal is to move people into the right route instead of showing every option at once."
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {discoverCards.map((card) => (
          <HighlightCard key={card.title} detail={card.detail} media={card.media} title={card.title} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="chapter-card">
          <p className="section-tag">Neighborhood logic</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Sea Point for fitness, coffee, and promenade life",
              "Camps Bay for beach clubs and sunset energy",
              "Bo-Kaap for heritage texture and color",
              "Waterfront for harbor ease, shopping, and arrivals",
              "Franschhoek for valley polish and pairings",
              "City Bowl for architecture, galleries, and dinner drift",
            ].map((item) => (
              <div key={item} className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4 text-sm leading-6 text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="chapter-card">
          <p className="section-tag">Recommended reads</p>
          <div className="mt-4 space-y-4">
            {journalEntries.map((entry) => (
              <div key={entry.slug} className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
                <p className="font-medium">{entry.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{entry.deck}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tours.slice(0, 6).map((tour) => (
          <HighlightCard
            key={tour.slug}
            detail={tour.tagline}
            href={`/tours/${tour.slug}`}
            media={tour.image}
            stat={tour.category}
            title={tour.name}
          />
        ))}
      </div>
    </div>
  );
}
