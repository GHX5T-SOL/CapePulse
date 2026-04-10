import { NextResponse } from "next/server";

import { createHeatPayload } from "@/lib/demo";

export async function GET() {
  return NextResponse.json({
    zones: createHeatPayload(),
  });
}
