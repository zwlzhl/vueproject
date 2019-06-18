import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router=new Router({
  routes: [
    {
      path:'/',
      redirect:'/Home',
    },
    {
      path:'/Home',
      name:'Home',
      component: ()=>import('@/Views/Home'),
      children:[
          {
            path: '/Home',
            redirect: '/Home/Pending',
          },
          {
            path: '/Home/Pending',
            name: 'Pending',
            meta:{
              title:'加班/休假'
            },
            component: ()=>import('@/Views/Pending'),
          },
          {
            path: '/Home/Initiate',
            name: 'Initiate',
            component: ()=>import('@/Views/Initiate'),
          },
          {
            path: '/Home/Processed',
            name: 'Processed',
            component: ()=>import('@/Views/Processed'),
          },
        ]
    },{
      path: '/Search',
      name: 'Search',
      component: ()=>import('@/Views/Search'),
    },{
      path:'/Login',
      name:'Login',
      meta:{
        title:'登录'
      },
      component: ()=>import('@/Views/Login')
    }
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to.meta.title)
  document.title=to.meta.title;
  next()
})

export default router
