<template>
		<div class="container py-2 text-center">
		<h1>Choisir une catégorie</h1>

		<hr>

		<div class="row row-cols-4 row-cols-md-6 row-cols-lg-12 g-4">

			<div class="col" v-for="cat in categories" :key="cat.slug">
				<!-- Carte des produits -->
				 <RouterLink :to="`${cat.slug}/products`" class="btn btn-outline-primary">

					 {{ cat.name }}
				 </RouterLink>
			</div>

		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAllCategories } from '@/services/fetch.service'

const categories = ref([])

onMounted( async () => {
	categories.value = await getAllCategories()
})

</script>