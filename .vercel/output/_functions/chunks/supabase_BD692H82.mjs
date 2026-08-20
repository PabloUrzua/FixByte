import { createServerClient } from "@supabase/ssr";
//#region src/lib/supabase.ts
var createSupabaseClient = (cookies) => {
	return createServerClient("https://anfroxawmmeoudbsqrcj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZnJveGF3bW1lb3VkYnNxcmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNzQ1MTMsImV4cCI6MjEwMjc1MDUxM30.KTtEVJRnFa--mTSn89DNThbXHV7JZ6nZXDp9AFS0gUg", { cookies: {
		get(key) {
			return cookies.get(key)?.value;
		},
		set(key, value, options) {
			cookies.set(key, value, {
				...options,
				path: options.path ?? "/"
			});
		},
		remove(key, options) {
			cookies.delete(key, {
				...options,
				path: options.path ?? "/"
			});
		}
	} });
};
//#endregion
export { createSupabaseClient as t };
