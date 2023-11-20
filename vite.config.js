import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                customSelect: resolve(__dirname, 'custom-select.html'),
            },
        },
    },
})