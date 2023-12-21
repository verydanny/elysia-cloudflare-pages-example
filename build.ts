await Bun.build({
  entrypoints: ['./src/server.tsx'],
  outdir: './dist',
  target: 'browser',
  format: 'esm',
  minify: false,
  naming: '[dir]/_worker.js'
})
