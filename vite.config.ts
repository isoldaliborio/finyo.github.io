import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
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
