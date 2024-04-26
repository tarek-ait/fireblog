import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";

Vue.use(Vue2Editor);

Vue.config.productionTip = false;
// this is the version 2 
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
