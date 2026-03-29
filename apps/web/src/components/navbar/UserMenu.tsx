'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; // Assuming AuthContext is accessible here

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ isOpen, onClose }) => {
  const { user, logout, isAdmin } = useAuth();

  if (!isOpen || !user) {
    return null;
  }

  // Extract first name (handle cases where name might not be available)
  const firstName = user.email?.split('@')[0] || 'User'; // Fallback if no email or name

  return (
    <div
      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
      onClick={(e) => e.stopPropagation()} // Prevent closing menu when clicking inside
    >
      <div className="py-1" role="none">
        <div className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300" role="menuitem">
          Signed in as <br />
          <span className="font-medium">{firstName}</span>
        </div>

        <Link
          href="/settings"
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          role="menuitem"
          onClick={onClose}
        >
          Settings
        </Link>
        <Link
          href="/products"
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          role="menuitem"
          onClick={onClose}
        >
          Products
        </Link>

        {isAdmin && (
          <>
            <div className="border-t border-gray-200 dark:border-gray-700 my-1" role="none"></div>
            <Link
              href="/admin"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
              onClick={onClose}
            >
              Admin Dashboard
            </Link>
          </>
        )}

        <button
          onClick={async () => {
            await logout();
            onClose();
          }}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          role="menuitem"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
