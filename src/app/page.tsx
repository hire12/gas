import prisma from '@/lib/db';

async function fetchDashboardData() {
  const vehicleCount = await prisma.vehicle.count();
  const totalGasStock = await prisma.transaction.aggregate({
    _sum: { gasAmount: true },
  });
  const recentTransactions = await prisma.transaction.findMany({
    orderBy: { date: 'desc' },
    take: 5,
    include: { vehicle: true },
  });

  return { vehicleCount, totalGasStock: totalGasStock._sum.gasAmount, recentTransactions };
}

export default async function DashboardPage() {
  const { vehicleCount, totalGasStock, recentTransactions } = await fetchDashboardData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Vehicles</h2>
          <p className="text-2xl font-bold">{vehicleCount}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Gas Stock</h2>
          <p className="text-2xl font-bold">{totalGasStock ? totalGasStock : 0} Liters</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Plate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.vehicle.licensePlate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.gasAmount} Liters
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${transaction.totalCost}
                  </td>
                </tr>
              ))}
              {recentTransactions.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    No recent transactions.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
