// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        exclude: ['**/dist/**', '**/esm/**'],
    },
})
