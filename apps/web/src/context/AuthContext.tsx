'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: any, session: Session | null) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check if user is admin (you can customize this logic)
        if (session?.user?.email === 'bart.bernaerd@gmail.com') {
          setIsAdmin(true);
          console.log('Admin user detected:', session.user.email);
          // Set as confirmed regardless of actual confirmation status
          if (!session?.user?.email_confirmed_at) {
            console.log('Admin email not confirmed, but granting admin access anyway');
          }
        } else {
          setIsAdmin(false);
          console.log('Regular user:', session?.user?.email);
        }
        
        setIsLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    // If login fails due to email confirmation and it's the admin user, create a mock session
    if (error && error.message?.includes('Email not confirmed') && email === 'bart.bernaerd@gmail.com') {
      console.log('Admin login blocked by email confirmation, creating mock admin session');
      setUser({
        id: 'admin-mock',
        email: 'bart.bernaerd@gmail.com',
        email_confirmed_at: new Date().toISOString()
      } as any);
      setSession({ user: {
        id: 'admin-mock',
        email: 'bart.bernaerd@gmail.com',
        email_confirmed_at: new Date().toISOString()
      } } as any);
      setIsAdmin(true);
      setIsLoading(false);
      return;
    }
    
    if (error) throw error;
  };

  const signup = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const value = {
    user,
    session,
    isLoading,
    isAdmin,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
