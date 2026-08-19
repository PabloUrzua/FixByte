import { defineMiddleware } from 'astro:middleware';
import { createSupabaseClient } from './lib/supabase';

export const onRequest = defineMiddleware(async (context, next) => {
  const supabase = createSupabaseClient(context.cookies);

  // Helper to refresh session if needed
  const { data: { session } } = await supabase.auth.getSession();
  
  const isProtectedRoute = context.url.pathname.startsWith('/admin') || context.url.pathname.startsWith('/cliente');

  if (isProtectedRoute) {
    if (!session) {
      return context.redirect('/login');
    }

    // Get user profile to check role
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    const role = profile?.role;

    if (context.url.pathname.startsWith('/admin') && role !== 'admin') {
      return context.redirect('/login');
    }

    if (context.url.pathname.startsWith('/cliente') && role !== 'empresa') {
      return context.redirect('/login');
    }
  }

  // Redirect authenticated users away from login
  if (context.url.pathname === '/login' && session) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (profile?.role === 'admin') {
      return context.redirect('/admin/dashboard');
    } else if (profile?.role === 'empresa') {
      return context.redirect('/cliente/dashboard');
    }
  }

  // Assign supabase and session to locals so pages can use it without re-fetching
  context.locals.supabase = supabase;
  context.locals.session = session;

  return next();
});
