import { NextResponse } from "next/server";

import { createSentimentSummary } from "@/lib/demo";

export async function POST() {
  return NextResponse.json({
    summary: createSentimentSummary(),
  });
}
