<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ isShowDetailsActive ? 'Hide' : 'Show' }} Details</button>
    <ul v-show="isShowDetailsActive">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: [
    'name',
    'phoneNumber',
    'emailAddress'
  ],
  data() {
    return {
      friend: {
        id: 'manuel',
        name: 'Manuel Lopez',
        phone: '0123 4567 90',
        email: 'manuel@localhost.com'
      },
      isShowDetailsActive: false
    };
  },
  methods: {
    toggleDetails() {
      this.isShowDetailsActive = !this.isShowDetailsActive;
    }
  }
};
</script>