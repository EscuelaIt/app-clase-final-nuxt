import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(event => {
  const supabase = serverSupabaseClient(event)
  return supabase.from('courses').select()
})
