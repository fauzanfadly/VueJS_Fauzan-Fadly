import Home from '../views/Home.vue'
import Todo from "../views/Todo.vue"
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes
})

export default router
