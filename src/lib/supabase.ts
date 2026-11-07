import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Lazy singleton: building the client eagerly at module load breaks `next build`,
// which imports every route module during page-data collection before env vars
// are necessarily available. Constructing on first real property access instead
// defers the "env var missing" failure to actual request time.
let client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!client) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
    }
    client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return client;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    return Reflect.get(getClient(), prop, receiver);
  },
});
