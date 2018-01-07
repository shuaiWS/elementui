// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import * as axios from "axios"
import Vue from 'vue'
import Vuex from 'Vuex'
import App from './App.vue'
import { routesConfig } from './router'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import store from './store'
import { getBreadCrumb } from './api/common'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(Vuex)
Vue.config.productionTip = false

let app = null

const router = new Router({
  routes: routesConfig
})

// router.beforeEach((to, from, next) => {
//   next();
// })

router.afterEach((to, from) => {
  console.log('router-->to', to)
  console.log('router-->from', from)
  // let path = to.fullPath.split("/")
  // let breadCrumb = getBreadCrumb(path)
  store.commit("setBreadCrumb",[{
    title:to.meta.title,
    path:to.fullPath
  }])
})

app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
