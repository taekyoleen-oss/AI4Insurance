import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://tdiiazrlzzqavsdzzisc.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaWlhenJsenpxYXZzZHp6aXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjkzMjIsImV4cCI6MjA3NTk0NTMyMn0.w2u7JoxmgHw6N-aM-mEJBVk9V-XW7c-Wr8ZR_TB67L4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
