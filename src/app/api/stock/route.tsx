import prisma from '@/lib/db';

// Get all stock items
export async function GET(request: Request) {
  try {
    const stock = await prisma.stock.findMany();
    return new Response(JSON.stringify(stock), { status: 200 });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return new Response("Failed to fetch stock data", { status: 500 });
  }
}

// Create new stock item

export async function POST(req: Request) {
  try {
    const { itemName, description, quantity, price } = await req.json();
    
    // Check if the required fields are provided
    if (!itemName || !quantity || !price) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Add the new stock entry
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


