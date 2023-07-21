<template>
  <the-header></the-header>
  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
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
    setSelectedComponent(componentName) {
      this.selectedComponent = componentName;
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