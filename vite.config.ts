import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const envVariables = Object.fromEntries(
    Object.entries(env).map(([key, value]) => [
      `import.meta.env.${key}`,
      JSON.stringify(value)
    ])
  )
  return {
    define: envVariables,
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
          manualChunks(id) {
            if (id.includes('@mui/x-date-picker')) {
              return "x-date-picker"
            }
            if (id.includes('@mui/x-charts')) {
              return "x-charts"
            }
            if (id.includes('@mui/x-data-grid')) {
              return "x-data-grid"
            }
            if (id.includes('@mui')) {
              return "mui"
            }
          }
        }
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        pages: `${path.resolve(__dirname, "./src/pages/")}`,
        components: `${path.resolve(__dirname, "./src/components/")}`,
        services: `${path.resolve(__dirname, "./src/services/")}`,
      },
    },
  }
})
