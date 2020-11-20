import Vue from 'vue'
import VueRouter from 'vue-router'
import PointCreate from '@/views/PointCreate'
import MapView from '@/views/MapView'
Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect: "/home"
  },
  {
    path: '/miniWindow',
    name: 'miniWindow',
    component: PointCreate
  },
  {
    path: '/home',
    name: 'home',
    component: MapView
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
