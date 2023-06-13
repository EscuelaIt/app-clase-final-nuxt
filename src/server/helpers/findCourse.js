import { db } from '../db'

export const findCourseByName = (name, event) => {
  let index
  const course = db.courses.find((c, i) => {
    if (c.name === name) index = i
    return c.name === name
  })

  if (!course) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Course Not Found',
    })

    sendError(event, notFoundError)
  }

  return { course, index }
}