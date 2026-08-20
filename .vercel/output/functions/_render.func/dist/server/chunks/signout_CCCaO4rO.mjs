import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/auth/signout.ts
var signout_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ locals, redirect }) => {
	await locals.supabase.auth.signOut();
	return redirect("/login");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/auth/signout@_@ts
var page = () => signout_exports;
//#endregion
export { page };
