import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Use BASE_PATH env variable if set, otherwise default to GitHub Pages subpath
const base = process.env.BASE_PATH || '/topten-maintenance-page/';

export default defineConfig({
    base,
    plugins: [
        tailwindcss(),
    ],
})