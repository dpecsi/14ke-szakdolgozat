import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("name");
  if (slug === "asd") {
    return NextResponse.json({ message: `Nem lehet asd!` }, { status: 400 });
  }
  return NextResponse.json({ message: `Hello ${slug || "World"}!` });
}
