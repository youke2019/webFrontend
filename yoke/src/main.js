import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import ElementUI from "element-ui";
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
//上面这句真他妈的重要，不然渲染不出来switch
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
