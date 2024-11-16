import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { id: string } }) {
    const { id } = context.params; // Extract `id` from `params`


    try {
        const item = await prisma.stock.findUnique({
            where: { id: String(id) },
        });

        if (!item) {
            return NextResponse.json({ error: "Item not found" }, { status: 404 });
        }

        return NextResponse.json(item);
    } catch (error) {
        console.error("Error fetching item:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}



export async function POST(req: Request, context: { params: { id: string } }) {
    try {
        const { id } = await context.params; // Await `params`
        const body = await req.json();
        console.log(body, "here is body");

        const item = await prisma.stock.findUnique({
            where: { id: String(id) },
        });

        if (!item) {
            return NextResponse.json({ error: "Item not found" }, { status: 404 });
        }

        const updatedItem = await prisma.stock.update({
            where: { id: item.id },
            data: {
                quantity: parseInt(body.quantity),
            },
        });

        return NextResponse.json({ message: "Updated Successfully", data: updatedItem });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

