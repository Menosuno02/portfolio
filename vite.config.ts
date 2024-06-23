import { aliases } from "./.svelte-kit/ambient.d";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@iamages": path.resolve(__dirname, "src/lib"),
    },
  },
});
