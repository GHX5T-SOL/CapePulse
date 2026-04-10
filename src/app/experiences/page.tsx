import { SectionIntro } from "@/components/cape/ui";
import { experiences } from "@/lib/site-data";

export default function ExperiencesPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <SectionIntro
          eyebrow="Experiences"
          title="Everything that makes Cape Town feel bigger than a single booking."
          copy="Add helicopters, yachts, padel, nightlife, dining, airport movement, villa planning, and gifting to any day so the trip feels complete."
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((item) => (
          <div key={item.title} className="chapter-card">
            <p className="font-semibold">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
