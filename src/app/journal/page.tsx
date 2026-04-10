import { HighlightCard, SectionIntro } from "@/components/cape/ui";
import { journalEntries } from "@/lib/site-data";

export default function JournalPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <SectionIntro
          eyebrow="Journal"
          title="The editorial layer: practical, atmospheric, and tied to actual movement."
          copy="The journal keeps the city feeling alive between booking decisions. It is also the natural home for long-tail search, itinerary education, and seasonal storytelling."
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {journalEntries.map((entry) => (
          <HighlightCard key={entry.slug} detail={entry.deck} media={entry.image} stat={entry.readTime} title={entry.title} />
        ))}
      </div>
    </div>
  );
}
