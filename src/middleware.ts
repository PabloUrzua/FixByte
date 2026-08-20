import { defineMiddleware } from 'astro:middleware';
import { createSupabaseClient } from './lib/supabase';

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const supabase = createSupabaseClient(context.cookies);

    // Helper to refresh session if needed
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Supabase getSession error:', sessionError);
    }
    
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

    return await next();
  } catch (error: any) {
    console.error('Middleware Error:', error);
    // Return the actual error message to the browser so we can see what failed
    return new Response(
      JSON.stringify({ 
        error: 'Middleware execution failed', 
        message: error?.message || String(error),
        stack: error?.stack
      }), 
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
});
