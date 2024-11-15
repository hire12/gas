import { NextResponse } from 'next/server';
import prisma from '@/lib/db'; // Ensure you have your Prisma client configured

export async function GET() {
  try {
    const vehicles = await prisma.vehicle.findMany(); // Get all vehicles from the database
    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return NextResponse.json({ message: 'Error fetching vehicles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { licensePlate, model, year, fuelType, vehicleType } = await request.json();

  // Validate required fields
  if (!licensePlate || !model || !year || !fuelType || !vehicleType) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Validate year
  const parsedYear = parseInt(year, 10);
  if (isNaN(parsedYear)) {
    return NextResponse.json({ error: 'Invalid year provided' }, { status: 400 });
  }

  try {
    // Create the new vehicle record
    const newVehicle = await prisma.vehicle.create({
      data: {
        licensePlate,
        model,
        year: parsedYear,
        fuelType,
        vehicleType,
      },
    });

    return NextResponse.json({ newVehicle }, { status: 201 });
  } catch (error) {
    console.error('Error creating vehicle:', error);
    return NextResponse.json({ error: 'Failed to create vehicle', details: error.message }, { status: 500 });
  }
}
