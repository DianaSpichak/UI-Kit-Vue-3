import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'UIKitVue3',
      fileName: (format) => `uikit-vue3.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },

  server: {
    host: true,
    port: 5173,
    strictPort: true, 
    watch: {
      usePolling: true
    }
  }
});
