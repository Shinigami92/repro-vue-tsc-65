import CustomerLogin from "@/components/CustomerLogin/CustomerLogin.vue";
import RouterView from "@/components/RouterView.vue";
import Vue from "vue";
import type { RouteConfig } from "vue-router";
import Router from "vue-router";

Vue.use(Router);

const publicPath: string = "/";
const basePath: string = "/";
const customerPath: string =
  publicPath !== basePath ? basePath : publicPath !== "/" ? "/" : "/customer/";

const ROUTES: RouteConfig[] = [
  {
    name: "Root",
    path: `${publicPath}dashboard`,
    component: RouterView,
    redirect: { name: "Dashboard" },
  },
  {
    name: "Customer",
    path: `${customerPath}*`,
    component: CustomerLogin,
  },
  {
    name: "Redirect",
    path: `${publicPath}*`,
    component: RouterView,
    redirect: { name: "Dashboard" },
  },
];

const ROUTER: Router = new Router({
  routes: ROUTES,
  mode: "history",
});

export { ROUTES, ROUTER };
