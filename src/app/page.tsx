// // import prisma from '@/lib/db';

// // async function fetchDashboardData() {
// //   const vehicleCount = await prisma.vehicle.count();
// //   const totalGasStock = await prisma.transaction.aggregate({
// //     _sum: { gasAmount: true },
// //   });
// //   const recentTransactions = await prisma.transaction.findMany({
// //     orderBy: { date: 'desc' },
// //     take: 5,
// //     include: { vehicle: true },
// //   });

// //   return { vehicleCount, totalGasStock: totalGasStock._sum.gasAmount, recentTransactions };
// // }

// // export default async function DashboardPage() {
// //   const { vehicleCount, totalGasStock, recentTransactions } = await fetchDashboardData();

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <h2 className="text-lg font-semibold">Total Vehicles</h2>
// //           <p className="text-2xl font-bold">{vehicleCount}</p>
// //         </div>
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <h2 className="text-lg font-semibold">Total Gas Stock</h2>
// //           <p className="text-2xl font-bold">{totalGasStock ? totalGasStock : 0} Liters</p>
// //         </div>
// //       </div>

// //       <div className="mt-8">
// //         <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead>
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Plate</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Amount</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {recentTransactions.map((transaction) => (
// //                 <tr key={transaction.id}>
// //                   <td className="px-6 py-4 whitespace-nowrap">
// //                     {new Date(transaction.date).toLocaleDateString()}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap">
// //                     {transaction.vehicle.licensePlate}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap">
// //                     {transaction.gasAmount} Liters
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap">
// //                     ${transaction.totalCost}
// //                   </td>
// //                 </tr>
// //               ))}
// //               {recentTransactions.length === 0 && (
// //                 <tr>
// //                   <td colSpan={4} className="px-6 py-4 text-center">
// //                     No recent transactions.
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }







// import prisma from '@/lib/db';

// async function fetchDashboardData() {
//   const vehicleCount = await prisma.vehicle.count();
//   const totalGasStock = await prisma.transaction.aggregate({
//     _sum: { gasAmount: true },
//   });
//   const recentTransactions = await prisma.transaction.findMany({
//     orderBy: { date: 'desc' },
//     take: 5,
//     include: { vehicle: true },
//   });

//   return { vehicleCount, totalGasStock: totalGasStock._sum.gasAmount, recentTransactions };
// }

// export default async function DashboardPage() {
//   const { vehicleCount, totalGasStock, recentTransactions } = await fetchDashboardData();

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-lg font-semibold">Total Vehicles</h2>
//           <p className="text-2xl font-bold">{vehicleCount}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-lg font-semibold">Total Gas Stock</h2>
//           <p className="text-2xl font-bold">{totalGasStock ? totalGasStock : 0} Liters</p>
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Plate</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Amount</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {recentTransactions.map((transaction) => (
//                 <tr key={transaction.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {new Date(transaction.date).toLocaleDateString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {transaction.vehicle.licensePlate}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {transaction.gasAmount} Liters
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     ${transaction.totalCost}
//                   </td>
//                 </tr>
//               ))}
//               {recentTransactions.length === 0 && (
//                 <tr>
//                   <td colSpan={4} className="px-6 py-4 text-center">
//                     No recent transactions.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }













import prisma from '@/lib/db';

async function fetchDashboardData() {
  try {
    // Vehicle count
    const vehicleCount = await prisma.vehicle.count();

    // Fetch total remaining stock from the stock table
    const stock = await prisma.stock.findFirst(); // Assuming there is only one record for total stock
    const totalGasStock = stock ? stock.quantity : 0;

    // Today's date
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // Set to midnight
    const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // Set to 11:59:59 PM

    // Transactions made today
    const todaysTransactions = await prisma.transaction.findMany({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: { vehicle: true },
    });

    // Total gas sold today
    const totalGasSoldToday = await prisma.transaction.aggregate({
      _sum: { gasAmount: true },
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    // Breakdown of stock sold by type today (e.g., regular, premium)
    const gasTypesSold = await prisma.transaction.groupBy({
      by: ['gasType'], // Grouping by gasType field
      _sum: {
        gasAmount: true, // Sum the gasAmount for each gas type
      },
      where: {
        date: {
          gte: startOfDay, // Use the start of the day
          lte: endOfDay, // Use the end of the day
        },
      },
    });

    return {
      vehicleCount,
      totalGasStock,
      todaysTransactions,
      totalGasSoldToday: totalGasSoldToday._sum.gasAmount || 0,
      gasTypesSold,
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return {
      vehicleCount: 0,
      totalGasStock: 0,
      todaysTransactions: [],
      totalGasSoldToday: 0,
      gasTypesSold: [],
    };
  }
}

export default async function DashboardPage() {
  const { vehicleCount, totalGasStock, todaysTransactions, totalGasSoldToday, gasTypesSold } = await fetchDashboardData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Vehicle Count and Total Gas Stock */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Vehicles</h2>
          <p className="text-2xl font-bold">{vehicleCount}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Gas Stock</h2>
          <p className="text-2xl font-bold">{totalGasStock} Liters</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Gas Sold Today</h2>
          <p className="text-2xl font-bold">{totalGasSoldToday} Liters</p>
        </div>
      </div>

      {/* Today's Transactions */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Today's Transactions</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Plate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Type</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {todaysTransactions.length > 0 ? (
                todaysTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction.vehicle.licensePlate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction.gasAmount} Liters</td>
                    <td className="px-6 py-4 whitespace-nowrap">${transaction.totalCost}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction.gasType}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center">
                    No transactions today.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gas Types Sold Today */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gas Types Sold Today</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {gasTypesSold.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Sold</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gasTypesSold.map((gasType) => (
                  <tr key={gasType.gasType}>
                    <td className="px-6 py-4 whitespace-nowrap">{gasType.gasType}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{gasType._sum.gasAmount} Liters</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No gas types sold today.</p>
          )}
        </div>
      </div>
    </div>
  );
}
