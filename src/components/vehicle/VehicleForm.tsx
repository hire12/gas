'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const VehicleForm = () => {
//   const router = useRouter();

//   const [licensePlate, setLicensePlate] = useState('');
//   const [model, setModel] = useState('');
//   const [year, setYear] = useState('');
//   const [fuelType, setFuelType] = useState('');
//   const [vehicleType, setVehicleType] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // const handleSubmit = async (event: React.FormEvent) => {
//   //   event.preventDefault();
//   //   setIsSubmitting(true);

//   //   const vehicleData = { licensePlate, model, year, fuelType };

//   //   try {
//   //     const response = await fetch('/api/vehicles', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(vehicleData),
//   //     });

//   //     if (response.ok) {
//   //       router.push('/vehicles/list');  // Redirect to the vehicles list page after success
//   //     } else {
//   //       alert('Failed to create vehicle');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     alert('An error occurred. Please try again.');
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setIsSubmitting(true);
  
//     const vehicleData = {
//       licensePlate,
//       model,
//       year,
//       fuelType,
//       vehicleType,
//     };
  
//     console.log('Form data being sent:', vehicleData);  // Log the data being sent
  
//     try {
//       const response = await fetch('/api/vehicles', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(vehicleData),
//       });
  
//       if (response.ok) {
//         router.push('/vehicles/list');  // Redirect to the vehicles list page after success
//       } else {
//         alert('Failed to create vehicle');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  
//   return (
//     <div className="max-w-lg mx-auto p-6">
//       <h1 className="text-2xl font-semibold mb-4">Create Vehicle</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="licensePlate" className="block text-lg">License Plate</label>
//           <input
//             type="text"
//             id="licensePlate"
//             value={licensePlate}
//             onChange={(e) => setLicensePlate(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="model" className="block text-lg">Model</label>
//           <input
//             type="text"
//             id="model"
//             value={model}
//             onChange={(e) => setModel(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="year" className="block text-lg">Year</label>
//           <input
//             type="text"
//             id="year"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="fuelType" className="block text-lg">Fuel Type</label>
//           <input
//             type="text"
//             id="fuelType"
//             value={fuelType}
//             onChange={(e) => setFuelType(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="vehicleType" className="block text-lg">Vehicle Type</label>
//           <input
//             type="text"
//             id="vehicleType"
//             value={vehicleType}
//             onChange={(e) => setVehicleType(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
//         >
//           {isSubmitting ? 'Creating...' : 'Create Vehicle'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default VehicleForm;





// // "use client"

// // import { useState } from 'react';
// // import { useRouter } from 'next/router';

// // const VehicleForm = () => {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState<string | null>(null);
// //   const router = useRouter();

// //   const handleSubmit = async (event: React.FormEvent) => {
// //     event.preventDefault();
// //     setIsLoading(true);
// //     setError(null);

// //     const formData = new FormData(event.target as HTMLFormElement);

// //     try {
// //       const response = await fetch('/api/vehicles/create', {  // Adjusted URL to match your route
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (response.ok) {
// //         router.push('/vehicles/list');  // Adjusted URL to redirect to vehicle list
// //       } else {
// //         const errorResponse = await response.json();
// //         setError(errorResponse.error || 'Something went wrong!');
// //       }
// //     } catch (err) {
// //       setError('Failed to submit the form');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="text" name="licensePlate" placeholder="License Plate" required />
// //       <input type="text" name="model" placeholder="Model" required />
// //       <input type="number" name="year" placeholder="Year" required />
// //       <select name="fuelType" required>
// //         <option value="petrol">Petrol</option>
// //         <option value="diesel">Diesel</option>
// //         <option value="electric">Electric</option>
// //       </select>
// //       <button type="submit" disabled={isLoading}>Create Vehicle</button>
// //       {error && <div>{error}</div>}
// //     </form>
// //   );
// // };

// // export default VehicleForm;





import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateVehicleForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
  
    const formData = new FormData(event.target as HTMLFormElement);
  
    try {
      const response = await fetch('/api/vehicles', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        router.push('/vehicles/list');
      } else {
        const errorResponse = await response.json();
        console.error('Error Response:', errorResponse); // Log the error response
        setError(errorResponse.error || 'Something went wrong!');
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error('Request Failed:', err.message); // Log error message
      } else {
        console.error('Request Failed:', err); // Log the unknown error type
      }
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
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fuelType" className="block text-gray-700">Fuel Type</label>
          <select
            name="fuelType"
            id="fuelType"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          >
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
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          >
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
