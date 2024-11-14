import prisma from '@/lib/db';
import Link from 'next/link';

async function fetchVehicle(id: string) {
  return await prisma.vehicle.findUnique({
    where: { id },
    include: { transactions: true },
  });
}

export default async function VehicleDetailPage({ params }: { params: { id: string } }) {
  const vehicle = await fetchVehicle(params.id);

  if (!vehicle) return <div className="text-center py-6">Vehicle not found</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Vehicle Details</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <p><strong>License Plate:</strong> {vehicle.licensePlate}</p>
        <p><strong>Type:</strong> {vehicle.vehicleType}</p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <ul className="divide-y divide-gray-200">
          {vehicle.transactions.map((transaction) => (
            <li key={transaction.id} className="py-4">
              <p><strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
              <p><strong>Gas Amount:</strong> {transaction.gasAmount} liters</p>
              <p><strong>Total Cost:</strong> ${transaction.totalCost}</p>
            </li>
          ))}
        </ul>
      </div>
      <Link href={`/vehicles/${vehicle.id}/edit`}>
        <p className="text-blue-500 hover:underline mt-4 block">Edit Vehicle</p>
      </Link>
    </div>
  );
}
