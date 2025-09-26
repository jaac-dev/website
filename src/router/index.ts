import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
      meta: { title: 'Home - jaac.dev' },
    },
  ],
})

router.beforeEach((to, from, next) => {
  ;(document.title as any) = to.meta.title || 'jaac.dev'
  next()
})

export default router
