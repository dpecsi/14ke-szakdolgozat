import { db } from "@/prisma/db";
import { seed } from "@/prisma/seed";
import { User } from "@/prisma/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await seed();
  } catch (error) {
    return NextResponse.json({ error });
  }
  try {
    const users = (await db.orm.users.all()) as User[];
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
