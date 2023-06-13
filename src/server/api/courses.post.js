import { db } from '../db'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  if (!body.name) {
    const badRequestErr = createError({
      status: 400,
      statusMessage: 'name property not found'
    })

    showError(event, badRequestErr)
  }

  const newCourse = {
    name: body.name,
    active: false,
  }

  db.courses.push(newCourse)
  return newCourse
})