import React from 'react';
import Link from 'next/link';
import { FiHome, FiTruck, FiRepeat, FiBox, FiUser } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white fixed top-0 left-0 h-full shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">Gas Management</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="flex items-center text-lg hover:text-blue-400 transition-colors duration-200">
              <FiHome className="mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/vehicles/list" className="flex items-center text-lg hover:text-blue-400 transition-colors duration-200">
              <FiTruck className="mr-3" />
              <span>Vehicles</span>
            </Link>
          </li>
          <li>
            <Link href="/transactions" className="flex items-center text-lg hover:text-blue-400 transition-colors duration-200">
              <FiRepeat className="mr-3" />
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link href="/stock" className="flex items-center text-lg hover:text-blue-400 transition-colors duration-200">
              <FiBox className="mr-3" />
              <span>Stock</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center text-lg hover:text-blue-400 transition-colors duration-200">
              <FiUser className="mr-3" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
