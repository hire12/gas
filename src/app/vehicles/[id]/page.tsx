import prisma from '@/lib/db';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
        <p>
          <strong>License Plate:</strong> {vehicle.licensePlate}
        </p>
        <p>
          <strong>Type:</strong> {vehicle.vehicleType}
        </p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Gas Amount (Liters)</TableHead>
              <TableHead>Total Cost ($)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicle.transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                <TableCell>{transaction.gasAmount}</TableCell>
                <TableCell>{transaction.totalCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Link href={`/vehicles/${vehicle.id}/edit`}>
        <p className="text-blue-500 hover:underline mt-4 block">Edit Vehicle</p>
      </Link>
    </div>
  );
}
