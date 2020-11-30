import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryList from '../views/categorys/CategoryList.vue'
import CategoryEdit from '../views/categorys/CategoryEdit.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children:[
      { name: 'home', path: '/', component: Home },
      { name: 'categorys-list', path: '/categorys/list', component: CategoryList },
      { name: 'categorys-Edit', path: '/categorys/edit/:id', component: CategoryEdit, props: true },
      { name: 'categorys-create', path: '/categorys/create', component: CategoryEdit }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
