import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req);
  return NextResponse.json({ message: "Hello from the API!" });
}
// Test with this CURL command
// curl http://localhost:3000/api/helloworld
