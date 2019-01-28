// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import Routes from './routes.js'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
Vue.use(vueRouter)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "data:image/png;base64,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",
  loading: 'http://33.media.tumblr.com/a572806283ab268c4790237198916d1c/tumblr_nitjbcg5j61swjgcuo1_r1_400.gif',
  attempt: 1
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
//路由
const router = new vueRouter({
  routes:Routes,
  mode:'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  AOS,
  components: { App },
  template: '<App/>'
})
