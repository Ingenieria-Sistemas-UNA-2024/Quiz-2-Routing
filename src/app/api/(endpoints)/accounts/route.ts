import { NextRequest, NextResponse } from "next/server";
import { Account, setAccount, addAccount } from "../../model/account";

export async function POST(req: NextRequest) {
    return NextResponse.json(setAccount(await req.json()))
}