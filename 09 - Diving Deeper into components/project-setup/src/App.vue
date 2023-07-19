<template>
  <the-header></the-header>
  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <component :is="selectedComponent"></component>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals'
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>