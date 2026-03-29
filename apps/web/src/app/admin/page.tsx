'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import Card from '@/components/ui/Card'; // Assuming a generic Card component exists or will be created

// Placeholder for a generic Card component if it doesn't exist
// You might need to create this in apps/web/src/components/ui/Card.tsx
const PlaceholderCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
    <div className="text-gray-600 dark:text-gray-300 flex-grow">
      {children}
    </div>
  </div>
);

const AdminDashboardPage: React.FC = () => {
  const { user, isLoading, isAdmin } = useAuth();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading admin dashboard...</div>;
  }

  // Redirect if not admin or not logged in
  if (!user || !isAdmin) {
    // In a real app, this should be handled by middleware or route protection.
    // For now, we'll show a message and a link back to login/dashboard.
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-lg mb-4">You do not have administrative privileges or are not logged in.</p>
        {user ? (
          <Link href="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Go to Client Dashboard
          </Link>
        ) : (
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Admin Dashboard</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Overview and management for all services.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Box 1: System Overview */}
        <Card title="System Overview">
          <p className="text-gray-600 dark:text-gray-300 mb-2">Total Users: <span className="font-semibold text-gray-900 dark:text-white">1,234</span></p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Active Services: <span className="font-semibold text-gray-900 dark:text-white">567</span></p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Today's Revenue: <span className="font-semibold text-green-600 dark:text-green-400">$5,678</span></p>
          <Link href="/admin/overview" className="text-blue-500 hover:underline mt-auto">View Details</Link>
        </Card>

        {/* Box 2: User Management */}
        <Card title="User Management">
          <p className="text-gray-600 dark:text-gray-300 mb-2">Manage user accounts, roles, and permissions.</p>
          <Link href="/admin/users" className="text-blue-500 hover:underline mt-auto">Manage Users</Link>
        </Card>

        {/* Box 3: Service Provisioning */}
        <Card title="Service Management">
          <p className="text-gray-600 dark:text-gray-300 mb-2">Oversee all provisioned VPS and Cloud services.</p>
          <Link href="/admin/services" className="text-blue-500 hover:underline mt-auto">View Services</Link>
        </Card>

        {/* Box 4: Product Catalog */}
        <Card title="Product Catalog">
          <p className="text-gray-600 dark:text-gray-300 mb-2">Define and manage service plans, pricing, and configurations.</p>
          <Link href="/admin/products" className="text-blue-500 hover:underline mt-auto">Manage Plans</Link>
        </Card>

        {/* Box 5: Billing & Finance */}
        <Card title="Billing & Finance">
          <p className="text-gray-600 dark:text-gray-300 mb-2">Monitor financial transactions, invoices, and payment status.</p>
          <Link href="/admin/billing" className="text-blue-500 hover:underline mt-auto">View Financials</Link>
        </Card>

        {/* Box 6: Support Tickets */}
        <Card title="Support Tickets">
          <p className="text-gray-600 dark:text-gray-300 mb-2">Review and respond to customer support requests.</p>
          <Link href="/admin/support" className="text-blue-500 hover:underline mt-auto">View Tickets</Link>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
