import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    layout?: string;
    protected?: boolean;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('./views/Todos.vue'),
    meta: {
      title: 'Todos'
    }
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('./views/Posts.vue'),
    meta: {
      title: 'Posts',
      layout: 'AdminLayout'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.meta.hasOwnProperty('title')) {
    document.title = `${to.meta.title as string} - Vue 3 with ViteJS`;
    next();
  }
  else {
    next();
  }
});

export default router;
