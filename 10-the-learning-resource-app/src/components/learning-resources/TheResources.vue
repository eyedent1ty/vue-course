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
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

class Resource {
  constructor(title, description, link) {
    this.id = title.replaceAll(' ', '-').toLowerCase();
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      storedResources: [
        new Resource(
          'Official Guide',
          'The official Vue.js documentation',
          'https://vuejs.org'
        ),
        new Resource('Google', 'Learn to google...', 'https://google.com')
      ],
      selectedTab: ''
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addNewResource: this.addNewResource,
      deleteResource: this.deleteResource
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    deleteResource(id) {
      const index = this.storedResources.findIndex(
        (storedResource) => storedResource.id === id
      );
      this.storedResources.splice(index, 1);
    },
    getSelectedTab() {
      return this.selectedTab;
    },
    addNewResource(title, description, link) {
      const newResource = new Resource(title, description, link);
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
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
