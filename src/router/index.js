import Vue from "vue";
import VueRouter from "vue-router";
import PSignIn from "../pages/PSignIn.vue";
import PSignUp from "../pages/PSignUp.vue";
import PAccount from "../pages/PAccount.vue";
import PMembers from "../pages/PMembers.vue";
import PErrors from "../pages/PErrors.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Account",
    component: PAccount,
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
  },
  {
    path: "/errors",
    name: "Errors",
    component: PErrors,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
