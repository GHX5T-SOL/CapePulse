import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ActionPair } from "@/components/cape/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { tours } from "@/lib/site-data";

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="page-shell space-y-8 py-8">
      <section className="overflow-hidden rounded-[2.2rem] border border-white/70">
        <div className="relative min-h-[34rem]">
          <Image alt={tour.name} className="object-cover" fill priority sizes="100vw" src={tour.image} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08141F] via-[#08141F]/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div className="max-w-4xl space-y-5">
              <Badge className="rounded-full bg-white/16 px-3 py-1.5 text-white hover:bg-white/16">{tour.tier}</Badge>
              <h1 className="text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl">{tour.name}</h1>
              <p className="max-w-2xl text-lg leading-7 text-white/82">{tour.summary}</p>
              <div className="flex flex-wrap gap-3">
                <ActionPair primaryHref="/book" primaryLabel="Book this journey" secondaryHref="/vip" secondaryLabel="Need a premium overlay?" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="chapter-card">
          <p className="section-tag">Journey details</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
              <p className="section-tag">Duration</p>
              <p className="mt-2 font-medium">{tour.duration}</p>
            </div>
            <div className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
              <p className="section-tag">Group</p>
              <p className="mt-2 font-medium">{tour.groupSize}</p>
            </div>
            <div className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
              <p className="section-tag">From</p>
              <p className="mt-2 font-medium">R {tour.basePrice.toLocaleString()}</p>
            </div>
            <div className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
              <p className="section-tag">Category</p>
              <p className="mt-2 font-medium capitalize">{tour.category}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {tour.itinerary.map((stop) => (
              <div key={`${stop.time}-${stop.title}`} className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
                <p className="section-tag">{stop.time}</p>
                <p className="mt-1 font-medium">{stop.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{stop.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="chapter-card">
            <p className="section-tag">Highlights</p>
            <div className="mt-4 space-y-3">
              {tour.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[1.2rem] border border-foreground/8 bg-white/70 px-4 py-3 text-sm text-muted-foreground">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
          <div className="chapter-card">
            <p className="section-tag">Suggested add-ons</p>
            <div className="mt-4 space-y-3">
              {tour.addOns.slice(0, 4).map((addOn) => (
                <div key={addOn.id} className="rounded-[1.2rem] border border-foreground/8 bg-white/70 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">{addOn.name}</p>
                    <span className="text-sm text-muted-foreground">R {addOn.price.toLocaleString()}</span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="chapter-card">
            <Accordion>
              <AccordionItem value="faq-1">
                <AccordionTrigger>How availability-aware is this demo?</AccordionTrigger>
                <AccordionContent>
                  The frontend demonstrates availability logic through seeded API routes. It shows how CapePulse would overlay real booking windows without pretending the mock is live inventory.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Can CapePulse handle special requests?</AccordionTrigger>
                <AccordionContent>
                  Yes. The model is to capture pace, mobility, family, romance, or VIP notes early, then route them into human review and operational handoff when needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Link className="metric-chip w-fit hover:text-foreground" href="/book">
            Continue into the booking flow
          </Link>
        </div>
      </div>
    </div>
  );
}
