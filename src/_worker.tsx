import { Elysia } from 'elysia'
import { Html } from '@kitajs/html'
import { users } from './controllers/users.js'

// Remember to use `aot: false` on new instances of Elysia
const app = new Elysia({ aot: false }).use(users)

app.get('/', ({ set }) => {
  set.headers['Content-Type'] = 'text/html'

  return <h1>Hello World</h1>
})

export default app

export type App = typeof app
