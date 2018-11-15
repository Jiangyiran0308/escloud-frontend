import Vue from 'vue'
import Router from 'vue-router'

import escloud_router_list from './escloud/index'

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: escloud_router_list,
});

router.beforeEach((to,from,next)=>{
  // console.log(to);
  // console.log(from);
  // console.log(next);
  if(to.path.startsWith('/login')){
    window.sessionStorage.removeItem("escloud_id");
    next();
  }else{
    let id = window.sessionStorage.getItem("escloud_id");
    if(!id){
      next({path:'/login'})
    }else{
      next();
    }
  }
});

export default router
