import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

export const createSupabaseClient = (cookies: AstroCookies) => {
  const cleanEnv = (val: string | undefined) => val ? val.replace(/^["']|["']$/g, '').trim() : '';

  const url = cleanEnv(import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL);
  const key = cleanEnv(import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY);

  if (!url || !url.startsWith('http')) {
    throw new Error(`DEBUG_INFO: The URL received in Vercel is [${url}]. It must start with http:// or https://. Did you put the KEY in the URL field by mistake?`);
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
