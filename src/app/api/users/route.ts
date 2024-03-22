import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await request.json();
  

  return NextResponse.json({ user });
}

