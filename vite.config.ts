import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// The custom domain `yueliusu.top` serves Pages from the root, so the build
// base is `/`. Local `npm run dev` is also `/`, so the conditional is kept just
// to point future readers at the trade-off: if you ever deploy without a custom
// domain again, set the build base to `/<repo>/` (e.g. `/yueliusu/`).
export default defineConfig(() => ({
  base: "/",
  plugins: [react(), tailwindcss()],
}));
