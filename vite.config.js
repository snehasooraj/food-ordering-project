import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // KEEP this line for React functionality
import tailwindcss from "@tailwindcss/vite"; // ADD this line for the Tailwind plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Register the React plugin
    tailwindcss(), // Register the Tailwind CSS plugin
  ],
});
