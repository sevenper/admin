import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { matchBrumb } from "./utils/matchRoute";
import "element-ui/lib/theme-chalk/index.css";
import "./style/index.less";
import { axiosHttp } from "./utils/http.js";
import VueClipboard from "vue-clipboard2";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = new axiosHttp();
Vue.use(VueClipboard);

router.beforeEach((to, from, next) => {
  store.commit("BREADCRUMBS", {
    breadCrumbs: matchBrumb(to.path, store.getters.menu)
  });
  store.commit("DEFAULTPATH", { defaultPath: to.path });
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
