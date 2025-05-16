<template>
	<!-- Produit 1 -->
	<div class="row mb-4 d-flex justify-content-between align-items-center">
		<!-- Image -->
		<div class="col-md-2 col-lg-2 col-xl-2">
			<img :src="product.thumbnail"
				class="img-fluid rounded-3" alt="Cotton T-shirt">
		</div>
		<!-- Titre -->
		<div class="col-md-3 col-lg-3 col-xl-3">
			<h6 class="text-muted">{{ product.title }}</h6>
			<h6 class="mb-0 small">Prix unitaire : {{ product.price }} €</h6>
		</div>
		<!-- Quantité -->
		<div class="col-md-3 col-lg-3 col-xl-2 d-flex">
			<button class="btn btn-link px-2" @click="updateQuantity(-1)">
				<i class="bi bi-dash-circle"></i>
			</button>

			<input :id="`quantity-${product.id}`" min="0" v-model="product.quantity" type="number" class="form-control form-control-sm" @change="setCart(product, product.quantity, true)
"/>

			<button class="btn btn-link px-2" @click="updateQuantity(1)">
				<i class="bi bi-plus-circle"></i>
			</button>
		</div>

		<!-- Total -->
		<div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
			<h6 class="mb-0">{{ (product.price * product.quantity).toFixed(2) }} €</h6>
		</div>

		<!-- Supprimer -->
		 	<!-- Total -->
		<div class="col-md-1 ">
			<button class="btn px-2" @click="deleteProductFromCart(product.id)">
				<i class="bi bi-trash text-danger"></i>
			</button>
		</div>
		
	</div>

	<hr class="my-4">
</template>

<script setup>
import { setCart } from '@/services/cart.service'

const emit = defineEmits(['deleteProduct'])

const deleteProductFromCart = (id) => {
	emit('deleteProduct', id)
}

const updateQuantity = (q) => {
	if ((props.product.quantity + q) > 0  && (props.product.quantity + q) < props.product.stock) {
		props.product.quantity += q
	}
	setCart(props.product, props.product.quantity, true)
}

const props = defineProps({
	product: {
		type: Object,
		required: true
	}
})


</script>

<style scoped>
.form-control {
	min-width: 50px;
	text-align: right;
}
</style>