<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increaseCounter({ value: 10 })">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import { mapActions } from 'vuex';

import BaseContainer from './components/UI/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue
  },
  methods: {
    ...mapActions(['increaseCounter'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
