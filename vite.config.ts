import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/

const pathResolve = (dir: string) => resolve(__dirname, dir);

export default defineConfig({
  plugins: [vue(), WindiCSS(), vueJsx()],
  server: {
    host: true,
  },
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: pathResolve("types") + "/",
      },
      {
        find: "@",
        replacement: pathResolve("src") + "/",
      },
    ],
    dedupe: ["vue"],
  },
});
