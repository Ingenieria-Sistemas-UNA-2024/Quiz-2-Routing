import { NextRequest, NextResponse } from "next/server";
import { getAccount, deleteAccount } from "../../../model/account";

type Params = {
  id: string
}

export async function GET(req: NextRequest, context: { params: Params }) {
  return NextResponse.json(JSON.stringify(getAccount(parseInt(context.params.id, 10))))
}

export async function DELETE(req: NextRequest, context: { params: Params }) {
  return NextResponse.json(JSON.stringify(deleteAccount(parseInt(context.params.id, 10))))
}
