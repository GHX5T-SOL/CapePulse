import { HighlightCard, SectionIntro } from "@/components/cape/ui";
import { tours } from "@/lib/site-data";

export default function ToursPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <SectionIntro
          eyebrow="Tours"
          title="Cape Town journeys built for coastlines, city icons, safaris, romance, family days, and premium arrivals."
          copy="Every tour is designed to feel easy to choose, easy to customize, and easy to book with the right upgrades already close by."
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
