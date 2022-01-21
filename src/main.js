import Vue from 'vue'
import App from './App.vue'
import router from './routes/routes'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import vuetify from "@/plugins/vuetify"

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');