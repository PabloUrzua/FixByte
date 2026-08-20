import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ locals, redirect }) => {
  const supabase = locals.supabase;
  
  await supabase.auth.signOut();
  
  return redirect('/login');
};
