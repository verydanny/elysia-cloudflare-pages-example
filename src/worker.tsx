import { Elysia } from 'elysia'
import { Html } from '@kitajs/html'

const app = new Elysia({ aot: false })

app.get('/', ({ set }) => {
  set.headers['Content-Type'] = 'text/html'

  return (
    <h1>Hello World</h1>
  )
})

export default app
