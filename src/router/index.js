import Vue from 'vue'
import VueRouter from 'vue-router'
import bio from '../components/1.vue'
import education from '../components/2.vue'
import skills from '../components/3.vue'
import projects from '../components/4.vue'
import contacts from '../components/5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/1',
    name: 'bio',
    component: bio
  },
  {
    path: '/2',
    name: 'education',
    component: education
  },
  {
    path: '/3',
    name: 'skills',
    component: skills
  },
  {
    path: '/4',
    name: 'projects',
    component: projects
  },
  {
    path: '/5',
    name: 'contacts',
    component: contacts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
