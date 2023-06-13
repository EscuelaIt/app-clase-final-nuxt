import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async event => {
  const supabase = serverSupabaseClient(event)
  const body = await readBody(event)

  if (!body.email) {
    const badRequestErr = createError({
      status: 400,
      statusMessage: 'email property not found'
    })

    showError(event, badRequestErr)
  }

  return supabase.auth.signOut({ email: body.email, password: body.password, options: {
    data: {
      username: body.username,
    }
  } })
})