import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMeta from 'vue-meta'
import AOS from 'aos'
import VueHorizontalTimeline from "vue-horizontal-timeline";
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'

Vue.use(VueMeta)
Vue.use(VueHorizontalTimeline)
gsap.registerPlugin(ScrollTrigger)

Vue.config.productionTip = false
Vue.prototype.$scrollbar = Scrollbar
Vue.prototype.$gsap = gsap

new Vue({
  vuetify,
  render: h => h(App),
  mounted() {
    AOS.init()
  }
}).$mount('#app')
