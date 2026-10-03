<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { categorias } from '../data/produtos'
import CardPerfume from '../components/CardPerfume.vue'
import MenuLateral from '../components/MenuLateral.vue'

const route = useRoute()
const categoria = computed(() => categorias[route.params.slug])
</script>

<template>
  <div class="site">
    <header class="header">
      <div class="cabecalho">
        <MenuLateral />
        <h1>{{ categoria?.titulo || 'Categoria' }}</h1>
      </div>
    </header>

    <main v-if="categoria" class="catalogo">
      <CardPerfume
        v-for="produto in categoria.produtos"
        :key="produto.id"
        :perfume="produto"
      />
    </main>

    <div v-else class="nao-encontrado">
      <h1>Categoria não encontrada 😢</h1>
      <RouterLink to="/" class="voltar">Voltar para a Home</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.site { min-height: 100vh; }

.header {
  position: relative;
  padding: 25px 30px;
  border-bottom: 1px solid #3d2b52;
}

.cabecalho {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 45px;
}

.header h1 {
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-weight: bold;
  font-size: 42px;
  color: white;
}

.catalogo {
  width: min(1100px, 92%);
  margin: 45px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.nao-encontrado {
  text-align: center;
  padding: 100px 20px;
}

.voltar {
  display: inline-block;
  margin-top: 20px;
  color: #b987ff;
  text-decoration: none;
}

@media (max-width: 800px) {
  .catalogo { grid-template-columns: 1fr; }
}

@media (max-width: 550px) {
  .header { padding: 20px; }
  .header h1 { font-size: 26px; }
  .catalogo { width: 94%; }
}
</style>