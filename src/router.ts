import VueRouter, { RouterMode } from "vue-router";
import type { RouteConfigSingleView } from "vue-router/types/router";

/** Router Configure */
const routes: RouteConfigSingleView[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/product/:id",
    name: "Product-Detail",
    component: () => import("@/pages/ProductDetail.vue"),
  },
];

export function createRouter(mode: RouterMode): VueRouter {
  return new VueRouter({
    mode,
    routes,
  });
}
