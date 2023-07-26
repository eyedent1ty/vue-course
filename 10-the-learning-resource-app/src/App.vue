<template>
  <ul>
    <stored-resource v-for="storedResource in storedResources" :item="storedResource" :key="storedResource.id"></stored-resource>
  </ul>
</template>

<script>
import StoredResource from './components/StoredResource.vue';

export default {
  components: {
    StoredResource
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  }
}
</script>