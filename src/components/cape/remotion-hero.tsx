"use client";

import Link from "next/link";
import { ArrowUpRightIcon, SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";

import { LogoMark } from "@/components/cape/ui";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { heatZones, siteMetrics } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function RemotionHero() {
  return (
    <section className="page-shell relative pb-10 pt-3">
      <div className="relative min-h-[82svh] overflow-hidden rounded-[2rem] border border-white/70">
        <div className="hero-mesh" />
        <video
          aria-hidden="true"
          autoPlay
          className="h-[82svh] w-full object-cover"
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1600&q=80"
          preload="metadata"
        >
          <source src="/media/capepulse-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#08141F]/24 via-[#08141F]/8 to-[#08141F]/76" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 pt-24 sm:px-8 sm:pb-8 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-end">
              <Badge className="mb-6 w-fit gap-2 rounded-full border border-white/60 bg-white/20 px-3 py-1.5 text-white hover:bg-white/20">
                <SparklesIcon className="size-3.5" />
                Cape Town booking, concierge, and live-city access
              </Badge>
              <div className="max-w-4xl space-y-6">
                <h1 className="text-shadow-soft font-heading text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
                  Tours, nightlife, transfers, and VIP movement in one Cape Town app.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/92 sm:text-xl">
                  Book Peninsula tours, safaris, wine days, airport transfers, chauffeurs, club tables, villas, helicopters, private jets,
                  and discreet security support. Then watch the CapePulse heat map to see what&apos;s popping across Cape Town right now.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Private tours",
                    "Airport transfers",
                    "Nightlife tables",
                    "Luxury villas",
                    "VIP security",
                    "Private air",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-white/30 bg-white/14 px-4 py-2 text-sm font-medium text-white/92 backdrop-blur-md">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-6 text-white")} href="/book">
                    Book anything in Cape Town
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "h-12 rounded-full border-white/50 bg-white/16 px-6 text-white hover:bg-white/24 hover:text-white"
                    )}
                    href="/social/live-map"
                  >
                    Open the CapePulse map
                  </Link>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              className="glass-panel refractive-border self-end rounded-[2rem] p-5 text-white"
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-start justify-between gap-4">
                <LogoMark compact />
                <Link className="section-tag text-white/80" href="/social/live-map">
                  Party heat map live
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {siteMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.4rem] border border-white/20 bg-white/10 p-4">
                    <p className="font-heading text-3xl text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-white/82">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[1.4rem] border border-white/20 bg-white/10 p-4">
                <p className="section-tag text-white/80">Tonight&apos;s heat</p>
                <div className="mt-3 space-y-3">
                  {heatZones.slice(0, 3).map((zone) => (
                    <div key={zone.id} className="flex items-center justify-between gap-3 rounded-[1.2rem] border border-white/10 bg-white/8 px-3 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{zone.emoji}</span>
                        <div>
                          <p className="font-medium text-white">{zone.name}</p>
                          <p className="text-sm text-white/72">{zone.peakWindow}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-white/78">
                        <span>{zone.activeNow}</span>
                        <ArrowUpRightIcon className="size-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
