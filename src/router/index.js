import Vue from 'vue'
import Router from 'vue-router'

import escloud_router_list from './escloud/index'

Vue.use(Router)

export default new Router({
  mode:'hash',
  base:'/escloud/',
  routes: escloud_router_list,
})
