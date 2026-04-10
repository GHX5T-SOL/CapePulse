import { NextResponse } from "next/server";

import { liveCheckIns } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json({
    checkIns: liveCheckIns,
  });
}
