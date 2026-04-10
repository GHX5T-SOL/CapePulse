import { NextResponse } from "next/server";
import { z } from "zod";

import { createQuote } from "@/lib/demo";

const schema = z.object({
  tourSlug: z.string(),
  date: z.string(),
  groupSize: z.number().int().positive(),
  tier: z.enum(["Explore", "Private", "Signature", "Black"]),
  addOnIds: z.array(z.string()),
  budgetBand: z.string(),
  pickupArea: z.string(),
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
    quote: createQuote(result.data),
  });
}
