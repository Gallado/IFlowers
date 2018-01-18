import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component:resolve => require(['../pages/home/Home'],resolve),
      meta: {footerShow: true,headerShow:true,titleName:'首页'}
    },
    {
      path: '/home',
      name: 'Home',
      component:resolve => require(['../pages/home/Home'],resolve),
      meta: {footerShow: true,headerShow:true,titleName:'首页'}
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component:resolve => require(['../pages/discovery/Discovery'],resolve),
      meta: {footerShow: true,headerShow:false}
    },
    {
      path: '/showTime',
      name: 'ShowTime',
      component:resolve => require(['../pages/showTime/ShowTime'],resolve),
      meta: {footerShow: true,headerShow:true,titleName:'秀恩爱'}
    },
    {
      path: '/personCenter',
      name: 'PersonCenter',
      component: resolve => require(['../pages/personCenter/PersonCenter'],resolve),
      meta: {footerShow: true,headerShow:false}
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../pages/login/Login'],resolve),
      meta: {footerShow: false,headerShow:false}
    }
  ]
})
