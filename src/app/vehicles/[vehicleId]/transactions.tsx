"use client";
import { useState, useEffect } from "react";

export default function TransactionsPage({ params }: { params: { vehicleId: string } }) {
  const { vehicleId } = params;
  const [transactions, setTransactions] = useState([]);
  const [gasAmount, setGasAmount] = useState("");
  const [totalCost, setTotalCost] = useState("");

  useEffect(() => {
    fetch(`/api/transactions?vehicleId=${vehicleId}`)
      .then((res) => res.json())
      .then(setTransactions);
  }, [vehicleId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vehicleId, gasAmount: parseFloat(gasAmount), totalCost: parseFloat(totalCost) }),
    });
    setGasAmount("");
    setTotalCost("");
    const res = await fetch(`/api/transactions?vehicleId=${vehicleId}`);
    setTransactions(await res.json());
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions for Vehicle {vehicleId}</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="number"
          value={gasAmount}
          onChange={(e) => setGasAmount(e.target.value)}
          placeholder="Gas Amount"
          required
          className="border p-2 mr-2"
        />
        <input
          type="number"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
          placeholder="Total Cost"
          required
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Transaction
        </button>
      </form>
      <ul>
        {transactions.map((transaction: any) => (
          <li key={transaction.id} className="border-b py-2">
            {transaction.date}: {transaction.gasAmount} liters for ${transaction.totalCost}
          </li>
        ))}
      </ul>
    </div>
  );
}
