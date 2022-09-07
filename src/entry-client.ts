import { createApp } from "./main";

const { app, router } = createApp("history");

router.onReady(() => {
  app.$mount("#app");
});
