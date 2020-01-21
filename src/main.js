import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import SuiVue from "semantic-ui-vue";
import VueRouter from "vue-router";
import Profile from "./components/Profile";
import "semantic-ui-css/semantic.min.css";

Vue.config.productionTip = false;
Vue.use(SuiVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/profile/:userId", name: "profile", component: Profile }
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
