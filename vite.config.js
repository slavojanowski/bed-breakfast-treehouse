import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base: "https://treehouse.orangelionstudio.com/",
  server: {
    port: 3000,
  },
  plugins: [react()],
});
