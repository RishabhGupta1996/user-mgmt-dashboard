import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Dashboard from '@/views/Dashboard.vue'
import { useAuthStore } from '../store/auth'

const routes: RouteRecordRaw[] = [
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  // Add other routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/signin') // Redirect to sign-in page if authentication is required but user is not authenticated
  } else {
    next() // Proceed to the requested route
  }
})

export default router
