import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves this repo at https://yueliusu.github.io/yueliusu/,
// so Vite must emit asset URLs under the `/yueliusu/` base rather than `/`.
// `command === "build"` keeps the dev server on `/` so local preview stays clean.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/yueliusu/" : "/",
  plugins: [react(), tailwindcss()],
}));
