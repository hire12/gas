import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// Create a new transaction
export async function POST(request: Request) {
  const data = await request.json();

  const transaction = await prisma.transaction.create({
    data: {
      vehicleId: data.vehicleId,
      gasAmount: data.gasAmount,
      totalCost: data.totalCost,
    },
  });

  return NextResponse.json(transaction);
}

// Get transactions for a specific vehicle
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const vehicleId = searchParams.get("vehicleId");

  const transactions = await prisma.transaction.findMany({
    where: { vehicleId },
    orderBy: { date: "desc" },
  });

  return NextResponse.json(transactions);
}
