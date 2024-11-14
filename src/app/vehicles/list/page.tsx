import prisma from '@/lib/db';
import Link from 'next/link';

async function fetchVehicles() {
  return await prisma.vehicle.findMany();
}

export default async function VehicleListPage() {
  const vehicles = await fetchVehicles();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Vehicle List</h1>
      <Link href="/vehicles/create">
        <p className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Register New Vehicle
        </p>
      </Link>
      <div className="mt-4 bg-white shadow-lg rounded-lg p-6">
        <ul className="divide-y divide-gray-200">
          {vehicles.map((vehicle) => (
            <li key={vehicle.id} className="py-4 flex justify-between items-center">
              <span className="text-lg font-medium">
                {vehicle.licensePlate} - {vehicle.model}
              </span>
              <Link href={`/vehicles/${vehicle.id}`}>
                <p className="text-blue-500 hover:underline">View Details</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
