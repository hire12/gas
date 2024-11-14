import prisma from '@/lib/db';
import VehicleForm from '@/components/vehicle/VehicleForm';

async function fetchVehicle(id: string) {
  return await prisma.vehicle.findUnique({
    where: { id },
  });
}

export default async function VehicleEditPage({ params }: { params: { id: string } }) {
  const vehicle = await fetchVehicle(params.id);
  if (!vehicle) return <div>Vehicle not found</div>;

  return (
    <div>
      <h1>Edit Vehicle</h1>
      <VehicleForm initialData={vehicle} />
    </div>
  );
}
