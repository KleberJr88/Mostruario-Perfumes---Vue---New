import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalogo from '../views/Catalogo.vue'
import ProdutoDetalhe from '../views/ProdutoDetalhe.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/categoria/:slug', name: 'categoria', component: Catalogo },
  { path: '/produto/:id', name: 'produto', component: ProdutoDetalhe }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})