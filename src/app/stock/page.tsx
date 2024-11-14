// // src/app/stock/page.tsx
// 'use client'
// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// const StockPage = () => {
//   const [stocks, setStocks] = useState([]);
//   const [newStock, setNewStock] = useState({ itemName: '', description: '', quantity: 0, price: 0 });

//   useEffect(() => {
//     fetchStocks();
//   }, []);

//   const fetchStocks = async () => {
//     const res = await fetch('/api/stock');
//     const data = await res.json();
//     setStocks(data);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await fetch('/api/stock', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newStock),
//     });
//     fetchStocks();
//   };

//   const handleDelete = async (id: string) => {
//     await fetch('/api/stock', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id }),
//     });
//     fetchStocks();
//   };

//   return (
//     <div className="p-8 ml-64">
//       <h1 className="text-2xl font-bold mb-4">Stock Management</h1>

//       <form onSubmit={handleSubmit} className="mb-6 space-y-4">
//         <input
//           type="text"
//           placeholder="Item Name"
//           value={newStock.itemName}
//           onChange={(e) => setNewStock({ ...newStock, itemName: e.target.value })}
//           className="border p-2 w-full"
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={newStock.description}
//           onChange={(e) => setNewStock({ ...newStock, description: e.target.value })}
//           className="border p-2 w-full"
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={newStock.quantity}
//           onChange={(e) => setNewStock({ ...newStock, quantity: parseInt(e.target.value) })}
//           className="border p-2 w-full"
//           required
//         />
//         <input
//           type="number"
//           step="0.01"
//           placeholder="Price"
//           value={newStock.price}
//           onChange={(e) => setNewStock({ ...newStock, price: parseFloat(e.target.value) })}
//           className="border p-2 w-full"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
//           Add Stock
//         </button>
//       </form>

//       <h2 className="text-xl font-semibold mb-4">Stock Items</h2>
//       <ul className="space-y-4">
//         {stocks.map((stock) => (
//           <li key={stock.id} className="flex justify-between items-center p-4 border">
//             <div>
//               <h3 className="text-lg font-semibold">{stock.itemName}</h3>
//               <p className="text-gray-700">Quantity: {stock.quantity}</p>
//               <p className="text-gray-700">Price: ${stock.price}</p>
//             </div>
//             <button
//               onClick={() => handleDelete(stock.id)}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StockPage;


import React from 'react'
import StockPage from '@/components/stock/page'

function page() {
  return (
    <div>
      <StockPage />
    </div>
  )
}

export default page
