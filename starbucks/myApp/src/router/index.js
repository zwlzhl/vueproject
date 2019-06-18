import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: ()=>import('../views/home/home')
    },
    {
      path: '/order',
      component: ()=>import('../views/order/order')
    },
    {
      path: '/login',
      meta: {
        title: "登录"
      },
      component: ()=>import('../views/login/index')
    },
    {
      path: '/detial/:type/:id',
      name: `detial`,
      component: ()=>import('../views/detial/index')
    },
    {
      path: '/commit/:type',
      component: ()=>import('../views/commit/index')
    },
    {
      path: '/history',
      name: `history`,
      component: ()=>import('../views/history/index')
    },
    {
      path: '/approval',
      name: `approval`,
      component: ()=>import('../views/approval/index')
    }
  ]
})