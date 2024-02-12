import { Database } from "./supabase";

export type Exercises = Database['public']['Tables']['activities']['Row'];
