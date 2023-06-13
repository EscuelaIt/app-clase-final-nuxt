import { db } from '../../db'
import { findCourseByName } from '../../helpers/findCourse'

export default defineEventHandler(async event => {
  const { name } = event.context.params
  const { index } = findCourseByName(name, event)

  db.courses.splice(index, 1)

  return {
    message: 'Course deleted'
  }
})
