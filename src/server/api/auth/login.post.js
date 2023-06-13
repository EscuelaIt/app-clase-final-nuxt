import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async event => {
  const supabase = serverSupabaseClient(event)
  const body = await readBody(event)

  return supabase.auth.signInWithPassword({ email: body.email, password: body.password })
})