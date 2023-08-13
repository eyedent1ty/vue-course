<template>
  COACH DETAIL
  <router-view></router-view>
  <router-link :to="`/coaches/${id}/contact`">Contact</router-link>
</template>

<script>
export default {
  props: ['id']
}
</script>