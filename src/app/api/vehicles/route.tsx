import { NextResponse } from 'next/server';
import prisma from '@/lib/db'; // Make sure to import Prisma client

export async function POST(request: Request) {
  const formData = await request.formData();  // Parse the form data

  const licensePlate = formData.get('licensePlate') as string;
  const model = formData.get('model') as string;
  const year = formData.get('year') as string;
  const fuelType = formData.get('fuelType') as string;
  const vehicleType = formData.get('vehicleType') as string;

  // Validate required fields
  if (!licensePlate || !model || !year || !fuelType || !vehicleType) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Ensure that year is a valid number
  const parsedYear = parseInt(year, 10);
  if (isNaN(parsedYear)) {
    return NextResponse.json({ error: 'Invalid year provided' }, { status: 400 });
  }

  try {
    // Create the new vehicle in the database
    const newVehicle = await prisma.vehicle.create({
      data: {
        licensePlate,
        model,
        year: parsedYear,  // Ensure year is an integer
        fuelType,
        vehicleType,  // Add vehicleType to the data
      },
    });

    return NextResponse.json({ newVehicle }, { status: 201 });  // Return success response
  } catch (error) {
    console.error('Error creating vehicle:', error);
    return NextResponse.json({ error: 'Failed to create vehicle' }, { status: 500 });
  }
}
