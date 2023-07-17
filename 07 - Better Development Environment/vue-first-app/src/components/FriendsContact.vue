<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ isShowDetailsActive ? 'Hide' : 'Show' }} Details</button>
    <ul v-show="isShowDetailsActive">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
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