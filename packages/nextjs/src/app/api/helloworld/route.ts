import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // console.log(req);
    return NextResponse.json({ message: "Hello from the API!" });
  } catch (error) {
    // console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
// Test with this CURL command
// curl http://localhost:3000/api/helloworld
