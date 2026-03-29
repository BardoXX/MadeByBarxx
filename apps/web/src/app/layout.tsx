'use client';

// This is a placeholder for the main layout.
// You'll need to integrate the Navbar and AuthProvider here.

import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { AuthProvider } from '../context/AuthContext';
import './globals.css';
import { usePathname } from 'next/navigation';

interface RootLayoutProps {
  children: React.ReactNode;
}

// This layout assumes it's the root layout for the 'app' directory.
// Adjust the path to AuthProvider if it's different.
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith('/auth');
  const isHomePage = pathname === '/';

  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <AuthProvider>
          {isHomePage && <Navbar />}
          {!isAuthPage && !isHomePage && <Navbar />}
          {isAuthPage || isHomePage ? (
            children
          ) : (
            <main className="container mx-auto p-4">
              {children}
            </main>
          )}
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
