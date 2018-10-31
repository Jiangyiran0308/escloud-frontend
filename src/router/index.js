import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/menu/index'
import UserHome from '../components/HotTag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/my.j.blog/'
    },
    {
      path:'/my.j.blog',
      name:'userhome',
      component:  Index,
      children:[
        {
          path: '',
          redirect: '/my.j.blog/home'
        },
        {
          path:'home',
          name:'userhome',
          component:UserHome,
        }
      ]
    },
  ]
})
