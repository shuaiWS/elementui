// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import * as axios from "axios"
import Vue from 'vue'
import App from './App.vue'
import {routesConfig} from './router'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)
Vue.config.productionTip = false

let app = null

const router =  new Router({
  routes: routesConfig
})

router.beforeEach((to,from ,next)=>{
  console.log('router-->to',to)
  console.log('router-->from',from)
  next();
})

app = new Vue({
  router,
  render :h=>h(App)
}).$mount('#app')
