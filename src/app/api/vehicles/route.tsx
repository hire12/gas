// import { NextResponse } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '@/lib/db'; // Make sure to import your Prisma client

// export async function POST(request: Request) {
//   // Parse incoming request JSON body
//   const { licensePlate, model, year, fuelType, vehicleType } = await request.json();

//   // Validate required fields
//   if (!licensePlate || !model || !year || !fuelType || !vehicleType) {
//     return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
//   }

//   // Validate that the year is a valid number
//   const parsedYear = parseInt(year, 10);
//   if (isNaN(parsedYear)) {
//     return NextResponse.json({ error: 'Invalid year provided' }, { status: 400 });
//   }

//   try {
//     // Create the new vehicle record in the database
//     const newVehicle = await prisma.vehicle.create({
//       data: {
//         licensePlate,
//         model,
//         year: parsedYear,
//         fuelType,
//         vehicleType,
//       },
//     });

//     return NextResponse.json({ newVehicle }, { status: 201 }); // Return the created vehicle
//   } catch (error) {
//     console.error('Error creating vehicle:', error);
//     return NextResponse.json({ error: 'Failed to create vehicle', details: error.message }, { status: 500 });
//   }
// }




// // pages/api/vehicles.ts


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     // Your logic to handle GET requests (fetch vehicles from database)
//     try {
//       // Assume you have a function to get vehicles
//       const vehicles = await getVehicles();
//       res.status(200).json(vehicles);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching vehicles' });
//     }
//   } else {
//     // If method is not GET, respond with Method Not Allowed
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

// // Sample getVehicles function to fetch data from the database
// async function getVehicles() {
//   // You would typically fetch from a database here
//   return [
//     {
//       id: 'uuid-123',
//       licensePlate: 'ABC-123',
//       model: 'Toyota',
//       year: 2020,
//       fuelType: 'Petrol',
//       vehicleType: 'Sedan',
//     },
//     {
//       id: 'uuid-456',
//       licensePlate: 'XYZ-456',
//       model: 'Honda',
//       year: 2019,
//       fuelType: 'Diesel',
//       vehicleType: 'SUV',
//     },
//   ];
// }






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
