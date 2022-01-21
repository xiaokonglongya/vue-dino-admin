import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
const homeRouter: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: Layout,
    children: [
      {
        path: "",
        name: "HomeIndex",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];
export default homeRouter;
