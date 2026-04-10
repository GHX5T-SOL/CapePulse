import { HighlightCard, SectionIntro } from "@/components/cape/ui";
import { tours } from "@/lib/site-data";

export default function ToursPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <SectionIntro
          eyebrow="Tours"
          title="Filterable journeys across coastline, city, safari, romance, family pace, and VIP movement."
          copy="Each tour is presented like a product and an operating plan at the same time. That means strong media, clear pricing posture, realistic durations, and route credibility."
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tours.map((tour) => (
          <HighlightCard
            key={tour.slug}
            detail={`${tour.summary} Duration: ${tour.duration}. Group: ${tour.groupSize}.`}
            href={`/tours/${tour.slug}`}
            media={tour.image}
            stat={`${tour.tier} · R ${tour.basePrice.toLocaleString()}`}
            title={tour.name}
          />
        ))}
      </div>
    </div>
  );
}
