// src/components/AdminRoute.tsx
'use client';

import React, { ReactNode, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Spinner from './Spinner'; // Assuming you have a Spinner component

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, isAdmin, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // Don't redirect while loading

    if (!user) {
      // Redirect to login if not authenticated
      router.push('/auth/login');
    } else if (!isAdmin) {
      // Redirect to dashboard if authenticated but not an admin
      // You might want to redirect to an 'unauthorized' page instead
      router.push('/dashboard');
    }
  }, [user, isAdmin, isLoading, router]);

  if (isLoading || !user || !isAdmin) {
    // Show spinner while loading or if user/admin status is not yet determined
    // or if user is not admin.
    return <Spinner />;
  }

  return <>{children}</>;
};

export default AdminRoute;
