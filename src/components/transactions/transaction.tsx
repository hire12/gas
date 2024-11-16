// 'use client'
// import { useState, useEffect } from 'react';

// export default function TransactionPage() {
//   const [vehicles, setVehicles] = useState<any[]>([]);  // To hold the list of vehicles
//   const [stockItems, setStockItems] = useState<any[]>([]); // To hold the list of stock items
//   const [vehicleId, setVehicleId] = useState('');  // To hold the selected vehicle ID
//   const [gasAmount, setGasAmount] = useState('');  // To hold the gas amount input value
//   const [selectedStockId, setSelectedStockId] = useState(''); // To hold the selected stock item
//   const [gasType, setGasType] = useState('');  // To hold the selected gas type
//   const [message, setMessage] = useState('');  // To hold the response message

//   // Fetch vehicles and stock items from the database when the component mounts
//   useEffect(() => {
//     const fetchVehiclesAndStock = async () => {
//       try {
//         // Fetch vehicles
//         const vehicleRes = await fetch('/api/vehicles');
//         if (vehicleRes.ok) {
//           const vehicleData = await vehicleRes.json();
//           setVehicles(vehicleData);  // Store the list of vehicles in the state
//         } else {
//           setMessage('Failed to fetch vehicles');
//         }

//         // Fetch stock items
//         const stockRes = await fetch('/api/stock'); // Assuming you have an endpoint to fetch stock items
//         if (stockRes.ok) {
//           const stockData = await stockRes.json();
//           setStockItems(stockData);  // Store the list of stock items in the state
//         } else {
//           setMessage('Failed to fetch stock items');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         setMessage('Error fetching data');
//       }
//     };

//     fetchVehiclesAndStock();
//   }, []);

//   // Update gasType based on selectedStockId
//   useEffect(() => {
//     const selectedStock = stockItems.find(item => item.id === selectedStockId);
//     setGasType(selectedStock ? selectedStock.itemName : ''); // Update gasType when stock item changes
//   }, [selectedStockId, stockItems]);

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!vehicleId || !selectedStockId || !gasAmount || !gasType) {
//       setMessage('Please select a valid vehicle, stock item, gas amount, and gas type.');
//       return;
//     }

//     try {
//       const res = await fetch('/api/transactions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           vehicleId,
//           gasAmount: parseFloat(gasAmount),
//           stockId: selectedStockId, // Include the selected stock item in the transaction
//           gasType, // Include the selected gas type in the transaction
//         }),
//       });

//       if (!res.ok) {
//         const data = await res.json();
//         setMessage(data.message || 'Error processing transaction');
//       } else {
//         setMessage('Transaction successful!');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('Failed to add transaction');
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Sell Gas to Vehicle</h1>

//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        
//         {/* Vehicle Select Dropdown */}
//         <div>
//           <label htmlFor="vehicleId" className="block text-sm font-medium text-gray-700">Select Vehicle</label>
//           <select
//             id="vehicleId"
//             value={vehicleId}
//             onChange={(e) => setVehicleId(e.target.value)}
//             className="mt-1 block w-full p-2 border rounded-md"
//             required
//           >
//             <option value="">Select Vehicle</option>
//             {vehicles.map((vehicle) => (
//               <option key={vehicle.id} value={vehicle.id}>
//                 {vehicle.licensePlate} ({vehicle.model} - {vehicle.year})
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Stock Item Select Dropdown */}
//         <div>
//           <label htmlFor="stockId" className="block text-sm font-medium text-gray-700">Select Fuel Type</label>
//           <select
//             id="stockId"
//             value={selectedStockId}
//             onChange={(e) => setSelectedStockId(e.target.value)}
//             className="mt-1 block w-full p-2 border rounded-md"
//             required
//           >
//             <option value="">Select Stock Item</option>
//             {stockItems.map((item) => (
//               <option key={item.id} value={item.id}>
//                 {item.itemName} (Quantity: {item.quantity})
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Gas Type Display (Read-Only) */}
//         <div>
//           <label htmlFor="gasType" className="block text-sm font-medium text-gray-700">Gas Type</label>
//           <input
//             id="gasType"
//             type="text"
//             value={gasType}
//             readOnly
//             className="mt-1 block w-full p-2 border rounded-md bg-gray-100"
//           />
//         </div>

//         {/* Gas Amount Input */}
//         <div>
//           <label htmlFor="gasAmount" className="block text-sm font-medium text-gray-700">Gas Amount (Liters)</label>
//           <input
//             id="gasAmount"
//             type="number"
//             value={gasAmount}
//             onChange={(e) => setGasAmount(e.target.value)}
//             className="mt-1 block w-full p-2 border rounded-md"
//             required
//           />
//         </div>

//         <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
//           Sell Gas
//         </button>
//       </form>

//       {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
//     </div>
//   );
// }




'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function TransactionPage() {
  const [vehicles, setVehicles] = useState<any[]>([]); // To hold the list of vehicles
  const [stockItems, setStockItems] = useState<any[]>([]); // To hold the list of stock items
  const [vehicleId, setVehicleId] = useState(''); // To hold the selected vehicle ID
  const [gasAmount, setGasAmount] = useState(''); // To hold the gas amount input value
  const [selectedStockId, setSelectedStockId] = useState(''); // To hold the selected stock item
  const [gasType, setGasType] = useState(''); // To hold the selected gas type
  const [message, setMessage] = useState(''); // To hold the response message
  const router = useRouter(); // Initialize useRouter for navigation

  // Fetch vehicles and stock items from the database when the component mounts
  useEffect(() => {
    const fetchVehiclesAndStock = async () => {
      try {
        const vehicleRes = await fetch('/api/vehicles');
        if (vehicleRes.ok) {
          const vehicleData = await vehicleRes.json();
          setVehicles(vehicleData);
        } else {
          setMessage('Failed to fetch vehicles');
        }

        const stockRes = await fetch('/api/stock');
        if (stockRes.ok) {
          const stockData = await stockRes.json();
          setStockItems(stockData);
        } else {
          setMessage('Failed to fetch stock items');
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('Error fetching data');
      }
    };

    fetchVehiclesAndStock();
  }, []);

  // Update gasType based on selectedStockId
  useEffect(() => {
    const selectedStock = stockItems.find((item) => item.id === selectedStockId);
    setGasType(selectedStock ? selectedStock.itemName : '');
  }, [selectedStockId, stockItems]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!vehicleId || !selectedStockId || !gasAmount || !gasType) {
      setMessage('Please select a valid vehicle, stock item, gas amount, and gas type.');
      return;
    }

    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vehicleId,
          gasAmount: parseFloat(gasAmount),
          stockId: selectedStockId,
          gasType,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setMessage(data.message || 'Error processing transaction');
      } else {
        setMessage('Transaction successful!');
        router.push('/'); // Navigate to the homepage after a successful transaction
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to add transaction');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sell Gas to Vehicle</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <div>
          <label htmlFor="vehicleId" className="block text-sm font-medium text-gray-700">Select Vehicle</label>
          <select
            id="vehicleId"
            value={vehicleId}
            onChange={(e) => setVehicleId(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.licensePlate} ({vehicle.model} - {vehicle.year})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="stockId" className="block text-sm font-medium text-gray-700">Select Fuel Type</label>
          <select
            id="stockId"
            value={selectedStockId}
            onChange={(e) => setSelectedStockId(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Stock Item</option>
            {stockItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.itemName} (Quantity: {item.quantity})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="gasType" className="block text-sm font-medium text-gray-700">Gas Type</label>
          <input
            id="gasType"
            type="text"
            value={gasType}
            readOnly
            className="mt-1 block w-full p-2 border rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="gasAmount" className="block text-sm font-medium text-gray-700">Gas Amount (Liters)</label>
          <input
            id="gasAmount"
            type="number"
            value={gasAmount}
            onChange={(e) => setGasAmount(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Sell Gas
        </button>
      </form>

      {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>
  );
}
