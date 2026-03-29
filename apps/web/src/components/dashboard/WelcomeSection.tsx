'use client';

import React from 'react';
import { useAuth } from '../../context/AuthContext';

const WelcomeSection: React.FC = () => {
  const { user } = useAuth();
  const firstName = user?.email?.split('@')[0] || 'User';

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-xl ring-1 ring-white/30">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {firstName}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your account today.
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500 mb-1">Account Status</div>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
