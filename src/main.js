import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMeta from 'vue-meta'
import AOS from 'aos'
import VueHorizontalTimeline from "vue-horizontal-timeline";
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmoothScrollbar from 'vue-smooth-scrollbar'
import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";

Vue.use(Flicking);
Vue.use(VueMeta)
Vue.use(VueHorizontalTimeline)
gsap.registerPlugin(ScrollTrigger)

Vue.use(SmoothScrollbar)
Vue.config.productionTip = false
Vue.prototype.$gsap = gsap

new Vue({
    vuetify,
    render: h => h(App),
    mounted() {
        AOS.init()
    }
}).$mount('#app')