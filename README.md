# Elysia Cloudflare Example

This uses bun as the runtime. [Install bun](https://bun.sh/). Elysia seems to be much faster
than Hono, so this is an example of a small worker utilizing Hono.

The build is compiled with a custom plugin to build workers.

## Todo

- Add Cloudflare Pages-based static content plugin

## Caveats

### AOT
We must disable the AOT (ahead-of-time) compilation that Elysia does for Cloudflare.
```ts
const app = new Elysia({ aot: false })
```

### Upload discrepancy
Cloudflare (incorrectly) states `Uploading (0/0)...` files uploaded sometimes. This can be ignored. Simply
check the URL to verify successful upload.

### JSX
The official Elysia JSX/HTML plugin `@elysiajs/html` and its `Readable` implementation is incompatible with Cloudflare. Instead, it's safe to use `@kitajs/html`. This project is configured with JSX out of the box.

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
