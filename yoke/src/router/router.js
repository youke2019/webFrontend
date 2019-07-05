import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home";
import User from "../views/User";
import Comment from  "../views/Comment"
import Search from "../views/Search"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Home",
      component: Home
    },
    {
      path: "/Login",
      component:Login
    },
    {
      path: "/User",
      component:User
    },
    {
      path:"/Comment",
      component:Comment
    },
    {
      path:"/Search",
      component:Search
    }
  ]
});
