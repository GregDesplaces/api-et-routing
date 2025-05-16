<template>
	<div class="card">
		<img :src="product.thumbnail" class="card-img-top" :alt="`image de ${product.title}`">
		<div class="card-body">
			<h5 class="card-title">{{ product.title }}</h5>
			<p class="card-text">{{ product.description }}</p>
			<RouterLink :to="`/product/${product.id}`" class="btn btn-primary">Voir le produit</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">

defineProps({
	product : {
		type: Object,
		required: true
	}
})

</script>