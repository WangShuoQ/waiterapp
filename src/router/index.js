import Vue from 'vue'
import VueRouter from 'vue-router'
//管理页面
import Manager from '../pages/manager/Layout.vue'
//登录页面
import {getToken,setToken,removeToken} from '../utils/auth'
import store from '../store'
import { Toast } from 'vant'





Vue.use(VueRouter)
const routes = [
  {
    path:"/",
    redirect:"/Login"
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
      let token = getToken();
      if(token){
        // 查询info
        store.dispatch('user/info',token)
        .then(()=>{
          // 当获取万用户信息之后才允许跳转
          next();
        })
      } else {
        Toast("token失效")
        // 跳转到登录
        next({path:'/login'})
      }
    },
    children:[{
      path: 'home',
      component: () => import('../pages/manager/Home.vue')
    },{
      path: '/order',
      component: () => import('../pages/manager/Order.vue')
    },{
      path: '/user',
      component: () => import('../pages/manager/User.vue')
    },{
      path: '/list',
      component: () => import('../pages/manager/list.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
]


const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
