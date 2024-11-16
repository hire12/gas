import prisma from '@/lib/db';

// Get all stock items
export async function GET(request: Request) {
  try {
    const stock = await prisma.stock.findMany();
    return new Response(JSON.stringify(stock), { status: 200 });
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return new Response('Failed to fetch stock data', { status: 500 });
  }
}

// Create new stock item
export async function POST(req: Request) {
  try {
    const { itemName, description, quantity, price } = await req.json();

    if (!itemName || !quantity || !price) {
      return new Response('Missing required fields', { status: 400 });
    }

    const newStock = await prisma.stock.create({
      data: {
        itemName,
        description,
        quantity,
        price,
      },
    });

    return new Response(JSON.stringify(newStock), { status: 201 });
  } catch (error) {
    console.error('Error creating stock:', error);
    return new Response('Failed to add stock', { status: 500 });
  }
}

// Update stock item
export async function PUT(req: Request) {
  try {
    const { id, quantity } = await req.json();

    if (!id || quantity == null) {
      return new Response('Missing required fields', { status: 400 });
    }

    const updatedStock = await prisma.stock.update({
      where: { id },
      data: { quantity },
    });

    return new Response(JSON.stringify(updatedStock), { status: 200 });
  } catch (error) {
    console.error('Error updating stock quantity:', error);
    return new Response('Failed to update stock', { status: 500 });
  }
}
