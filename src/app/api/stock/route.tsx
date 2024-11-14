// src/app/api/stock/route.ts

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const stocks = await prisma.stock.findMany();
        return NextResponse.json(stocks);  // Ensure it returns JSON
    } catch (error) {
        console.error("API Error:", error);  // Log the error to troubleshoot
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


export async function POST(req: Request) {
  const data = await req.json();
  const newStock = await prisma.stock.create({ data });
  return NextResponse.json(newStock);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.stock.delete({ where: { id } });
  return NextResponse.json({ message: 'Stock deleted' });
}
