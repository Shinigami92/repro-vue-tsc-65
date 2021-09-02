// import * as volar from "@volar/experimental/compiler";
import { resolve } from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(/*volar.getVuePluginOptionsForVite()*/)],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
