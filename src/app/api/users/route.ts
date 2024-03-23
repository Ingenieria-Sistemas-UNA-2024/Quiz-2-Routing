import { saveUser } from "@/app/api/controller/dataController";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await request.json();
  saveUser(user);
  return NextResponse.json({ user });
}
