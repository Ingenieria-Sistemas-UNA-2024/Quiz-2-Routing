import { NextRequest, NextResponse } from "next/server";
import { User, setUser, addUser } from "../../model/user";

export async function POST(req: NextRequest) {
    return NextResponse.json(setUser(await req.json()))
}