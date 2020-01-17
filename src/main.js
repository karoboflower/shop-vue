/*
 * @Author: wangchunhua
 * @Date: 2019-07-29 17:04:48
 * @Description: 
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/com.css' //全局样式
import './assets/css/app.css' //全局样式
import install from './common' // 自定义全局组件注册
import './assets/icon/iconfont.css' // 阿狸图标
import myCharts from './assets/js/myCharts.js' //echart
import iView from 'iview'
import draggable from 'vuedraggable'
import 'iview/dist/styles/iview.css'
import store from './store/index' //vuex
//const template = require('art-template/lib/template-web');
//import wangeditor from 'wangeditor'
Vue.use(iView);
Vue.use(myCharts)
Vue.use(install)
Vue.use(draggable)
//Vue.use(wangeditor)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.requireAuth
  // 判断该路由是否需要登录权限
  if (requireAuth) {
    if (window.localStorage.getItem('logindata')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})



new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
