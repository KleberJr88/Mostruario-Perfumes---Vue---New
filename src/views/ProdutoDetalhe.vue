<script setup>
	import { computed } from 'vue'
	import { useRoute, RouterLink } from 'vue-router'
	import { buscarProdutoPorId } from '../data/produtos'

	const route = useRoute()

	const perfume = computed(() => buscarProdutoPorId(route.params.id))

	const linkWhatsapp = computed(() => {
	if (!perfume.value) return '#'
	const texto = encodeURIComponent(
	`Olá! Tenho interesse no ${perfume.value.nome} (${perfume.value.preco}).`
	)
	return `https://wa.me/5542988276695?text=${texto}`
	})
</script>

<template>
  <div class="pagina-detalhe">
    <RouterLink to="/" class="voltar">← Voltar</RouterLink>

    <div v-if="perfume" class="produto">
      <div class="foto-grande">
        <img :src="perfume.imagem" :alt="perfume.nome">
      </div>

      <div class="info">
        <p class="marca">{{ perfume.marca }}</p>
        <h1>{{ perfume.nome }}</h1>

        <p class="inspiracao">Inspiração: {{ perfume.inspiracao }}</p>

        <div class="avaliacao">
          <span v-for="estrela in 5" :key="estrela" class="estrela">
            {{ estrela <= perfume.avaliacao ? '★' : '☆' }}
          </span>
        </div>

        <p class="perfil">{{ perfume.perfil }}</p>

        <p class="descricao">{{ perfume.descricao }}</p>

        <p class="volume">Volume: {{ perfume.volume }}</p>
        <p class="preco">{{ perfume.preco }}</p>

        <a
          :href="linkWhatsapp"
          target="_blank"
          rel="noopener"
          class="botao-whatsapp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Comprar via WhatsApp
        </a>
      </div>
    </div>

    <div v-else class="nao-encontrado">
      <h1>Produto não encontrado 😢</h1>
      <RouterLink to="/" class="voltar">Voltar para a Home</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.pagina-detalhe {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 30px;
  min-height: 100vh;
}

.voltar {
  display: inline-block;
  color: #b987ff;
  text-decoration: none;
  margin-bottom: 30px;
  font-size: 16px;
  transition: color 0.2s;
}

.voltar:hover { color: #d4a8ff; }

.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

.foto-grande {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.foto-grande img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.marca {
  color: #b987ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  margin-bottom: 10px;
}

.info h1 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 36px;
  margin-bottom: 10px;
}

.inspiracao {
  color: #999;
  font-size: 14px;
  font-style: italic;
  margin-bottom: 15px;
}

.avaliacao { margin-bottom: 15px; }

.estrela {
  color: #c08cff;
  font-size: 20px;
}

.perfil {
  color: #b987ff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.descricao {
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 15px;
  font-size: 16px;
}

.volume {
  color: #999;
  font-size: 14px;
  margin-bottom: 25px;
}

.preco {
  font-size: 42px;
  font-weight: bold;
  color: white;
  margin-bottom: 25px;
}

.botao-whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 18px 30px;
  background: #25D366;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
}

.botao-whatsapp:hover {
  background: #1EBE57;
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(37, 211, 102, 0.4);
}

.nao-encontrado {
  text-align: center;
  padding: 100px 20px;
}

@media (max-width: 800px) {
  .produto { grid-template-columns: 1fr; gap: 30px; }
  .info h1 { font-size: 28px; }
  .preco { font-size: 34px; }
}
</style>