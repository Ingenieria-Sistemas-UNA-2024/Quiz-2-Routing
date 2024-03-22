import data from "@/data.json";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const user = data.filter((user) => user.id.toString() === params.id);

  return NextResponse.json({user,});
}
