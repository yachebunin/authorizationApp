import Vue from "vue";
import VueRouter from "vue-router";
import PSignIn from "../pages/PSignIn.vue";
import PSignUp from "../pages/PSignUp.vue";
import PAccount from "../pages/PAccount.vue";
import PMembers from "../pages/PMembers.vue";
import PErrors from "../pages/PErrors.vue";
import { isAuthenticated } from "../services/auth/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Account",
    component: PAccount,
    beforeEnter: (from, to, next) => {
      isAuthenticated ? next() : next({ name: "SignIn" });
    },
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: PSignUp,
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: PSignIn,
  },
  {
    path: "/members",
    name: "Members",
    component: PMembers,
    beforeEnter: (from, to, next) => {
      isAuthenticated ? next() : next({ path: "/signIn" });
    },
  },
  {
    path: "*",
    component: PErrors,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
