import Vue from 'vue';
import App from './App.vue';
import router from './routes/routes';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import vuetify from "@/plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAP_KEY,
    libraries: "places"
  }
});

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');