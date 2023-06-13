import { db } from '../../db'
import { findCourseByName } from '../../helpers/findCourse'

export default defineEventHandler(async event => {
  const { name } = event.context.params
  const { course, index } = findCourseByName(name, event)

  const { newName } = await readBody(event)

  const updatedCourse = {
    ...course,
    name: newName,
  }
  db.courses[index] = updatedCourse

  return updatedCourse
})
