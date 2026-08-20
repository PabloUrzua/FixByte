import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/admin/assign-user.ts
var assign_user_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, locals, redirect }) => {
	const supabase = locals.supabase;
	const session = locals.session;
	if (!session) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
	const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
	if (profile?.role !== "admin") return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
	const formData = await request.formData();
	const userId = formData.get("user_id")?.toString();
	const companyId = formData.get("company_id")?.toString();
	if (!userId || !companyId) return new Response(JSON.stringify({ error: "Missing user_id or company_id" }), { status: 400 });
	const { error } = await supabase.from("profiles").update({ company_id: companyId }).eq("id", userId);
	if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	return redirect("/admin/dashboard");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/admin/assign-user@_@ts
var page = () => assign_user_exports;
//#endregion
export { page };
