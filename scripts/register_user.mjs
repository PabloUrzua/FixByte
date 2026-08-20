import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://anfroxawmmeoudbsqrcj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZnJveGF3bW1lb3VkYnNxcmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNzQ1MTMsImV4cCI6MjEwMjc1MDUxM30.KTtEVJRnFa--mTSn89DNThbXHV7JZ6nZXDp9AFS0gUg";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function main() {
  console.log('Registering user...');
  const { data, error } = await supabase.auth.signUp({
    email: 'cjxd12345@gmail.com',
    password: '123456',
  });

  if (error) {
    console.error('Error registering user:', error.message);
  } else {
    console.log('User registered successfully:', data.user?.email);
  }
}

main();
