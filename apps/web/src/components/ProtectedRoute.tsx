// src/components/ProtectedRoute.tsx
'use client';

import React, { ReactNode, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Spinner from './Spinner'; // Assuming you have a Spinner component

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // Don't redirect while loading

    if (!user) {
      // If no user and not loading, redirect to login
      router.push('/auth/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <Spinner />; // Show a loading spinner while checking auth state
  }

  if (!user) {
    // If still no user after loading, it means login is required.
    // The useEffect will handle redirection, but this prevents rendering children briefly.
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
