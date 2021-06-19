import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/characters",
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/characters",
    name: "Characters",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Characters.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
