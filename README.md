# elysia-cloudflare-pages-example

This uses bun as the runtime. [Install bun](https://bun.sh/). Elysia seems to be much faster
than Hono, so this is an example of a small worker utilizing Hono.

## Caveats

We must disable the AOT (ahead-of-time) compilation that Elysia does for Cloudflare.

```ts
const app = new Elysia({ aot: false })
```

## Installation
To install dependencies:

```bash
bun install
```

## Build
To build the pages

```bash
bun run build
```

Deploy to Cloudflare

```bash
bun run deploy
```
