import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const supabase = locals.supabase;
  const session = locals.session;

  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  // Double check admin role
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  if (profile?.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const formData = await request.formData();
  const userId = formData.get('user_id')?.toString();
  const companyId = formData.get('company_id')?.toString();

  if (!userId || !companyId) {
    return new Response(JSON.stringify({ error: 'Missing user_id or company_id' }), { status: 400 });
  }

  const { error } = await supabase
    .from('profiles')
    .update({ company_id: companyId })
    .eq('id', userId);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return redirect('/admin/dashboard');
};
