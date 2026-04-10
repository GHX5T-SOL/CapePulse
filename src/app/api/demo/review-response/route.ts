import { NextResponse } from "next/server";
import { z } from "zod";

import { createReviewReply } from "@/lib/demo";

const schema = z.object({
  reviewId: z.string(),
});

export async function POST(request: Request) {
  const result = schema.safeParse(await request.json().catch(() => null));

  if (!result.success) {
    return NextResponse.json(
      {
        error: "Invalid request payload.",
        issues: result.error.flatten(),
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    reply: createReviewReply(result.data.reviewId),
  });
}
