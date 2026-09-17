import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  setTimeout(() => {
    process.exit(0);
  }, 100);
  return NextResponse.json({ exiting: true });
}
