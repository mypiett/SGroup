import { createWebHistory, createRouter } from 'vue-router'
import App from '../App.vue'
import HomeVue from '../pages/Home.vue'
import Detail from '../pages/Detail.vue'


const routes = [
  { path: '/', component: HomeVue },
  { path: '/detail/:name/:id', component: Detail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router; 