<script setup="">
	import { todosOsProdutos } from '../data/produtos'
	import CardPerfume from '../components/CardPerfume.vue'
	import MenuLateral from '../components/MenuLateral.vue'
</script>

<template>
	<div class="site">
		<header class="header">
			<div class="cabecalho">
				<MenuLateral />
				<h1>Mostruário</h1>
			</div>
		</header>

		<main class="catalogo">
			<CardPerfume
			  v-for="produto in todosOsProdutos"
			  :key="produto.id"
			  :perfume="produto"
      />
		</main>
	</div>
</template>

<style scoped="">
	.site {
	min-height: 100vh;
	}

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

	@media (max-width: 800px) {
	.catalogo { grid-template-columns: 1fr; }
	}

	@media (max-width: 550px) {
	.header { padding: 20px; }
	.header h1 { font-size: 28px; }
	.catalogo { width: 94%; }
	}
</style>