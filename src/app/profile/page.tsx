import Link from "next/link";

import { SectionIntro } from "@/components/cape/ui";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const upcomingBookings = [
  {
    title: "Cape Peninsula Signal Drive",
    date: "18 May 2026",
    status: "Confirmed",
    amount: "R 14,980",
  },
  {
    title: "Camps Bay club table and transfer",
    date: "21 May 2026",
    status: "Awaiting final guest names",
    amount: "R 6,450",
  },
  {
    title: "CTIA airport pickup",
    date: "25 May 2026",
    status: "Driver assignment pending",
    amount: "R 980",
  },
];

const pastBookings = [
  { title: "Franschhoek cellar day", date: "02 Apr 2026", amount: "R 11,600" },
  { title: "Sea Point padel morning", date: "19 Mar 2026", amount: "R 1,450" },
  { title: "Waterfront dinner reservation", date: "11 Mar 2026", amount: "R 650" },
];

const paymentMethods = [
  { label: "Visa ending 2345", note: "Primary card · expires 08/28" },
  { label: "Mastercard ending 9102", note: "Travel card · expires 11/27" },
  { label: "Apple Pay", note: "Enabled on iPhone and Apple Watch" },
  { label: "USDC wallet", note: "Crypto payments enabled" },
];

const supportMessages = [
  { title: "Birthday gift itinerary", note: "Concierge replied 14 minutes ago" },
  { title: "Villa arrival timing", note: "Driver update sent this morning" },
  { title: "Refund split for group booking", note: "Finance team responded yesterday" },
];

const coupons = [
  { title: "Sunset credit", note: "R 850 toward a yacht, helicopter, or sunset drive" },
  { title: "Airport loyalty upgrade", note: "One complimentary executive vehicle upgrade" },
  { title: "Dining priority pass", note: "Priority placement at selected partner restaurants" },
];

export default function ProfilePage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <SectionIntro
          eyebrow="My Profile"
          title="Waseem Dada’s CapePulse dashboard."
          copy="Manage cards, bookings, guest details, documents, support threads, and rewards from the same place you book tours, nightlife, transfers, and premium movement."
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-4">
          <div className="chapter-card">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.6rem] bg-[#08141F] text-2xl font-semibold text-white">
                  WD
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">Waseem Dada</h1>
                  <p className="mt-1 text-sm text-muted-foreground">Black tier member · Concierge access · Cape Town + Dubai</p>
                </div>
              </div>
              <span className="metric-chip self-start">Profile 100%</span>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
              <div className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                <p className="section-tag">Contact</p>
                <p className="mt-2 font-medium text-foreground">waseem@capepulse.travel</p>
                <p>+27 82 555 0101</p>
              </div>
              <div className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                <p className="section-tag">Address</p>
                <p className="mt-2">One&Only Cape Town, Dock Road, Victoria & Alfred Waterfront</p>
              </div>
              <div className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                <p className="section-tag">Travel preferences</p>
                <p className="mt-2">Window seat vehicles, chilled water, no loud call confirmations, fast airport movement.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className={cn(buttonVariants(), "rounded-full px-5 text-white")} href="/book">
                Book something new
              </Link>
              <Link className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-5")} href="/social/live-map">
                Open CapePulse map
              </Link>
            </div>
          </div>
          <div className="chapter-card">
            <p className="section-tag">Verification and documents</p>
            <div className="mt-4 grid gap-3">
              {[
                "Email confirmed",
                "Mobile verified",
                "Password updated 6 days ago",
                "Proof of address uploaded",
                "ID/passport record on file",
                "VIP preference profile completed",
              ].map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-foreground/8 bg-white/72 px-4 py-3 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="chapter-card">
            <p className="section-tag">Payment methods</p>
            <div className="mt-4 space-y-3">
              {paymentMethods.map((item) => (
                <div key={item.label} className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                  <p className="font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="chapter-card">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">Upcoming bookings</p>
              <span className="metric-chip">3 active</span>
            </div>
            <div className="mt-4 grid gap-3">
              {upcomingBookings.map((booking) => (
                <div key={booking.title} className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-medium">{booking.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{booking.amount}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{booking.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="chapter-card">
              <p className="font-medium">Past bookings</p>
              <div className="mt-4 space-y-3">
                {pastBookings.map((booking) => (
                  <div key={booking.title} className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                    <p className="font-medium">{booking.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{booking.date}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{booking.amount}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="chapter-card">
              <p className="font-medium">Support messages</p>
              <div className="mt-4 space-y-3">
                {supportMessages.map((item) => (
                  <div key={item.title} className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="chapter-card">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">Earned perks and gift credits</p>
              <span className="metric-chip">Available now</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {coupons.map((item) => (
                <div key={item.title} className="rounded-[1.2rem] border border-foreground/8 bg-white/72 p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
