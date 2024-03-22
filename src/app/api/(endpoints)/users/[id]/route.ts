import { NextRequest, NextResponse } from "next/server";
import { getUser, deleteUser } from "../../../model/user";

type Params = {
  id: string
}

export async function GET(req: NextRequest, context: { params: Params }) {
  return NextResponse.json(JSON.stringify(getUser(parseInt(context.params.id, 10))))
}

export async function DELETE(req: NextRequest, context: { params: Params }) {
  
  return NextResponse.json(JSON.stringify(deleteUser(parseInt(context.params.id, 10))))
}
