// 'use client'

// import { useEffect, useState } from 'react';

// interface Stock {
//   id: string;
//   itemName: string;
//   description: string | null;
//   quantity: number;
//   price: number;
//   createdAt: string;
//   updatedAt: string;
// }

// const StockPage = () => {
//   const [stock, setStock] = useState<Stock[]>([]);
//   const [newStock, setNewStock] = useState({ itemName: '', description: '', quantity: 0, price: 0 });
//   const [loading, setLoading] = useState(true);

//   // Fetch stock data
//   const fetchStock = async () => {
//     const response = await fetch('/api/stock');
//     const data = await response.json();
//     setStock(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchStock();
//   }, []);

//   // Handle form submission to add new stock
//   const handleAddStock = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const response = await fetch('/api/stock', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newStock),
//     });

//     if (response.ok) {
//       setNewStock({ itemName: '', description: '', quantity: 0, price: 0 });
//       fetchStock(); // Refresh stock data
//     } else {
//       console.error('Failed to add stock');
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Stock</h1>

//       {/* Form to add new stock */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">Add New Stock</h2>
//         <form onSubmit={handleAddStock}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Item Name</label>
//             <input
//               type="text"
//               value={newStock.itemName}
//               onChange={(e) => setNewStock({ ...newStock, itemName: e.target.value })}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Description (Optional)</label>
//             <input
//               type="text"
//               value={newStock.description}
//               onChange={(e) => setNewStock({ ...newStock, description: e.target.value })}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Quantity</label>
//             <input
//               type="number"
//               value={newStock.quantity}
//               onChange={(e) => setNewStock({ ...newStock, quantity: parseInt(e.target.value) })}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Price</label>
//             <input
//               type="number"
//               value={newStock.price}
//               onChange={(e) => setNewStock({ ...newStock, price: parseFloat(e.target.value) })}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//             Add Stock
//           </button>
//         </form>
//       </div>

//       {/* Stock List */}
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Stock List</h2>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {stock.map((item) => (
//                 <tr key={item.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">{item.itemName}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{item.description || 'No description'}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StockPage;









'use client'

import { useEffect, useState } from 'react';

interface Stock {
  id: string;
  itemName: string;
  description: string | null;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

const StockPage = () => {
  const [stock, setStock] = useState<Stock[]>([]);
  const [newStock, setNewStock] = useState({ itemName: '', description: '', quantity: 0, price: 0 });
  const [loading, setLoading] = useState(true);
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [addQuantity, setAddQuantity] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Fetch stock data
  const fetchStock = async () => {
    const response = await fetch('/api/stock');
    const data = await response.json();
    setStock(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStock();
  }, []);

  // Handle form submission to add new stock
  const handleAddStock = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/stock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStock),
    });

    if (response.ok) {
      setNewStock({ itemName: '', description: '', quantity: 0, price: 0 });
      fetchStock(); // Refresh stock data
    } else {
      console.error('Failed to add stock');
    }
  };

  // Open popup for adding quantity
  const openAddQuantityPopup = (item: Stock) => {
    setSelectedStock(item);
    setAddQuantity(0); // Reset input value
    setShowPopup(true);
  };

  // Handle adding quantity to stock
  const handleAddQuantity = async () => {
    if (!selectedStock) return;
  
    const response = await fetch(`/api/stock`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: selectedStock.id, quantity: selectedStock.quantity + addQuantity }),
    });
  
    if (response.ok) {
      setShowPopup(false);
      setSelectedStock(null);
      fetchStock(); // Refresh stock data
    } else {
      console.error('Failed to update stock quantity');
    }
  };
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Stock</h1>

      {/* Form to add new stock */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Stock</h2>
        <form onSubmit={handleAddStock}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Item Name</label>
            <input
              type="text"
              value={newStock.itemName}
              onChange={(e) => setNewStock({ ...newStock, itemName: e.target.value })}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description (Optional)</label>
            <input
              type="text"
              value={newStock.description}
              onChange={(e) => setNewStock({ ...newStock, description: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              value={newStock.quantity}
              onChange={(e) => setNewStock({ ...newStock, quantity: parseInt(e.target.value) })}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={newStock.price}
              onChange={(e) => setNewStock({ ...newStock, price: parseFloat(e.target.value) })}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Add Stock
          </button>
        </form>
      </div>

      {/* Stock List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Stock List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leter</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stock.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.itemName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.description || 'No description'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => openAddQuantityPopup(item)}
                      className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                    >
                      Add Quantity
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Popup for adding quantity */}
      {showPopup && selectedStock && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add Quantity for {selectedStock.itemName}</h2>
            <input
              type="number"
              value={addQuantity}
              onChange={(e) => setAddQuantity(parseInt(e.target.value) || 0)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter quantity to add"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddQuantity}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockPage;
