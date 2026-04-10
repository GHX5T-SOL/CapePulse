"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MessageSquareTextIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import { toast } from "sonner";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { heatZones, tours } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ConciergeLab() {
  const [tourSlug, setTourSlug] = useState(tours[0].slug);
  const [requester, setRequester] = useState("Waseem Dada");
  const [vipBrief, setVipBrief] = useState("Landing at CTIA, need airport reception, private transfer, villa check-in, and a dinner reservation.");
  const [vipReply, setVipReply] = useState("");

  const selectedTour = useMemo(() => tours.find((tour) => tour.slug === tourSlug) ?? tours[0], [tourSlug]);

  function stageVipRequest() {
    setVipReply(
      "Your request has been staged with the private desk. CapePulse is preparing an arrival flow with premium vehicle placement, villa timing, and post-landing dining options."
    );
    toast.success("Private request staged");
  }

  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <p className="section-tag">Concierge</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Ask once. Get the next best move.</h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          CapePulse helps guests decide what to book, where to go tonight, and how to move through the city with less friction and more confidence.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="chapter-card">
            <div className="flex items-center gap-3">
              <SparklesIcon className="size-5 text-[#00A3E6]" />
              <p className="font-semibold">Build my day plan</p>
            </div>
            <div className="mt-4 grid gap-3">
              {tours.slice(0, 4).map((tour) => (
                <button
                  key={tour.slug}
                  className={cn(
                    "rounded-[1.2rem] border px-4 py-3 text-left transition",
                    tourSlug === tour.slug ? "border-[#08141F]/18 bg-accent" : "border-foreground/8 bg-white/60"
                  )}
                  onClick={() => setTourSlug(tour.slug)}
                  type="button"
                >
                  <p className="font-medium">{tour.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{tour.tagline}</p>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-[1.3rem] border border-foreground/8 bg-white/72 p-4">
              <p className="font-medium">{selectedTour.name}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{selectedTour.summary}</p>
              <div className="mt-4 grid gap-3">
                {selectedTour.itinerary.slice(0, 3).map((stop) => (
                  <div key={`${stop.time}-${stop.title}`} className="rounded-[1.1rem] border border-foreground/8 bg-white/70 p-4">
                    <p className="section-tag">{stop.time}</p>
                    <p className="mt-1 font-medium">{stop.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stop.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="chapter-card">
            <div className="flex items-center gap-3">
              <MessageSquareTextIcon className="size-5 text-[#FF6B4A]" />
              <p className="font-semibold">Tonight&apos;s best move</p>
            </div>
            <div className="mt-4 grid gap-3">
              {heatZones.slice(0, 3).map((zone) => (
                <div key={zone.id} className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{zone.emoji}</span>
                      <div>
                        <p className="font-medium">{zone.name}</p>
                        <p className="text-sm text-muted-foreground">{zone.peakWindow}</p>
                      </div>
                    </div>
                    <span className="metric-chip">{zone.activeNow} live</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{zone.crowdNote}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link className={cn(buttonVariants(), "rounded-full px-5 text-white")} href="/social/live-map">
                Open live map
              </Link>
              <Link className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-5")} href="/book">
                Reserve a table or ride
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="chapter-card">
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-5 text-[#2F6B4F]" />
              <p className="font-semibold">Private request line</p>
            </div>
            <div className="mt-4 space-y-3">
              <Input onChange={(event) => setRequester(event.target.value)} value={requester} />
              <Textarea className="min-h-36" onChange={(event) => setVipBrief(event.target.value)} value={vipBrief} />
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full" onClick={stageVipRequest}>
                  Stage private request
                </Button>
                <Link className={buttonVariants({ className: "rounded-full", variant: "outline" })} href="/vip">
                  Open VIP page
                </Link>
              </div>
            </div>
          </div>
          <div className="chapter-card">
            <p className="section-tag">Concierge response</p>
            <div className="mt-4 rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4 text-sm leading-7 text-muted-foreground">
              <p className="font-medium text-foreground">{requester}</p>
              <p className="mt-2">{vipReply || "Share the timing, guest count, arrival point, and desired experience, and CapePulse will shape the next step."}</p>
            </div>
          </div>
          <div className="chapter-card">
            <p className="font-medium">Popular concierge prompts</p>
            <div className="mt-4 grid gap-3">
              {[
                "Build me a relaxed Cape Town day with lunch, penguins, and sunset drinks.",
                "What is the hottest zone tonight for dinner and a fun crowd?",
                "I need an airport pickup, a villa handoff, and a driver on standby.",
                "Plan something giftable for a couple visiting for the weekend.",
              ].map((prompt) => (
                <div key={prompt} className="rounded-[1.2rem] border border-foreground/8 bg-white/72 px-4 py-3 text-sm text-muted-foreground">
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
