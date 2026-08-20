import { n as defineMiddleware, t as sequence } from "./chunks/sequence_C1-jau8e.mjs";
import { t as createSupabaseClient } from "./chunks/supabase_BD692H82.mjs";
//#region src/middleware.ts
var onRequest$1 = defineMiddleware(async (context, next) => {
	try {
		const supabase = createSupabaseClient(context.cookies);
		const { data: { session }, error: sessionError } = await supabase.auth.getSession();
		if (sessionError) console.error("Supabase getSession error:", sessionError);
		if (context.url.pathname.startsWith("/admin") || context.url.pathname.startsWith("/cliente")) {
			if (!session) return context.redirect("/login");
			const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
			const role = profile?.role;
			if (context.url.pathname.startsWith("/admin") && role !== "admin") return context.redirect("/login");
			if (context.url.pathname.startsWith("/cliente") && role !== "empresa") return context.redirect("/login");
		}
		if (context.url.pathname === "/login" && session) {
			const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
			if (profile?.role === "admin") return context.redirect("/admin/dashboard");
			else if (profile?.role === "empresa") return context.redirect("/cliente/dashboard");
		}
		context.locals.supabase = supabase;
		context.locals.session = session;
		return await next();
	} catch (error) {
		console.error("Middleware Error:", error);
		return new Response(JSON.stringify({
			error: "Middleware execution failed",
			message: error?.message || String(error),
			stack: error?.stack
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
});
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };
