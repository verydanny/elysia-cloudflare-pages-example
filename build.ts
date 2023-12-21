await Bun.build({
  entrypoints: ['./src/worker.tsx'],
  outdir: './dist',
  target: 'browser',
  format: 'esm',
  minify: true,
  naming: '[dir]/_worker.js'
})
