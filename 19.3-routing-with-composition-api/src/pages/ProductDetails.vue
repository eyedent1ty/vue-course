<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Go to Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  props: ['pid'],
  setup(props) {
    const products = inject('products');

    // let selectedProduct = products.value.find((product) => product.id === props.pid);

    // const title = ref(selectedProduct.title);
    // const description = ref(selectedProduct.description);
    // const price = ref(selectedProduct.price);

    // watch(props, () => {
    //   selectedProduct = products.value.find((product) => product.id === props.pid);
    //   title.value = selectedProduct.title;
    //   description.value = selectedProduct.description;
    //   price.value = selectedProduct.price;
    // });

    const selectedProduct = computed(() => {
      return products.value.find((product) => product.id === props.pid);
    });

    const title = computed(() => selectedProduct.value.title);
    const description = computed(() => selectedProduct.value.description);
    const price = computed(() => selectedProduct.value.price);

    return { title, description, price };
  }
};
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
