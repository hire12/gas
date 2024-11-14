import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 fixed top-0 left-0 h-full">
      <h2 className="text-xl font-semibold mb-4">Gas Management</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="text-lg hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/vehicles/list" className="text-lg hover:text-gray-300">
            Vehicles
          </Link>
        </li>
        <li>
          <Link href="/transactions/list" className="text-lg hover:text-gray-300">
            Transactions
          </Link>
        </li>
        <li>
          <Link href="/stock" className="text-lg hover:text-gray-300">
            Stock
          </Link>
        </li>
        <li>
          <Link href="/profile" className="text-lg hover:text-gray-300">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
