// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axiosPlugin from './server'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'jquery'

import './assets/icon/iconfont.css';
import '../static/css/el_style.css'
import '../static/css/frame.css'

Vue.use(axiosPlugin);

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


