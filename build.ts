await Bun.build({
  entrypoints: ['./src/server.tsx'],
  outdir: './dist',
  target: 'browser',
  format: 'esm',
  minify: true,
  naming: '[dir]/_worker.js'
})
