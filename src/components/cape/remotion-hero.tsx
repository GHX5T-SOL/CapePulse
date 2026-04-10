"use client";

import Link from "next/link";
import { SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";

import { ActionPair, LogoMark } from "@/components/cape/ui";
import { Badge } from "@/components/ui/badge";
import { siteMetrics } from "@/lib/site-data";

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#08141F]/18 via-transparent to-[#08141F]/66" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/28 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 pt-24 sm:px-8 sm:pb-8 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-end">
              <Badge className="mb-6 w-fit gap-2 rounded-full border border-white/60 bg-white/20 px-3 py-1.5 text-white hover:bg-white/20">
                <SparklesIcon className="size-3.5" />
                Liquid-glass Cape Town intelligence
              </Badge>
              <div className="max-w-4xl space-y-5">
                <h1 className="text-shadow-soft font-heading text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
                  A living front door to Cape Town.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
                  Book private journeys, watch the city move in real time, and plan with an AI concierge that knows when to quote,
                  when to route, and when to hand off to a human.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <ActionPair
                    primaryHref="/book"
                    secondaryHref="/concierge"
                    primaryLabel="Start your journey"
                    secondaryLabel="Meet the concierge"
                  />
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
                <Link className="section-tag text-white/72" href="/social/live-map">
                  Live map
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {siteMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.4rem] border border-white/20 bg-white/10 p-4">
                    <p className="font-heading text-3xl text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-white/72">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[1.4rem] border border-white/20 bg-white/10 p-4">
                <p className="section-tag text-white/72">Today’s signal</p>
                <p className="mt-2 text-lg text-white">Camps Bay is peaking toward sunset, while Peninsula routes stay cleaner before 11:00.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
