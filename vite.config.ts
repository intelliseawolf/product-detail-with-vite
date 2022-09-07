import vue from "@vitejs/plugin-vue2";
import { defineConfig, type UserConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  const config: UserConfig = {
    base: "/",
    resolve: {
      alias: [
        {
          // vue @ shortcut fix
          find: "@/",
          replacement: `${path.resolve(__dirname, "./src")}/`,
        },
      ],
    },
    server: {
      fs: {
        allow: [".."],
      },
    },
    plugins: [vue()],

    build: {
      // rollupOptions: {
      //   external: ["vue-ssr-carousel"],
      // },
      target: "es2021",
    },
  };

  return config;
});
