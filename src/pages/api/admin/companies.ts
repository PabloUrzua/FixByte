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
  const name = formData.get('name')?.toString();
  const userIds = formData.getAll('user_ids'); // multiple selected users

  if (!name) {
    return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400 });
  }

  // 1. Create the company
  const { data: newCompany, error: companyError } = await supabase
    .from('companies')
    .insert([{ name }])
    .select('id')
    .single();

  if (companyError || !newCompany) {
    return new Response(JSON.stringify({ error: companyError?.message }), { status: 500 });
  }

  // 2. Assign selected users to this new company
  if (userIds.length > 0) {
    const ids = userIds.map(id => id.toString());
    const { error: assignError } = await supabase
      .from('profiles')
      .update({ company_id: newCompany.id })
      .in('id', ids);

    if (assignError) {
      console.error('Error assigning users:', assignError.message);
    }
  }

  return redirect('/admin/dashboard');
};
