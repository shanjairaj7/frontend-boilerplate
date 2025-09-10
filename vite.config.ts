import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { copyFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react(),
      tailwindcss(),
      createHtmlPlugin({
        inject: {
          data: {
            backendUrl: env.VITE_APP_BACKEND_URL || 'http://localhost:8000',
            projectId: env.VITE_APP_PROJECT_ID || 'test-project',
            hostApi: env.VITE_HOST_API || "localhost:8084",
          },
        },
      }),
      {
        name: 'copy-headers',
        writeBundle() {
          copyFileSync('_headers', 'dist/_headers')
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
