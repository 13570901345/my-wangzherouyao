import Vue from 'vue'
import VueRouter from 'vue-router'
import hxk from '../views/hxk.vue'
import createnav from '../views/createnav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hxk',
    component: hxk,
    children:[
      {
        path:'/nav/createnav',
        component:createnav
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
