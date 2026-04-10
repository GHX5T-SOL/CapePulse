"use client";

import Link from "next/link";
import { MessageSquareTextIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { heatZones, tours } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const leoActions = [
  {
    title: "Book a tour",
    copy: "Peninsula, Winelands, safari, city, couples, and family plans.",
    href: "/book",
  },
  {
    title: "Plan tonight",
    copy: "See where the city is hot, reserve a table, and arrange a ride.",
    href: "/social/live-map",
  },
  {
    title: "Airport or chauffeur",
    copy: "Secure pickups, drop-offs, and polished all-day movement.",
    href: "/book",
  },
  {
    title: "VIP support",
    copy: "Private arrivals, luxury movement, and premium guest handling.",
    href: "/vip",
  },
];

export function LeoLionDock() {
  return (
    <Dialog>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          className="glass-panel max-w-[15rem] rounded-[1.7rem] px-4 py-3 text-sm leading-6 text-foreground shadow-[0_20px_60px_rgba(8,20,31,0.18)]"
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          Hi, I&apos;m Leo. Want a tour, table, transfer, or VIP arrival?
        </motion.div>
        <DialogTrigger className="group glass-strong relative flex h-[6.7rem] w-[6.7rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/80 shadow-[0_24px_80px_rgba(8,20,31,0.2)]">
          <video
            aria-hidden="true"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/media/Leo_avatar.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground">
            Leo
          </div>
        </DialogTrigger>
      </div>
      <DialogContent className="max-h-[88svh] overflow-y-auto rounded-[2rem] border-white/80 bg-white/92 p-0 backdrop-blur-xl sm:max-w-3xl">
        <DialogHeader className="border-b border-foreground/8 px-6 py-5">
          <DialogTitle className="text-2xl">Leo, your CapePulse concierge</DialogTitle>
          <DialogDescription>
            Ask for the best route, tonight&apos;s hottest zone, a polished pickup, or a premium arrival plan and Leo points you to the right next step.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 p-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="chapter-card">
              <div className="flex items-center gap-3">
                <SparklesIcon className="size-5 text-[#00A3E6]" />
                <p className="font-semibold">Start here</p>
              </div>
              <div className="mt-4 space-y-3">
                {leoActions.map((action) => (
                  <Link
                    key={action.title}
                    className="block rounded-[1.3rem] border border-foreground/8 bg-white/72 p-4 transition hover:bg-white"
                    href={action.href}
                  >
                    <p className="font-medium">{action.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{action.copy}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="chapter-card">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="size-5 text-[#2F6B4F]" />
                <p className="font-semibold">Guest-ready flow</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Leo can route you into bookings, hold premium requests, and keep your next move tied to the same guest profile and payment flow.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link className={cn(buttonVariants(), "rounded-full px-5 text-white")} href="/book">
                  Open booking desk
                </Link>
                <Link className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-5")} href="/profile">
                  Open my profile
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="chapter-card">
              <div className="flex items-center gap-3">
                <MessageSquareTextIcon className="size-5 text-[#FF6B4A]" />
                <p className="font-semibold">Tonight&apos;s pulse</p>
              </div>
              <div className="mt-4 grid gap-3">
                {heatZones.slice(0, 3).map((zone) => (
                  <div key={zone.id} className="rounded-[1.3rem] border border-foreground/8 bg-white/72 p-4">
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
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{zone.headline}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="chapter-card">
              <p className="section-tag">Recommended journeys</p>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {tours.slice(0, 3).map((tour) => (
                  <div key={tour.slug} className="rounded-[1.3rem] border border-foreground/8 bg-white/72 p-4">
                    <p className="font-medium">{tour.name}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{tour.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
