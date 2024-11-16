'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateVehicleForm = () => {
  const router = useRouter();
  const [licensePlate, setLicensePlate] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const vehicleData = {
      licensePlate,
      model,
      year,
      fuelType,
      vehicleType,
    };

    try {
      const response = await fetch('/api/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();  // Handle JSON error response
        console.error('Error Response:', errorResponse);
        setError(errorResponse?.error || 'Something went wrong!');
      } else {
        const responseBody = await response.json();  // Try to parse JSON if the response is successful
        console.log('Response Body:', responseBody);  // Log the response body
        router.push('/vehicles/list');
      }
    } catch (err) {
      console.error('Request Failed:', err);
      setError('Failed to submit the form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Create New Vehicle</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="licensePlate" className="block text-gray-700">License Plate</label>
          <input
            type="text"
            name="licensePlate"
            id="licensePlate"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="model" className="block text-gray-700">Model</label>
          <input
            type="text"
            name="model"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700">Year</label>
          <input
            type="number"
            name="year"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fuelType" className="block text-gray-700">Fuel Type</label>
          <select
            name="fuelType"
            id="fuelType"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          >
            <option value="new"></option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="vehicleType" className="block text-gray-700">Vehicle Type</label>
          <select
            name="vehicleType"
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          >
            <option value="newvi"></option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 mt-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Vehicle'}
        </button>

        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
      </form>
    </div>
  );
};

export default CreateVehicleForm;
