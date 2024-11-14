import { NextResponse } from 'next/server';
import prisma from '@/lib/db'; // Make sure to import your Prisma client

export async function POST(request: Request) {
  // Parse incoming request JSON body
  const { licensePlate, model, year, fuelType, vehicleType } = await request.json();

  // Validate required fields
  if (!licensePlate || !model || !year || !fuelType || !vehicleType) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Validate that the year is a valid number
  const parsedYear = parseInt(year, 10);
  if (isNaN(parsedYear)) {
    return NextResponse.json({ error: 'Invalid year provided' }, { status: 400 });
  }

  try {
    // Create the new vehicle record in the database
    const newVehicle = await prisma.vehicle.create({
      data: {
        licensePlate,
        model,
        year: parsedYear,
        fuelType,
        vehicleType,
      },
    });

    return NextResponse.json({ newVehicle }, { status: 201 }); // Return the created vehicle
  } catch (error) {
    console.error('Error creating vehicle:', error);
    return NextResponse.json({ error: 'Failed to create vehicle', details: error.message }, { status: 500 });
  }
}
