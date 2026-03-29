import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types'; // Assuming types are generated or defined elsewhere

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided in environment variables.');
}

// Initialize Supabase client
// We use a type assertion for the client to ensure it matches the Database type,
// which is useful if you have generated TypeScript types for your Supabase schema.
// If not, you can omit the <Database> generic.
export const supabase: SupabaseClient<Database> = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Export the client for use in other parts of the application
export * from '@supabase/supabase-js';
