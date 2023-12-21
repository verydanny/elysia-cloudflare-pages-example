import { builtinModules } from 'module'
import { type Plugin } from 'vite'
import * as path from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface Options {
  entry?: string
  outputDir?: string
  external?: string[]
  minify?: boolean
  clean?: boolean
  target?:
    | 'es2016'
    | 'es2017'
    | 'es2018'
    | 'es2019'
    | 'es2020'
    | 'es2021'
    | 'es2022'
    | 'esnext'
}

const defaultOptions: Options = {
  entry: undefined,
  outputDir: './dist',
  external: ['react', 'react-dom'],
  minify: true,
  clean: true,
  target: 'es2022',
}

console.log(__dirname)

export const cloudflarePagesPlugin = (options: Options): Plugin => {
  const entry = defaultOptions.entry ?? options.entry

  return {
    name: 'Elysia Cloudflare Plugin',
    config: async () => {
      return {
        ssr: {
          target: 'webworker',
          external: options?.external ?? defaultOptions.external,
          noExternal: true,
        },
        build: {
          target: options?.target ?? defaultOptions.target,
          emptyOutDir: options?.clean ?? defaultOptions.clean,
          ssr: entry,
          minify: options?.minify ?? defaultOptions.minify,
          rollupOptions: {
            external: [...builtinModules, /^node:/],
            input: entry,
            output: {
              dir: options?.outputDir ?? defaultOptions.outputDir,
            },
          },
        },
      }
    },
  }
}
