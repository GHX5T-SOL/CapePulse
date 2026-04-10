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
      <div className="relative min-h-[40rem] overflow-hidden rounded-[2rem] border border-white/70 sm:min-h-[42rem] lg:min-h-[44rem] xl:min-h-[46rem]">
        <div className="hero-mesh" />
        <video
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1600&q=80"
          preload="metadata"
        >
          <source src="/media/capepulse-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#08141F]/34 via-[#08141F]/16 to-[#08141F]/78" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/20 to-transparent" />
        <div className="relative z-10 px-4 py-6 sm:px-8 sm:py-8 md:px-10 lg:py-10">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_25rem] xl:items-start xl:gap-8">
            <div className="max-w-[44rem] space-y-5 sm:space-y-6">
              <Badge className="w-fit gap-2 rounded-full border border-white/60 bg-white/20 px-3 py-1.5 text-white hover:bg-white/20">
                <SparklesIcon className="size-3.5" />
                Cape Town booking, concierge, and live-city access
              </Badge>
              <h1 className="text-shadow-soft font-heading max-w-[40rem] text-4xl font-semibold leading-[0.92] tracking-tight text-white sm:text-5xl lg:max-w-[44rem] lg:text-6xl xl:text-[4.7rem] 2xl:text-[5rem]">
                Tours, nightlife, transfers, and VIP movement in one Cape Town app.
              </h1>
              <p className="max-w-xl text-sm leading-6 text-white/92 sm:hidden">
                Book tours, airport transfers, nightlife tables, luxury stays, and VIP arrivals from one Cape Town platform.
              </p>
              <p className="hidden max-w-[40rem] text-base leading-7 text-white/92 sm:block sm:text-lg sm:leading-8 lg:text-[1.35rem]">
                Book Peninsula tours, safaris, wine days, airport transfers, chauffeurs, club tables, villas, helicopters, private jets,
                and discreet security support. Then watch the CapePulse heat map to see what&apos;s popping across Cape Town right now.
              </p>
              <div className="hidden flex-wrap gap-2 sm:flex sm:gap-3">
                {[
                  "Private tours",
                  "Airport transfers",
                  "Nightlife tables",
                  "Luxury villas",
                  "VIP security",
                  "Private air",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/30 bg-white/14 px-3 py-1.5 text-xs font-medium text-white/92 backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                <Link className={cn(buttonVariants({ size: "lg" }), "h-12 w-full justify-center rounded-full px-6 text-white sm:w-auto")} href="/book">
                  Book anything in Cape Town
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-12 w-full justify-center rounded-full border-white/50 bg-white/16 px-6 text-white hover:bg-white/24 hover:text-white sm:w-auto"
                  )}
                  href="/social/live-map"
                >
                  Open the CapePulse map
                </Link>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-3 xl:hidden">
                {siteMetrics.slice(0, 4).map((metric) => (
                  <div key={metric.label} className="rounded-[1.2rem] border border-white/16 bg-white/10 p-3">
                    <p className="font-heading text-2xl text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-white/78">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden xl:flex xl:justify-end">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                className="glass-panel refractive-border w-full max-w-[25rem] rounded-[2rem] p-5 text-white"
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <LogoMark compact />
                  <Link className="section-tag text-white/80" href="/social/live-map">
                    Party heat map live
                  </Link>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {siteMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.3rem] border border-white/20 bg-white/10 p-4">
                      <p className="font-heading text-[2rem] leading-none text-white">{metric.value}</p>
                      <p className="mt-2 text-sm text-white/82">{metric.label}</p>
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
      </div>
    </section>
  );
}
