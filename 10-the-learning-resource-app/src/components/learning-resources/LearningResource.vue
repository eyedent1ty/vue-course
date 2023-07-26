<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button @click="emitDeleteEvent">Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  emits: ['delete'],
  methods: {
    emitDeleteEvent() {
      this.$emit('delete', this.id);
    }
  }
};
</script>
