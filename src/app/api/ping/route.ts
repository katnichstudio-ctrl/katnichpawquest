import { supabase } from "@/lib/supabase";

// Runs once a day via the Vercel Cron in vercel.json. The Supabase free tier
// pauses a project after about a week with no API activity — this generates
// one real request to keep it awake while traffic is still low. The query
// itself doesn't need to succeed (RLS may block the anon key); the request
// reaching Supabase is what matters.
export async function GET() {
  let supabasePinged = false;
  let supabaseError: string | null = null;

  try {
    const { error } = await supabase.from("staff").select("id", { count: "exact", head: true });
    supabasePinged = true;
    supabaseError = error?.message ?? null;
  } catch (err) {
    supabaseError = err instanceof Error ? err.message : String(err);
  }

  return Response.json({
    ok: true,
    supabasePinged,
    supabaseError,
    time: new Date().toISOString(),
  });
}
