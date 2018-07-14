import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/pages/home/home'], resolve)
    },
    {
      path: '/contArticle',
      name: 'contArticle',
      component: resolve => require(['@/pages/article/contArticle'], resolve)
    },
    {
      path: '/partner',
      name: 'partner',
      component: resolve => require(['@/pages/article/partner'], resolve)
    },{
      path: '/guide',
      name: 'guide',
      component: resolve => require(['@/pages/article/guide'], resolve)
    },
    {
      path: '/seat',
      name: 'seat',
      component: resolve => require(['@/pages/article/seat'], resolve)
    },
  
    {
      path: '/delegate',
      name: 'delegate',
      component: resolve => require(['@/pages/article/delegate'], resolve)
    },
    {
      path: '/bmap',
      name: 'bmap',
      component: resolve => require(['@/pages/article/bmap'], resolve)
    },
    {
      path: '/room',
      name: 'room',
      component: resolve => require(['@/pages/article/room'], resolve)
    },
    {
      path: '/telList',
      name: 'telList',
      component: resolve => require(['@/pages/article/telList'], resolve)
    },
  ]
})
