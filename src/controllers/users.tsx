import { Elysia } from 'elysia'
import { Html } from '@kitajs/html'

export const signup = (app: Elysia<'/users'>) =>
  app.get(
    '/signup',
    ({ set }) => {
      set.headers['Content-Type'] = 'text/html'

      return (
        <h1>Sign-up page goes here...</h1>
      )
    }
  )

export const signin = (app: Elysia<'/users'>) =>
  app.get(
    '/signin',
    ({ set }) => {
      set.headers['Content-Type'] = 'text/html'

      return (
        <h1>Sign-in page goes here...</h1>
      )
    }
  )

export const users = new Elysia({ prefix: '/users', aot: false })
  .use(signup)
  .use(signin)
