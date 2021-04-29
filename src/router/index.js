import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create',
    component: () => import('../views/Create.vue')
  },
  {
    path:'/tasks',
    name:'tasks',
    component: () => import('../views/Tasks.vue')
  },
  {
    path:'/tasks/:id',
    name:'some_task',
    component: () => import('../views/SomeTask.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
