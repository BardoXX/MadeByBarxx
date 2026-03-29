// Basic database types for Supabase
// You can generate these types using the Supabase CLI: supabase gen types typescript --local > src/lib/database.types.ts

export interface Database {
  public: {
    Tables: {
      // Add your table types here
      // Example:
      // users: {
      //   Row: { id: string; email: string; created_at: string }
      //   Insert: { email: string }
      //   Update: { email?: string }
      // }
    }
  }
}
