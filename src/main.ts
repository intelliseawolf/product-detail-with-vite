import Vue from "vue";
import VueRouter, { RouterMode } from "vue-router";

Vue.config.productionTip = false;

import App from "./App.vue";
import { createRouter } from "./router";

Vue.use(VueRouter);

export function createApp(mode: RouterMode) {
  const router = createRouter(mode);
  const app = new Vue({
    router,
    render: (h) => h(App),
  });

  return {
    router,
    app,
  };
}
