import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import HeroList from "../pages/hero/HeroList.vue";
import UserAuth from "../pages/auth/UserAuth.vue";
import HeroDetail from "../pages/hero/HeroDetail.vue";
import BossList from "../pages/Bosses/BossList.vue";
import BossDetail from "../pages/Bosses/BossDetail.vue";

// auth store
import { isAuth } from "../store/authStore.js";
import { userToken } from "../store/authStore.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/hero", component: HeroList, meta: { requiredAuth: true } },
    { path: "/hero/:id", component: HeroDetail, props: false },
    { path: "/auth", component: UserAuth },
    { path: "/boss", component: BossList, meta: { requiredAuth: true } },
    { path: "/boss/:id", component: BossDetail, props: true },
  ],
});

// navigation-gard
let isAuthenticate = !!userToken.value;
console.log(isAuthenticate);

router.beforeEach((to, _, next) => {
  if (to.meta.requiredAuth && !isAuthenticate) {
    alert("please login");
    next("/auth");
  } else {
    next();
  }
});
export default router;
