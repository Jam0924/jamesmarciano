import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all env variables from the current working directory regardless of prefix
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.app', env.VITE_NGROK_FORMATTED_HOST],
    },
  };
});

