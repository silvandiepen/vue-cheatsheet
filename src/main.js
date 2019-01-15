import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "highlight.js/styles/default.css";
import Highlight from "vue-markdown-highlight";

Vue.use(Highlight);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
