// import { NextResponse } from 'next/server';
// import prisma from '@/lib/db'; // Ensure this path is correct

// export async function POST(request: Request) {
//   try {
//     // Parse incoming request
//     const { vehicleId, gasAmount } = await request.json();

//     // Validate input
//     if (!vehicleId || !gasAmount) {
//       return NextResponse.json(
//         { message: 'vehicleId and gasAmount are required.' },
//         { status: 400 }
//       );
//     }

//     // Log the incoming data for debugging
//     console.log('Received transaction data:', { vehicleId, gasAmount });

//     // Fetch the vehicle
//     const vehicle = await prisma.vehicle.findUnique({
//       where: { id: vehicleId },
//     });
    
//     if (!vehicle) {
//       return NextResponse.json(
//         { message: 'Vehicle not found.' },
//         { status: 404 }
//       );
//     }

//     // Fetch the stock
//     const stock = await prisma.stock.findFirst();
//     if (!stock || stock.quantity < gasAmount) {
//       return NextResponse.json(
//         { message: 'Not enough stock available.' },
//         { status: 400 }
//       );
//     }

//     // Calculate total cost
//     const totalCost = gasAmount * stock.price;

//     // Create the transaction
//     const transaction = await prisma.transaction.create({
//       data: {
//         vehicleId,
//         gasAmount,
//         totalCost,
//       },
//     });

//     // Update stock
//     await prisma.stock.update({
//       where: { id: stock.id },
//       data: { quantity: stock.quantity - gasAmount },
//     });

//     // Return the created transaction
//     console.log('Transaction created:', transaction);
//     return NextResponse.json(transaction, { status: 201 });
//   } catch (error) {
//     // Log and return any error encountered during the process
//     console.error('Error creating transaction:', error);
//     return NextResponse.json(
//       { message: 'Error processing transaction', error: error.message },
//       { status: 500 }
//     );
//   }
// }





// export async function GET() {
//     try {
//       // Fetch distinct itemNames (fuel types) from the Stock table
//       const fuelTypes = await prisma.stock.findMany({
//         select: {
//           itemName: true,  // Only select the itemName field
//         },
//         distinct: ['itemName'],  // Ensure we get distinct fuel types
//       });
  
//       // Extract unique fuel types from the result
//       const uniqueFuelTypes = fuelTypes.map((stock) => stock.itemName);
  
//       return NextResponse.json(uniqueFuelTypes, { status: 200 });
//     } catch (error) {
//       console.error('Error fetching fuel types:', error);
//       return NextResponse.json(
//         { message: 'Error fetching fuel types', error: error.message },
//         { status: 500 }
//       );
//     }
//   }






// import { NextResponse } from 'next/server';
// import prisma from '@/lib/db';

// export async function POST(req: Request) {
//   try {
//     const { vehicleId, gasAmount, stockId } = await req.json();  // Extract data from the body

//     if (!vehicleId || !gasAmount || !stockId) {
//       return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
//     }

//     // Fetch the stock item by the selected stock ID (Fuel type)
//     const stockItem = await prisma.stock.findUnique({
//       where: { id: stockId },
//     });

//     if (!stockItem || stockItem.quantity < gasAmount) {
//       return NextResponse.json({ message: 'Not enough stock available.' }, { status: 400 });
//     }

//     // Assuming your `Transaction` model has `vehicleId`, `gasAmount`, and `stockId`
//     const transaction = await prisma.transaction.create({
//       data: {
//         vehicleId,
//         gasAmount,
//         stockId,  // Use the selected stock item (fuel type)
//       },
//     });

//     // Update the stock by reducing the quantity
//     await prisma.stock.update({
//       where: { id: stockItem.id },
//       data: {
//         quantity: stockItem.quantity - gasAmount,  // Reduce the stock quantity by the amount of gas sold
//       },
//     });

//     return NextResponse.json({ message: 'Transaction successful', transaction });
//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json({ message: 'Error processing transaction', error: error.message }, { status: 500 });
//   }
// }





import { NextResponse } from 'next/server';
import prisma from '@/lib/db'; // Ensure this path is correct

// export async function POST(request: Request) {
//   try {
//     // Parse incoming request
//     const { vehicleId, gasAmount, stockId } = await request.json();

//     // Validate input
//     if (!vehicleId || !gasAmount || !stockId) {
//       return NextResponse.json(
//         { message: 'vehicleId, gasAmount, and stockId are required.' },
//         { status: 400 }
//       );
//     }

//     // Log the incoming data for debugging
//     console.log('Received transaction data:', { vehicleId, gasAmount, stockId });

//     // Fetch the vehicle
//     const vehicle = await prisma.vehicle.findUnique({
//       where: { id: vehicleId },
//     });
    
//     if (!vehicle) {
//       return NextResponse.json(
//         { message: 'Vehicle not found.' },
//         { status: 404 }
//       );
//     }

//     // Fetch the selected stock item by stockId
//     const stock = await prisma.stock.findUnique({
//       where: { id: stockId },
//     });

//     if (!stock) {
//       return NextResponse.json(
//         { message: 'Stock item not found.' },
//         { status: 404 }
//       );
//     }

//     // Check if there's enough stock
//     if (stock.quantity < gasAmount) {
//       return NextResponse.json(
//         { message: 'Not enough stock available.' },
//         { status: 400 }
//       );
//     }

//     // Calculate total cost
//     const totalCost = gasAmount * stock.price;

//     // Create the transaction
//     const transaction = await prisma.transaction.create({
//       data: {
//         vehicleId,
//         gasAmount,
//         totalCost,
//       },
//     });

//     // Update stock quantity
//     await prisma.stock.update({
//       where: { id: stock.id },
//       data: { quantity: stock.quantity - gasAmount },
//     });

//     // Return the created transaction
//     console.log('Transaction created:', transaction);
//     return NextResponse.json(transaction, { status: 201 });
//   } catch (error) {
//     // Log and return any error encountered during the process
//     console.error('Error creating transaction:', error);
//     return NextResponse.json(
//       { message: 'Error processing transaction', error: error.message },
//       { status: 500 }
//     );
//   }
// }


export async function POST(request: Request) {
    try {
      // Parse incoming request
      const { vehicleId, gasAmount, stockId, gasType } = await request.json();
  
      // Validate input
      if (!vehicleId || !gasAmount || !stockId || !gasType) {
        return NextResponse.json(
          { message: 'vehicleId, gasAmount, stockId, and gasType are required.' },
          { status: 400 }
        );
      }
  
      // Log the incoming data for debugging
      console.log('Received transaction data:', { vehicleId, gasAmount, stockId, gasType });
  
      // Fetch the vehicle
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: vehicleId },
      });
  
      if (!vehicle) {
        return NextResponse.json(
          { message: 'Vehicle not found.' },
          { status: 404 }
        );
      }
  
      // Fetch the selected stock item by stockId
      const stock = await prisma.stock.findUnique({
        where: { id: stockId },
      });
  
      if (!stock) {
        return NextResponse.json(
          { message: 'Stock item not found.' },
          { status: 404 }
        );
      }
  
      // Check if there's enough stock
      if (stock.quantity < gasAmount) {
        return NextResponse.json(
          { message: 'Not enough stock available.' },
          { status: 400 }
        );
      }
  
      // Calculate total cost
      const totalCost = gasAmount * stock.price;
  
      // Create the transaction with gasType
      const transaction = await prisma.transaction.create({
        data: {
          vehicleId,
          gasAmount,
          totalCost,
          gasType,  // Include gasType in the transaction creation
        },
      });
  
      // Update stock quantity
      await prisma.stock.update({
        where: { id: stock.id },
        data: { quantity: stock.quantity - gasAmount },
      });
  
      // Return the created transaction
      console.log('Transaction created:', transaction);
      return NextResponse.json(transaction, { status: 201 });
    } catch (error) {
      // Log and return any error encountered during the process
      console.error('Error creating transaction:', error);
      return NextResponse.json(
        { message: 'Error processing transaction', error: error.message },
        { status: 500 }
      );
    }
  }
  