import { HighlightCard, SectionIntro } from "@/components/cape/ui";
import { journalEntries } from "@/lib/site-data";

export default function JournalPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <SectionIntro
          eyebrow="Journal"
          title="Stories, ideas, and local shortcuts for doing Cape Town well."
          copy="Use the journal to find better timing, smarter route ideas, softer local recommendations, and inspiration for what to book next."
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
