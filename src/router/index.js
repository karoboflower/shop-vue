import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/homeRouter'
import login from '@/views/login/loginRouter'


Vue.use(Router)

export default new Router({
  //mode: 'history',  //去掉url中的#
  routes: [
    { path: '/', 
    redirect: { name: 'home' }   
 },
    home,login
  ],
  
})


