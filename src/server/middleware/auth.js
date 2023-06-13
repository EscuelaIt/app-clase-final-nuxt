export default defineEventHandler(event => {
  // if (!event.req.headers.authorization) {
  //   sendError(event, new Error('Unathorized'))
  // }

  event.context.auth = {
    authenticated: true
  }
})