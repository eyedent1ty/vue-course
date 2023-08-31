<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Go to product 2</router-link>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const products = inject('products');

const selectedProduct = computed(() => {
  return products.value.find((product) => product.id === route.params.pid);
});

const title = computed(() => {
  return selectedProduct.value.title;
});

const description = computed(() => {
  return selectedProduct.value.description;
});

const price = computed(() => {
  return selectedProduct.value.price;
});
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
