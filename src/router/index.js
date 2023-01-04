import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path : '/Login',
    name : 'Login',
    component : () => import('../views/Login.vue')
},
{
   path : '/DashBoard',
   name : 'DashBoard',
   component : () => import('../views/DashBoard.vue')
},

{
   path : '/User',
   name : 'User',
   component : () => import('../views/User.vue')
},
{
  path : '/Table',
  name : 'Table',
  component : () => import('../views/Table.vue')
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
