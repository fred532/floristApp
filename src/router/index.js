import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeView'
import Account from '@/components/AccountView'
import Camera from '@/components/CameraView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/camera',
      name: 'Camera',
      component: Camera
    }
  ]
})
