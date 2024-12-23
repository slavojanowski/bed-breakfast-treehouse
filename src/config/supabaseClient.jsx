import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cbulwncjtlzmfaoesglp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNidWx3bmNqdGx6bWZhb2VzZ2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NzA1MzgsImV4cCI6MjA1MDU0NjUzOH0.IJtJHYjGx5psCze_6VhSdY7q4ScHfJp4VaLwjGm0RHY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
