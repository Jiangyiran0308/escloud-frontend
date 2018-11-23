import Vue from 'vue'
import Router from 'vue-router'

import escloud_router_list from './escloud/index'
import server from  '../server/index'

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: escloud_router_list,
});

export default router
