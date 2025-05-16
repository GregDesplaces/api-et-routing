<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">

        <!-- Panier vide -->
        <div v-if="!cart">
          Panier vide
        </div>
        <!-- Panier présent -->
        <div v-else class="card" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
							<!-- Partie liste produits -->
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0">Panier</h1>
                    <h6 class="mb-0 text-muted">{{ getQuantity }} articles</h6>
                  </div>
                  <hr class="my-4">

								 <ProductItem v-for="product in cart" :key="product.id" :product="product"/>


                  <div class="pt-5">
                    <h6 class="mb-0"><RouterLink to="/" class="text-body"><i class="bi bi-arrow-left-square me-2"></i>Retour à la boutique</RouterLink></h6>
                  </div>
                </div>
              </div>
							<!-- Partie résumé -->
              <div class="col-lg-4 bg-body-tertiary">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Résumé</h3>
                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">{{ getQuantity }} articles</h5>
                    <!-- TODO: calculer le total avec une fonction computed -->
                    <h5>€ 132.00</h5>
									</div>
                 
									<div class="d-flex justify-content-between mb-4">
                    <h6 class="text-uppercase small">Dont TVA</h6>
                    <!-- TODO: calculer la TVA  -->
                    <h6>{{(132.00 * 20 / 120).toFixed(2) }} €</h6>
									</div>

                  <hr class="my-4" >

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total</h5>
                    <h5>€ 137.00</h5>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductItem from '@/components/cart/ProductItem.vue'
import { getCart } from '@/services/cart.service'
import { ref, computed } from 'vue'

const cart = ref(getCart())

const getQuantity = computed(() => {
	return cart.value.reduce((acc, product) => acc + product.quantity, 0)
  // Avec une boucle for
  // let total = 0
  // for (let i = 0; i < cart.value.length; i++) {
  //   total += cart.value[i].quantity
  // }
  // return total
})

</script>