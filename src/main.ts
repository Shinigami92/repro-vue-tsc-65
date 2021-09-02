// import * as volar from "@volar/experimental/client";

import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

import VuexI18n from "vuex-i18n";

// Vuetify
import vuetify from "./plugins/vuetify";

import App from "./App.vue";

Vue.use(VueCompositionAPI);

const defaultLanguage: string = "en";

Vue.use(VuexI18n.plugin, null /* store */, {});
Vue.i18n.set(defaultLanguage);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  //   store,
  render: (h) => h(App),
}).$mount("#app");
