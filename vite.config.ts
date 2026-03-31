import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use '/' when custom domain (finyo.co.uk) is active, otherwise '/finyo.github.io/'
  base: process.env.CUSTOM_DOMAIN ? '/' : '/finyo.github.io/',
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content: string, path: string) => {
          if (path.includes('_variables.scss') || path.includes('_mixins.scss') || path.includes('global.scss')) {
            return content
          }
          return `@use "sass:color"; @use "${process.cwd()}/src/styles/variables" as *; @use "${process.cwd()}/src/styles/mixins" as *;\n${content}`
        },
      },
    },
  },
})
