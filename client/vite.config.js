import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    build: {
      outDir: 'dist',
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          secure: false,
        },
      },
    },
    plugins: [react()],
    define: {
      'process.env': JSON.stringify(env), // Ensures env variables are available
    },
  };
});
