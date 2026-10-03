<script setup="">
	defineProps({
	perfume: { type: Object, required: true }
	})
</script>

<template>
	<RouterLink :to="`/produto/${perfume.id}`" class="card">
		<div class="imagem-container">
			<img :src="perfume.imagem" :alt="perfume.nome">
    </div>

		<div class="informacoes">
			<h2>{{ perfume.nome }}</h2>

			<div class="avaliacao">
				<span v-for="estrela in 5" :key="estrela" class="estrela">
					{{ estrela <= perfume.avaliacao ? '★' : '☆' }}
				</span>
			</div>

			<p class="preco">{{ perfume.preco }}</p>
		</div>
	</RouterLink>
</template>

<style scoped="">
	.card {
	display: flex;
	align-items: center;
	min-height: 190px;
	background: #241a2e;
	border: 2px solid transparent;
	border-radius: 14px;
	overflow: hidden;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
	transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
	}

	.card:hover {
	transform: translateY(-5px);
	border-color: #a66cff;
	box-shadow: 0 10px 30px rgba(166, 108, 255, 0.25);
	}

	.imagem-container {
	width: 50%;
	height: 190px;
	flex-shrink: 0;
	overflow: hidden;
	background: white;
	}

	.imagem-container img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	transition: transform 0.35s ease;
	}

	.card:hover .imagem-container img { transform: scale(1.06); }

	.informacoes {
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	}

	.informacoes h2 {
	margin-bottom: 10px;
	font-size: 20px;
	transition: color 0.25s ease;
	}

	.card:hover .informacoes h2 {
	color: #b987ff;
	text-decoration: underline;
	}

	.avaliacao { margin-bottom: 10px; }

	.estrela {
	color: #c08cff;
	font-size: 18px;
	}

	.preco {
	font-size: 24px;
	font-weight: bold;
	color: white;
	}

	@media (max-width: 550px) {
	.card { min-height: 160px; }
	.imagem-container { height: 160px; }
	.informacoes { padding: 15px; }
	.informacoes h2 { font-size: 17px; }
	.preco { font-size: 21px; }
	}
</style>