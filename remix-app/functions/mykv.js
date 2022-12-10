export async function onRequest(context) {
  const sample = await context.env.MY_KV.get('sample')
  return new Response(sample)
}
