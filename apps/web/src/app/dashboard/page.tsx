'use client';

import React from 'react';
import { useAuth } from '../../context/AuthContext';
import WelcomeSection from '../../components/dashboard/WelcomeSection';
import StatsSection from '../../components/dashboard/StatsSection';
import RecentActivitySection from '../../components/dashboard/RecentActivitySection';

const DashboardPage: React.FC = () => {
  const { user, isLoading, isAdmin } = useAuth();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading dashboard...</div>;
  }

  // Show admin dashboard if user is an admin
  if (isAdmin) {
    return (
      <div className="h-screen flex flex-col bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-auto">
        <div className="flex-1 flex items-start justify-center p-6 pt-20">
          <div className="w-full max-w-7xl">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl ring-1 ring-white/30">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
              <p className="text-gray-600 mb-8">Welcome to your admin control panel. Here you can manage users, settings, and monitor system activity.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl ring-1 ring-white/30">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">User Management</h2>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                      Manage Users
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                      View Permissions
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-200">
                      Audit Logs
                    </button>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl ring-1 ring-white/30">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">System Settings</h2>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                      System Configuration
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors duration-200">
                      Security Settings
                    </button>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl ring-1 ring-white/30">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Analytics</h2>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                      View Analytics
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors duration-200">
                      Export Reports
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">

      <div className="min-h-screen flex items-start justify-center p-6 pt-20">
        <div className="w-full max-w-7xl">
          <WelcomeSection />
          <StatsSection />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentActivitySection />
            </div>
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl ring-1 ring-white/30">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  Create New Project
                </button>
                <button className="w-full text-left px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                  Invite Team Member
                </button>
                <button className="w-full text-left px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-200">
                  Generate Report
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  View Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
