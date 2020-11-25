import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Page1 from "../views/Page1.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "page1",
    component: Page1,
  },
  {
    name: "page2",
    path: "/page",
    component: () => import("../views/Page2.vue"),
  },
  {
    path: "/page/childPage",
    name: "childPage",
    component: () => import("../views/ChildPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
