import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://sgnujnsezwzzeuzrgtsr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnbnVqbnNlend6emV1enJndHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwODA1MzcsImV4cCI6MjA2ODY1NjUzN30.ZgI-UN1Zet8GXiza93uFWNvTRx9CLNmh0AmH77vWRTE"
);