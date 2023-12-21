import { Elysia } from 'elysia'

const app = new Elysia({ aot: false })

app.get('/', () => 'Hello Elysia')

export default app
