import { NextResponse } from "next/server";

export async function GET() {
  // You can add more complex health checks here, like database connectivity tests
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    return NextResponse.json(healthcheck);
  } catch (error) {
    return NextResponse.json(
      { message: "Error in healthcheck", error },
      { status: 503 }
    );
  }
}
