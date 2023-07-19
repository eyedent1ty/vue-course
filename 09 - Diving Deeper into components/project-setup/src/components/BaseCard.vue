<template>
  <!-- Inside the template, you can access all the properties of a component instance without using the "this" keyword, the scope is already pointing to the component instance itself -->
  <section>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- Default content of a slot -->
        <h2>Default header</h2>
      </slot>
    </header>
    <slot></slot>
  </section>
</template>

<script>
export default {
  mounted() {
    // All named and default slot can be accessed to the $slots property of an component instance
    console.log(this.$slots.header);
  }
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>