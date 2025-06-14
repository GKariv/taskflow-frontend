import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  console.log('VITE_API_URL:', env.VITE_API_URL);
  
  return {
    server: {
      host: "::",
      port: parseInt(env.PORT || "8080"),
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'https://taskflow-backend-ov87.onrender.com',
          changeOrigin: true,
          secure: true,
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              console.log('Proxying:', req.method, req.url as string, '→', (options.target as string) + (req.url as string));
            });
            proxy.on('error', (err, req, res) => {
              console.log('Proxy error:', err);
            });
          }
        }
      }
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
}); 