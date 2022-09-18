import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ryklfxgnqfohszqjzrhp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5a2xmeGducWZvaHN6cWp6cmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM1MjE0MDksImV4cCI6MTk3OTA5NzQwOX0.K4epNnvx5FneYlHXGM8wD3g6T-Z98yKmCfpWFvaDciE'
const supabase = createClient(supabaseUrl, supabaseKey)

console. log ('init supabase:', supabase)

export default function useSupabase () {
  return { supabase }
}

