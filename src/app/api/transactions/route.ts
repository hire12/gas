import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

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
