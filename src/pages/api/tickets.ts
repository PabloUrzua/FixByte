import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const supabase = locals.supabase;
  const session = locals.session;

  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const formData = await request.formData();
  const action = formData.get('action')?.toString();

  if (action === 'create') {
    const title = formData.get('title')?.toString();
    const description = formData.get('description')?.toString();

    // Get user profile to find company_id
    const { data: profile } = await supabase
      .from('profiles')
      .select('company_id')
      .eq('id', session.user.id)
      .single();

    if (!profile?.company_id) {
      return new Response(JSON.stringify({ error: 'User is not assigned to a company' }), { status: 400 });
    }

    const { error } = await supabase
      .from('tickets')
      .insert([
        { 
          title, 
          description, 
          company_id: profile.company_id,
          created_by: session.user.id 
        }
      ]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return redirect('/cliente/dashboard');
  } 
  
  if (action === 'update_status') {
    // Only admins can update status
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (profile?.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
    }

    const ticketId = formData.get('ticket_id')?.toString();
    const status = formData.get('status')?.toString();

    if (!ticketId || !status) {
      return new Response(JSON.stringify({ error: 'Missing ticket_id or status' }), { status: 400 });
    }

    const { error } = await supabase
      .from('tickets')
      .update({ status })
      .eq('id', ticketId);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return redirect('/admin/dashboard');
  }

  return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });
};
