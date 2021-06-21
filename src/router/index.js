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
    component: () => import("../views/About.vue"),
  },
  {
    path: "/characters",
    name: "Characters",
    component: () => import("../views/Characters.vue"),
  },
  {
    path: "/characters/:id",
    name: "Character Detail",
    component: () => import("../views/CharacterDetail.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
