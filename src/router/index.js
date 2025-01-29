import { createRouter, createWebHistory } from 'vue-router'

// Import your pages/components
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import Training from '../pages/Training.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/training', component: Training },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
