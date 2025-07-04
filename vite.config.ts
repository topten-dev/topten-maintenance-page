import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/topten-maintenance-page/', // Set base for GitHub Pages
    plugins: [
        tailwindcss(),
    ],
})