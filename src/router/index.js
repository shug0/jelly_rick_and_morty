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
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/characters",
    name: "characters",
    component: () => import("../views/Characters.vue"),
  },
  {
    path: "/characters/:id",
    name: "details",
    component: () => import("../views/CharacterDetails.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
