import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import axios from "axios";
import store from "../store";
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (!token) {
        next("/");
      } else {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        axios
          .post("http://localhost/user/validate", {}, { headers })
          .then((response) => {
            store.commit("UPDATE_USER", response.data.user);
            store.commit("UPDATE_TOKEN", token);
            store.commit("UPDATE_LOGIN", true);
            next();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
