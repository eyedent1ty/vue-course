<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addResourceMode"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab" @delete="deleteResource"></component>
</template>

<script>
import { computed } from 'vue';

import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
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
      ],
      selectedTab: ''
    };
  },
  provide() {
    return {
      resources: computed(() => this.storedResources)
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(
        (storedResource) => storedResource.id !== id
      );
    },
    getSelectedTab() {
      return this.selectedTab;
    }
  },
  computed: {
    storedResourcesMode() {
      return this.selectedTab === 'stored-resources' ? '' : 'flat';
    },
    addResourceMode() {
      return this.selectedTab === 'add-resource' ? '' : 'flat';
    }
  }
};
</script>
