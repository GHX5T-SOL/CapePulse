import { NextResponse } from "next/server";
import { z } from "zod";

import { createVipResponse } from "@/lib/demo";

const schema = z.object({
  requester: z.string(),
  level: z.enum(["Explore", "Private", "Signature", "Black"]).default("Black"),
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
    response: createVipResponse(result.data.requester, result.data.level),
  });
}
