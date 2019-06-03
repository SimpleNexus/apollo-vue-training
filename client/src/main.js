import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import { apolloClient } from "./apolloClient";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueApollo);
const provider = new VueApollo({ defaultClient: apolloClient });

new Vue({
  render: h => h(App),
  apolloProvider: provider
}).$mount("#app");
