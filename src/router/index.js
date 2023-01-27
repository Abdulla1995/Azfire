import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import Isitme from '../components/Isitme.vue'
import Havalandirma from '../components/Havalandirma.vue'
import Soyutma from '../components/Soyutma.vue'
import Yangin from '../components/Yangin.vue'
import Service from '../components/Service.vue'
import Dozimetrik from '../components/Dozimetrik.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/services/isitme-sistemleri',
    name: 'isitme',
    component: Isitme
  },
  {
    path: '/services/havalandirma-sistemleri',
    name: 'havalandirma',
    component: Havalandirma
  },
  {
    path: '/services/soyutma-sistemleri',
    name: 'soyutma',
    component: Soyutma
  },
  {
    path: '/services/yangin-sondurme-sistemleri',
    name: 'yangin',
    component: Yangin
  },
  {
    path: '/services/servis-xidmetlerimiz',
    name: 'service',
    component: Service
  },
  {
    path: '/services/dozimetrik-olcu-cihazlari',
    name: 'dozimetrik',
    component: Dozimetrik
  },
]
// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router    
