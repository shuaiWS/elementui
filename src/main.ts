// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'Vuex'
import App from './App.vue'
import { routesConfig ,router } from './router'
// import Router from 'vue-router'
import ElementUI from 'element-ui'
import store from './store'
import { getBreadCrumb } from './api/common'
import 'element-ui/lib/theme-chalk/index.css'
import { USERNAME, COOKID, HESTORY,BASEURL } from "./api/storge"
import { getCookie } from "./api/cookie"
import axios from "axios"
// import 

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

let app = null

router.beforeEach((to, from, next) => {
  //如果没有登录
  if (to.meta && to.meta.needLogin && !sessionStorage[USERNAME]) {
    localStorage.setItem(HESTORY, to.fullPath)
    next({
      path:`/user/login`
    })
  } else {
    next();
  }
})

router.afterEach((to, from) => {
  let fullPath = to.fullPath.split('/')
  let path = fullPath[fullPath.length-1]
  //设置当前活动页
  if(to.meta && to.meta.title){
    store.commit("setActive", path)
  }
  //面包屑
  store.commit("setBreadCrumb", [{
    title: to.meta.title,
    path: to.fullPath
  }])
})
// axios 配置
axios.defaults.timeout = 10000; 
axios.defaults.baseURL = BASEURL; //这是调用数据接口

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = getCookie(COOKID) //获取Cookie
    // config.data = JSON.stringify(config.data)
    if (token) {
      if(config.params){
        config.params.token = token
      }else{
        config.params = {'token': token} 
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)


// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode == 2) {
//       router.push({
//         path: '/login',
//         query: {redirect: router.currentRoute.fullPath} //从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error.response.data)
//   });
app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
