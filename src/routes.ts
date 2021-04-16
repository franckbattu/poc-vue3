import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('./views/TodoList.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('./views/Posts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
