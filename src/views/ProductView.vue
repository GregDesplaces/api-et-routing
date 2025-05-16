<template>
	<div class="container mt-5">
		<div class="row">
			<!-- Product Image -->
			<div class="col-md-6 mb-4">
				<img
					:src="product.thumbnail"
					alt="Product" class="img-fluid rounded mb-3 product-image" id="mainImage">
			</div>

			<!-- Product Details -->
			<div class="col-md-6">
				<h2 class="mb-3">{{ product.title }}</h2>
				<p class="text-muted mb-4">SKU: {{ product.sku }}</p>
				<div class="mb-3">
					<span class="h4 me-2">{{ product.price }} €</span>
				</div>
				<p class="mb-4">{{ product.description }}</p>
				<div class="mb-4">
					<label for="quantity" class="form-label">Quantité:</label>
					<input type="number" class="form-control" id="quantity" v-model="quantity" min="1" style="width: 80px;">
				</div>
				<button class="btn btn-primary btn-lg mb-3 me-2" @click="addToCart(product, quantity)">
					<i class="bi bi-cart-plus"></i> Ajouter au panier
				</button>
				<button class="btn btn-outline-secondary btn-lg mb-3" @click="goBack">
					<i class="bi bi-arrow-left-square"></i> Retour au shopping
				</button>

			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getProductById } from '@/services/fetch.service'
import { setCart } from '@/services/cart.service'

const router = useRouter()
const route = useRoute()

const product= ref({})

const quantity = ref(1)

const goBack = () => router.back()

const addToCart = () => {
	setCart(product.value, quantity.value)
	router.push('/cart')
}

onBeforeMount( async () => {
	product.value = await getProductById(route.params.id)
})

</script>