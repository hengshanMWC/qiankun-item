import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import qiankun from "vite-plugin-qiankun";
import path from "path";
const { name } = require("./package");
const useDevMode = true;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      hot: !useDevMode,
    }),
    qiankun(name, { useDevMode }),
  ],
  server: {
    port: 8004,
    cors: true,
  },
  // 生产环境需要指定运行域名作为base
  // base: "http://localhost:8004",
  build: {
    target: "esnext",
    lib: {
      name: `${name}-[name]`,
      entry: path.resolve(__dirname, "src/main.ts"),
      formats: ["umd"],
    },
  },
});
