'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import UserMenu from './UserMenu';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, isLoading, isAdmin } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  // If no user, don't render the user-specific navbar part
  if (!user) {
    return (
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">SaaSPlatform</Link>
          <div>
            <Link href="/auth/login" className="mr-4 hover:text-gray-300">Login</Link>
            <Link href="/auth/signup" className="hover:text-gray-300">Sign Up</Link>
          </div>
        </div>
      </nav>
    );
  }

  // Extract first name for display
  const firstName = user.email?.split('@')[0] || 'User';

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={isAdmin ? "/admin" : "/dashboard"} className="text-2xl font-bold">SaaSPlatform</Link>
        
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center text-sm font-medium rounded-full text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu-button"
            aria-expanded={isUserMenuOpen}
            aria-haspopup="true"
          >
            <span className="sr-only">Open user menu</span>
            {/* Placeholder for user avatar if needed */}
            <span className="ml-2">{firstName}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>

          <UserMenu isOpen={isUserMenuOpen} onClose={() => setIsUserMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
