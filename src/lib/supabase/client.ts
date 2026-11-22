import { createBrowserClient } from "@supabase/ssr";

/**
 * DeveloperBano - Supabase Browser Client
 * Client-side singleton utility for interacting with Supabase from client components.
 * Fallbacks allow compilation and static site generation even when credentials are not yet configured.
 */
export function createClient() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
