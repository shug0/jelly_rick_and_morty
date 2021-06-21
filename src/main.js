import Vue from "vue";
import VueMeta from "vue-meta";
import "reset-css";

import "./registerServiceWorker";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
