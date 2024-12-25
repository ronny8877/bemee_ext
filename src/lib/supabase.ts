import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://<supabase-url>.supabase.co";
const supabaseAnonKey = "<supabase-anon-key>";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);