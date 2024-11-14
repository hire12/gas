import VehicleForm from '@/components/vehicle/VehicleForm';

export default function VehicleCreatePage() {
  return (
    <div>
      <h1>Register New Vehicle</h1>
      <VehicleForm />
    </div>
  );
}



// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const VehicleCreatePage = () => {
//   const router = useRouter();

//   const [licensePlate, setLicensePlate] = useState('');
//   const [model, setModel] = useState('');
//   const [year, setYear] = useState('');
//   const [fuelType, setFuelType] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     const vehicleData = {
//       licensePlate,
//       model,
//       year,
//       fuelType,
//     };

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

// export default VehicleCreatePage;
