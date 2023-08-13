<template>
  <the-nav></the-nav>
  <router-view></router-view>
</template>

<script>
import TheNav from './components/layout/TheNav.vue';

export default {
  components: {
    TheNav
  }
}
</script>