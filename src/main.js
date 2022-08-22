import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMeta from 'vue-meta'
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  mounted() {
    AOS.init()
  }
}).$mount('#app')
