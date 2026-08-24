import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/wct-site/', // ← Nome do seu repositório no GitHub
})