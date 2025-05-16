<template>
	<div class="container py-2 text-center">
		<h1>Liste des produits par catégories</h1>

		<hr>

		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

			<div class="col" v-for="product in products" :key="product.id">
				<!-- Carte des produits -->
				<ProductCard :product="product" />
			</div>

		</div>
	</div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import { getProducts } from '@/services/fetch.service';
import { useRoute } from 'vue-router';

const route = useRoute()


const products = ref([])

onBeforeMount( async () => {
	products.value = await getProducts(route.params.category)
})
	

</script>
