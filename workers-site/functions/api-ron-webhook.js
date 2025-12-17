// Cloudflare Pages Function: /api/ron/webhook
// This handler is compatible with both Netlify Functions and Cloudflare Pages Functions

export const onRequestPost = async ({ request, env }) => {
  // Read raw body for signature verification
  const rawBody = await request.text();
  let event;
  try {
    event = JSON.parse(rawBody);
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  // Signature verification (HMAC SHA256)
  const signature = request.headers.get('x-proof-signature') || request.headers.get('x-signature') || request.headers.get('x-webhook-signature');
  const secret = env.PROOF_WEBHOOK_SECRET;
  if (!secret) {
    return new Response(JSON.stringify({ error: 'Webhook secret not configured' }), { status: 500 });
  }
  if (!signature) {
    return new Response(JSON.stringify({ error: 'Missing webhook signature' }), { status: 401 });
  }
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
  const sigBuffer = encoder.encode(rawBody);
  const expected = await crypto.subtle.sign('HMAC', key, sigBuffer);
  const expectedHex = Array.from(new Uint8Array(expected)).map(b => b.toString(16).padStart(2, '0')).join('');
  if (signature !== expectedHex) {
    return new Response(JSON.stringify({ error: 'Invalid webhook signature' }), { status: 401 });
  }

  // TODO: Handle event types and update DB if needed

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
