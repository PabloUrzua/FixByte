import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/tickets.ts
var tickets_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, locals, redirect }) => {
	const supabase = locals.supabase;
	const session = locals.session;
	if (!session) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
	const formData = await request.formData();
	const action = formData.get("action")?.toString();
	if (action === "create") {
		const title = formData.get("title")?.toString();
		const description = formData.get("description")?.toString();
		const { data: profile } = await supabase.from("profiles").select("company_id").eq("id", session.user.id).single();
		if (!profile?.company_id) return new Response(JSON.stringify({ error: "User is not assigned to a company" }), { status: 400 });
		const { error } = await supabase.from("tickets").insert([{
			title,
			description,
			company_id: profile.company_id,
			created_by: session.user.id
		}]);
		if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
		return redirect("/cliente/dashboard");
	}
	if (action === "update_status") {
		const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
		if (profile?.role !== "admin") return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
		const ticketId = formData.get("ticket_id")?.toString();
		const status = formData.get("status")?.toString();
		if (!ticketId || !status) return new Response(JSON.stringify({ error: "Missing ticket_id or status" }), { status: 400 });
		const { error } = await supabase.from("tickets").update({ status }).eq("id", ticketId);
		if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
		return redirect("/admin/dashboard");
	}
	return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400 });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/tickets@_@ts
var page = () => tickets_exports;
//#endregion
export { page };
