import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import MyTable from '@/components/MyTable'
import Home from '@/components/Home'

Vue.use(Router)

let router = new Router({
// mode: 'history',
  routes: [
    // {
    //   path: '/login',
    //   name: '登录',
    //   component: Login
    // },
    {
      path: '/home',
      name: 'home',
      component: Home,
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/helloWorld', component: HelloWorld, name: '首页', menuShow: true}
      ]
    }
  ]
})

export default router
