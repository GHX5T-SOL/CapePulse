import { NextResponse } from "next/server";
import { z } from "zod";

import { createRunSheet } from "@/lib/demo";

const schema = z.object({
  tourSlug: z.string(),
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
    runSheet: createRunSheet(result.data.tourSlug),
  });
}
