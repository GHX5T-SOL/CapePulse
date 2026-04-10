"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRightLeftIcon, BotMessageSquareIcon, MessageSquareQuoteIcon, ScanSearchIcon } from "lucide-react";
import { toast } from "sonner";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { reviewItems } from "@/lib/site-data";
import type { ReviewReplyDraft, RunSheet, SentimentSummary, VipRequest } from "@/lib/types";

export function ConciergeLab() {
  const [tourSlug, setTourSlug] = useState("peninsula-signal-route");
  const [reviewId, setReviewId] = useState(reviewItems[0].id);
  const [requester, setRequester] = useState("Embassy arrival desk");
  const [sentiment, setSentiment] = useState<SentimentSummary | null>(null);
  const [reviewReply, setReviewReply] = useState<ReviewReplyDraft | null>(null);
  const [runSheet, setRunSheet] = useState<RunSheet | null>(null);
  const [vipResponse, setVipResponse] = useState<VipRequest | null>(null);

  const selectedReview = useMemo(() => reviewItems.find((item) => item.id === reviewId) ?? reviewItems[0], [reviewId]);

  async function readJsonOrThrow<T>(response: Response): Promise<T> {
    const payload = (await response.json().catch(() => null)) as T & { error?: string } | null;

    if (!response.ok) {
      throw new Error(payload?.error ?? "The demo request could not be completed.");
    }

    return payload as T;
  }

  async function loadSentiment() {
    try {
      const response = await fetch("/api/demo/sentiment", { method: "POST" });
      const data = await readJsonOrThrow<{ summary: SentimentSummary }>(response);
      setSentiment(data.summary);
      toast.success("Sentiment summary generated");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Sentiment request failed.");
    }
  }

  async function loadReviewReply() {
    try {
      const response = await fetch("/api/demo/review-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewId }),
      });
      const data = await readJsonOrThrow<{ reply: ReviewReplyDraft }>(response);
      setReviewReply(data.reply);
      toast.success("Review draft ready");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Review drafting failed.");
    }
  }

  async function loadRunSheet() {
    try {
      const response = await fetch("/api/demo/run-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tourSlug }),
      });
      const data = await readJsonOrThrow<{ runSheet: RunSheet }>(response);
      setRunSheet(data.runSheet);
      toast.success("Run-sheet generated");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Run-sheet generation failed.");
    }
  }

  async function loadVipRequest() {
    try {
      const response = await fetch("/api/demo/vip-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requester, level: "Black" }),
      });
      const data = await readJsonOrThrow<{ response: VipRequest }>(response);
      setVipResponse(data.response);
      toast.success("VIP intake staged");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "VIP intake failed.");
    }
  }

  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <p className="section-tag">AI workflow lab</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Turn the PDF’s use cases into live product behavior.</h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          These surfaces show the AI pieces that matter operationally: quoting, handoffs, review drafting, sentiment summaries, run-sheets,
          and VIP intake.
        </p>
      </div>
      <Tabs defaultValue="ops">
        <TabsList>
          <TabsTrigger value="ops">Ops</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="vip">VIP intake</TabsTrigger>
        </TabsList>
        <TabsContent value="ops" className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.15fr]">
          <Card className="glass-panel border-white/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRightLeftIcon className="size-5 text-[#00A3E6]" />
                Run-sheet builder
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input onChange={(event) => setTourSlug(event.target.value)} value={tourSlug} />
              <Button className="rounded-full" onClick={loadRunSheet}>
                Generate run-sheet
              </Button>
            </CardContent>
          </Card>
          <Card className="glass-panel border-white/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScanSearchIcon className="size-5 text-[#2F6B4F]" />
                Sentiment and improvement loops
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="rounded-full" onClick={loadSentiment} variant="outline">
                Summarize review sentiment
              </Button>
              {sentiment ? (
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Positive themes</p>
                    <p>{sentiment.positiveThemes.join(" · ")}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Friction themes</p>
                    <p>{sentiment.frictionThemes.join(" · ")}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Next actions</p>
                    <p>{sentiment.actions.join(" · ")}</p>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
          {runSheet ? (
            <Card className="glass-panel border-white/70 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BotMessageSquareIcon className="size-5 text-[#FF6B4A]" />
                  Demo run-sheet preview
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Booking:</span> {runSheet.bookingCode}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Guide:</span> {runSheet.guide}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Vehicle:</span> {runSheet.vehicle}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Pickup:</span> {runSheet.pickup}
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Briefing notes</p>
                  {runSheet.briefing.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : null}
        </TabsContent>
        <TabsContent value="reviews" className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="glass-panel border-white/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquareQuoteIcon className="size-5 text-[#00A3E6]" />
                Review response assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {reviewItems.map((review) => (
                <button
                  key={review.id}
                  className={`w-full rounded-[1.2rem] border px-4 py-3 text-left ${review.id === reviewId ? "border-foreground/12 bg-accent" : "border-foreground/8 bg-white/60"}`}
                  onClick={() => setReviewId(review.id)}
                  type="button"
                >
                  <p className="font-medium">{review.guest}</p>
                  <p className="text-sm text-muted-foreground">{review.rating}★ on {review.channel}</p>
                </button>
              ))}
              <Button className="rounded-full" onClick={loadReviewReply}>
                Draft response
              </Button>
            </CardContent>
          </Card>
          <Card className="glass-panel border-white/70">
            <CardHeader>
              <CardTitle>Selected review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-[1.2rem] border border-foreground/8 bg-white/70 p-4 text-sm leading-7 text-muted-foreground">
                {selectedReview.body}
              </div>
              {reviewReply ? (
                <div className="rounded-[1.2rem] border border-foreground/8 bg-white/70 p-4 text-sm leading-7 text-muted-foreground">
                  <p className="section-tag mb-2">Tone: {reviewReply.tone}</p>
                  <p>{reviewReply.response}</p>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vip" className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="glass-panel border-white/70">
            <CardHeader>
              <CardTitle>Rapid-response intake</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input onChange={(event) => setRequester(event.target.value)} value={requester} />
              <Textarea defaultValue="Principal landing at CTIA. Need discreet transfer corridor, restaurant privacy, and partner security review." />
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full" onClick={loadVipRequest}>
                  Stage VIP request
                </Button>
                <Link className={buttonVariants({ className: "rounded-full", variant: "outline" })} href="/vip">
                  Open VIP command center
                </Link>
              </div>
              {vipResponse ? (
                <div className="rounded-[1.2rem] border border-foreground/8 bg-white/70 p-4 text-sm leading-7 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Requester:</span> {vipResponse.requester}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Service level:</span> {vipResponse.serviceLevel}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Response SLA:</span> {vipResponse.responseTime}
                  </p>
                  <p className="mt-2">{vipResponse.nextAction}</p>
                </div>
              ) : null}
            </CardContent>
          </Card>
          <Card className="glass-panel border-white/70">
            <CardHeader>
              <CardTitle>Demo handling note</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>{requester}</p>
              <p>Initial response SLA: 15 minutes. Human concierge and partner checks remain required for security, insurance, and route control.</p>
              <p>{vipResponse?.notice ?? "WhatsApp is used only as a surfaced channel metaphor here. Sensitive identifiers remain outside automated chat flows."}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
