import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate, x as createAstro } from "./server_DVmJkfu_.mjs";
import { t as createComponent } from "./compiler_D0p0pDok.mjs";
import { t as $$Layout } from "./Layout_CmWF_Flm.mjs";
import { t as createSupabaseClient } from "./supabase_BD692H82.mjs";
//#region src/pages/register.astro
var register_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Register,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Register = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Register;
	const error = Astro.url.searchParams.get("error");
	if (Astro.request.method === "POST") {
		const formData = await Astro.request.formData();
		const email = formData.get("email")?.toString();
		const password = formData.get("password")?.toString();
		const confirmPassword = formData.get("confirmPassword")?.toString();
		if (email && password && confirmPassword) {
			if (password !== confirmPassword) return Astro.redirect("/register?error=" + encodeURIComponent("Las contraseñas no coinciden"));
			const supabase = createSupabaseClient(Astro.cookies);
			const { data, error: authError } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: void 0,
					data: {}
				}
			});
			if (authError) return Astro.redirect("/register?error=" + encodeURIComponent(authError.message));
			if (data?.user) await supabase.auth.signInWithPassword({
				email,
				password
			});
			return Astro.redirect("/cliente/pendiente");
		}
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Crear Usuario - FixByte",
		"data-astro-cid-fvopxden": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="auth-layout" data-astro-cid-fvopxden><!-- Panel Izquierdo: Branding / Banner (Fondo 3D Animado) --><div class="auth-banner" data-astro-cid-fvopxden><!-- 3D Image Background --><div class="bg-image-3d" data-astro-cid-fvopxden></div><div class="banner-overlay" data-astro-cid-fvopxden></div><div class="banner-content" data-astro-cid-fvopxden><a href="/" class="brand-logo" data-astro-cid-fvopxden>FIX<span class="accent" data-astro-cid-fvopxden>BYTE</span></a><div class="banner-text" data-astro-cid-fvopxden><h2 data-astro-cid-fvopxden>Plataforma de Soporte Inteligente</h2><p data-astro-cid-fvopxden>Gestiona, monitorea y resuelve las incidencias tecnológicas de tu empresa en un solo lugar con total transparencia.</p></div><div class="banner-features" data-astro-cid-fvopxden><div class="feature-item" data-astro-cid-fvopxden><div class="feature-icon" data-astro-cid-fvopxden><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvopxden><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-fvopxden></path></svg></div><span data-astro-cid-fvopxden>Soporte 24/7</span></div><div class="feature-item" data-astro-cid-fvopxden><div class="feature-icon" data-astro-cid-fvopxden><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvopxden><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-fvopxden></path></svg></div><span data-astro-cid-fvopxden>Resolución Rápida</span></div><div class="feature-item" data-astro-cid-fvopxden><div class="feature-icon" data-astro-cid-fvopxden><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvopxden><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-fvopxden></path></svg></div><span data-astro-cid-fvopxden>Trazabilidad Total</span></div></div></div></div><!-- Panel Derecho: Formulario --><div class="auth-form-container" data-astro-cid-fvopxden><a href="/" class="mobile-back" data-astro-cid-fvopxden><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvopxden><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" data-astro-cid-fvopxden></path></svg>Volver</a><div class="form-wrapper" data-astro-cid-fvopxden><div class="form-header" data-astro-cid-fvopxden><h1 data-astro-cid-fvopxden>Crea tu cuenta</h1><p data-astro-cid-fvopxden>Regístrate en la plataforma FixByte.</p></div>${error && renderTemplate`<div class="alert-error" data-astro-cid-fvopxden><svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-fvopxden><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" data-astro-cid-fvopxden></path></svg><span data-astro-cid-fvopxden>${error}</span></div>`}<form method="POST" class="auth-form" data-astro-cid-fvopxden><div class="input-group" data-astro-cid-fvopxden><label for="email" data-astro-cid-fvopxden>Correo Electrónico</label><div class="input-wrapper" data-astro-cid-fvopxden><div class="input-icon" data-astro-cid-fvopxden><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvopxden><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-fvopxden></path></svg></div><input type="email" name="email" id="email" required placeholder="ejemplo@empresa.com" data-astro-cid-fvopxden></div></div><div class="input-group" data-astro-cid-fvopxden><label for="password" data-astro-cid-fvopxden>Contraseña</label><div class="input-wrapper" data-astro-cid-fvopxden><div class="input-icon" data-astro-cid-fvopxden><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvopxden><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-astro-cid-fvopxden></path></svg></div><input type="password" name="password" id="password" required placeholder="••••••••" data-astro-cid-fvopxden></div></div><div class="input-group" data-astro-cid-fvopxden><label for="confirmPassword" data-astro-cid-fvopxden>Confirmar Contraseña</label><div class="input-wrapper" data-astro-cid-fvopxden><div class="input-icon" data-astro-cid-fvopxden><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fvopxden><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-astro-cid-fvopxden></path></svg></div><input type="password" name="confirmPassword" id="confirmPassword" required placeholder="••••••••" data-astro-cid-fvopxden></div></div><button type="submit" class="btn-submit" data-astro-cid-fvopxden>Crear Cuenta</button></form><div class="form-footer" data-astro-cid-fvopxden>¿Ya tienes una cuenta? <a href="/login" data-astro-cid-fvopxden>Iniciar sesión</a></div></div></div></main>` })}`;
}, "D:/TRABAJO/FixByte/src/pages/register.astro", void 0);
var $$file = "D:/TRABAJO/FixByte/src/pages/register.astro";
var $$url = "/register";
//#endregion
//#region \0virtual:astro:page:src/pages/register@_@astro
var page = () => register_exports;
//#endregion
export { page };
