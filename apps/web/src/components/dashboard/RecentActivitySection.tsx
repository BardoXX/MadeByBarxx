'use client';

import React from 'react';

const RecentActivitySection: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'created a new project',
      target: 'Mobile App Redesign',
      time: '2 hours ago',
      avatar: 'JD',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      user: 'Sarah Smith',
      action: 'updated',
      target: 'Dashboard Settings',
      time: '4 hours ago',
      avatar: 'SS',
      color: 'bg-purple-500',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'completed',
      target: 'User Authentication Flow',
      time: '6 hours ago',
      avatar: 'MJ',
      color: 'bg-green-500',
    },
    {
      id: 4,
      user: 'Emily Davis',
      action: 'commented on',
      target: 'Project Proposal',
      time: '1 day ago',
      avatar: 'ED',
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl ring-1 ring-white/30">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-white/50 rounded-lg transition-colors duration-200">
            <div className={`flex-shrink-0 w-10 h-10 ${activity.color} rounded-full flex items-center justify-center text-white font-medium text-sm`}>
              {activity.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>{' '}
                  <span className="text-gray-600">{activity.action}</span>{' '}
                  <span className="font-medium text-gray-900">{activity.target}</span>
                </p>
                <span className="text-xs text-gray-500">
                  {activity.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
          View all activity →
        </button>
      </div>
    </div>
  );
};

export default RecentActivitySection;
