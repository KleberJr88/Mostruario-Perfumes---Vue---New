<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { categorias } from '../data/produtos'

const route = useRoute()
const router = useRouter()

const menuAberto = ref(false)

const slugAtual = () => route.params.slug

function irPara(slug) {
  menuAberto.value = false
  if (slug === 'home') {
    router.push('/')
  } else {
    router.push(`/categoria/${slug}`)
  }
}
</script>

<template>
  <button
    class="botao-menu"
    type="button"
    aria-label="Abrir menu"
    @click="menuAberto = !menuAberto"
  >
    <span></span><span></span><span></span>
  </button>

  <nav v-if="menuAberto" class="menu">
    <button
      type="button"
      :class="{ ativo: route.path === '/' }"
      @click="irPara('home')"
    >
      🏠 Home
    </button>
    <button
      v-for="(cat, slug) in categorias"
      :key="slug"
      type="button"
      :class="{ ativo: slug === slugAtual() }"
      @click="irPara(slug)"
    >
      {{ cat.titulo }}
    </button>
  </nav>
</template>

<style scoped>
.botao-menu {
  position: absolute;
  left: 30px;
  top: 25px;
  width: 45px;
  height: 45px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.botao-menu span {
  display: block;
  width: 28px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: background 0.2s ease;
}

.botao-menu:hover span {
  background: #b987ff;
}

.menu {
  position: absolute;
  top: 100%;
  left: 30px;
  width: 280px;
  padding: 10px;
  background: #241a2e;
  border: 1px solid #4b3561;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.menu button {
  display: block;
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  color: white;
  border: none;
  border-radius: 8px;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.menu button:hover {
  background: #352244;
  color: #b987ff;
}

.menu button.ativo {
  background: #352244;
  color: #b987ff;
  font-weight: bold;
}

@media (max-width: 550px) {
  .botao-menu { left: 15px; top: 20px; }
}
</style>