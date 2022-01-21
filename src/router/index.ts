import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const mudules = import.meta.globEager("./modules/*.ts");
let routeModuleList: Array<RouteRecordRaw> = Object.keys(mudules)
  .map((item) => {
    const mod = mudules[item].default || {};
    const modList: Array<RouteRecordRaw> = Array.isArray(mod)
      ? [...mod]
      : [mod];
    return modList;
  })
  .reduce((pre, curr) => [...pre, ...curr], []);
const routes: RouteRecordRaw[] = [...routeModuleList];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
