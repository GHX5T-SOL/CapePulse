"use client";

import Link from "next/link";
import { useState } from "react";
import { MessageSquareTextIcon, MicIcon, SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { heatZones } from "@/lib/site-data";
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

const leoQuickActions = [
  { label: "Quick book a tour", href: "/book" },
  { label: "Open live map", href: "/social/live-map" },
  { label: "Airport transfer", href: "/book" },
  { label: "Private request", href: "/vip" },
];

const leoQuickPrompts = [
  "Plan me a Peninsula day with penguins and lunch.",
  "Where is hot tonight for dinner and music?",
  "I need an airport pickup and villa check-in.",
  "Can you help me gift an experience?",
];

type ChatMessage = {
  id: number;
  role: "leo" | "guest";
  text: string;
};

function getLeoReply(message: string) {
  const prompt = message.toLowerCase();

  if (prompt.includes("tonight") || prompt.includes("music") || prompt.includes("club") || prompt.includes("dinner")) {
    return "For a polished dinner-to-music night, I would start with the Waterfront for early cocktails, then move into Camps Bay for sunset or Kloof Street for later energy. I can line up a table and a return driver in the same booking flow.";
  }

  if (prompt.includes("airport") || prompt.includes("villa") || prompt.includes("chauffeur") || prompt.includes("transfer")) {
    return "I can stage airport reception, chauffeur timing, villa check-in, and a return transfer so the whole arrival feels seamless. Start in the booking desk and choose Transfers or VIP depending on how hands-on you want it.";
  }

  if (prompt.includes("gift") || prompt.includes("surprise") || prompt.includes("experience")) {
    return "A sunset drive, cellar lunch, yacht session, or couples Peninsula day all work beautifully as giftable experiences. CapePulse can package the booking with a note and direct delivery to the recipient.";
  }

  if (prompt.includes("safari") || prompt.includes("wine") || prompt.includes("peninsula") || prompt.includes("tour")) {
    return "If you want the classic Cape Town arc, I would shortlist the Peninsula Signal Drive, Stellenbosch & Franschhoek Flair, or the Big Five Day Window depending on whether you want coastline, wine country, or wildlife.";
  }

  return "I can help you choose the best tour, find what is hot tonight, arrange movement around Cape Town, or stage a premium request. Tell me the mood, budget, and timing and I will point you to the best next step.";
}

export function LeoLionDock() {
  const [draft, setDraft] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "leo",
      text: "Hi, I'm Leo. Ask me about tours, nightlife, transfers, gifting, or VIP movement and I will point you in the right direction.",
    },
    {
      id: 2,
      role: "guest",
      text: "Where should we go tonight if we want a fun crowd and easy transport?",
    },
    {
      id: 3,
      role: "leo",
      text: "Camps Bay is perfect for sunset energy and Kloof Street is stronger later. I can line up dinner, club entry, and a return pickup in one move.",
    },
  ]);

  function addConversation(prompt: string) {
    const cleanPrompt = prompt.trim();

    if (!cleanPrompt) {
      return;
    }

    setMessages((current) => {
      const nextId = current.length + 1;

      return [
        ...current,
        { id: nextId, role: "guest", text: cleanPrompt },
        { id: nextId + 1, role: "leo", text: getLeoReply(cleanPrompt) },
      ];
    });
  }

  function handleSend() {
    if (!draft.trim()) {
      return;
    }

    addConversation(draft);
    setDraft("");
  }

  function handleVoiceDemo() {
    if (isListening) {
      return;
    }

    setIsListening(true);

    window.setTimeout(() => {
      const transcript = "Leo, can you set up dinner, a driver, and somewhere fun after?";

      setIsListening(false);
      setDraft("");
      addConversation(transcript);
    }, 1400);
  }

  return (
    <Dialog>
      <div className="fixed bottom-3 right-3 z-50 flex flex-col items-end gap-2 sm:bottom-4 sm:right-4">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          className="glass-panel hidden max-w-[15rem] rounded-[1.7rem] px-4 py-3 text-sm leading-6 text-foreground shadow-[0_20px_60px_rgba(8,20,31,0.18)] sm:block"
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          Hi, I&apos;m Leo. Want a tour, table, transfer, or VIP arrival?
        </motion.div>
        <DialogTrigger className="group glass-strong relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/80 shadow-[0_24px_80px_rgba(8,20,31,0.2)] sm:h-[6.7rem] sm:w-[6.7rem] sm:rounded-[2rem]">
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
      <DialogContent className="mx-3 max-h-[86svh] overflow-y-auto rounded-[2rem] border-white/80 bg-white/92 p-0 backdrop-blur-xl sm:mx-0 sm:max-w-3xl">
        <DialogHeader className="border-b border-foreground/8 px-6 py-5">
          <DialogTitle className="text-2xl">Leo, your CapePulse concierge</DialogTitle>
          <DialogDescription>
            Ask for the best route, tonight&apos;s hottest zone, a polished pickup, or a premium arrival plan and Leo points you to the right next step.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="rounded-[1.6rem] border border-foreground/8 bg-white/76 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <MessageSquareTextIcon className="size-5 text-[#FF6B4A]" />
                <p className="font-semibold">Chat with Leo</p>
              </div>
              <span className="metric-chip">Voice demo ready</span>
            </div>
            <div className="mt-4 max-h-[21rem] space-y-3 overflow-y-auto pr-1">
              {messages.map((message) => (
                <div key={message.id} className={cn("flex", message.role === "guest" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] rounded-[1.3rem] px-4 py-3 text-sm leading-6",
                      message.role === "guest"
                        ? "bg-[#08141F] text-white"
                        : "border border-foreground/8 bg-white/92 text-foreground"
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="section-tag">Suggested questions</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {leoQuickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    className="rounded-full border border-foreground/8 bg-white/82 px-3 py-2 text-left text-sm font-medium text-foreground transition hover:bg-white"
                    onClick={() => addConversation(prompt)}
                    type="button"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Input
                className="h-12 rounded-full bg-white/90 px-4"
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask Leo anything about Cape Town..."
                value={draft}
              />
              <Button className="h-12 rounded-full px-5 text-white" onClick={handleSend}>
                Send
              </Button>
              <Button className="h-12 rounded-full px-5" onClick={handleVoiceDemo} type="button" variant="outline">
                <MicIcon className="size-4" />
                {isListening ? "Listening..." : "Voice demo"}
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[1.6rem] border border-foreground/8 bg-white/76 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <SparklesIcon className="size-5 text-[#00A3E6]" />
                <p className="font-semibold">Recommended actions</p>
              </div>
              <div className="mt-4 space-y-3">
                {leoActions.map((action) => (
                  <Link
                    key={action.title}
                    className="block rounded-[1.3rem] border border-foreground/8 bg-white/86 p-4 transition hover:bg-white"
                    href={action.href}
                  >
                    <p className="font-medium">{action.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{action.copy}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {leoQuickActions.map((action) => (
                  <Link
                    key={action.label}
                    className={cn(buttonVariants({ variant: "outline" }), "h-11 justify-center rounded-full")}
                    href={action.href}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[1.6rem] border border-foreground/8 bg-white/76 p-4 sm:p-5">
              <p className="section-tag">Right now in Cape Town</p>
              <div className="mt-3 space-y-3">
                {heatZones.slice(0, 2).map((zone) => (
                  <div key={zone.id} className="rounded-[1.3rem] border border-foreground/8 bg-white/86 p-4">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
