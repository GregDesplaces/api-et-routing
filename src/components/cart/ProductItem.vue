<template>
	<!-- Produit 1 -->
	<div class="row mb-4 d-flex justify-content-between align-items-center">
		<div class="col-md-2 col-lg-2 col-xl-2">
			<img :src="product.thumbnail"
				class="img-fluid rounded-3" alt="Cotton T-shirt">
		</div>
		<div class="col-md-3 col-lg-3 col-xl-3">
			<h6 class="text-muted">{{ product.title }}</h6>
			<h6 class="mb-0 small">Prix unitaire : {{ product.price }} €</h6>
		</div>
		<div class="col-md-3 col-lg-3 col-xl-2 d-flex">
			<!-- TODO: faire une fonction pour eviter les valeurs négatives et supérieur au stock -->
			<button class="btn btn-link px-2" @click="product.quantity--">
				<i class="bi bi-dash-circle"></i>
			</button>

			<!-- TODO: mettre à jour la quantité dans le localstorage -->
			<input id="form1" min="0" name="quantity" v-model="product.quantity" type="number" class="form-control form-control-sm" />

			<button class="btn btn-link px-2" @click="product.quantity++">
				<i class="bi bi-plus-circle"></i>
			</button>
		</div>
		<div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
			<h6 class="mb-0">{{ (product.price * product.quantity).toFixed(2) }} €</h6>
		</div>
		
	</div>

	<hr class="my-4">
</template>

<script setup>

defineProps({
	product: {
		type: Object,
		required: true
	}
})

</script>