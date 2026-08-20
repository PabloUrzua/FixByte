import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

export const createSupabaseClient = (cookies: AstroCookies) => {
  const cleanEnv = (val: string | undefined) => val ? val.replace(/^["']|["']$/g, '').trim() : '';

  const fallbackUrl = 'https://anfroxawmmeoudbsqrcj.supabase.co';
  const fallbackKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZnJveGF3bW1lb3VkYnNxcmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNzQ1MTMsImV4cCI6MjEwMjc1MDUxM30.KTtEVJRnFa--mTSn89DNThbXHV7JZ6nZXDp9AFS0gUg';
  
  let url = cleanEnv(import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL);
  let key = cleanEnv(import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY);

  if (!url || !url.startsWith('http')) {
    url = fallbackUrl;
  }
  if (!key) {
    key = fallbackKey;
  }

  return createServerClient(url, key, {
      cookies: {
        get(key) {
          return cookies.get(key)?.value;
        },
        set(key, value, options) {
          cookies.set(key, value, {
            ...options,
            path: options.path ?? '/',
          });
        },
        remove(key, options) {
          cookies.delete(key, {
            ...options,
            path: options.path ?? '/',
          });
        },
      },
    }
  );
};
