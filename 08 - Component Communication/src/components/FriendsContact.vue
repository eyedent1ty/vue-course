<template>
  <li>
    <h2>{{ name }} {{ isFriendFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle favorite</button>
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
    'emailAddress',
    'isFavorite'
  ],
  data() {
    return {
      friend: {
        id: 'manuel',
        name: 'Manuel Lopez',
        phone: '0123 4567 90',
        email: 'manuel@localhost.com'
      },
      isShowDetailsActive: false,
      isFriendFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.isShowDetailsActive = !this.isShowDetailsActive;
    },
    // ERROR: You cannot mutate the value of props
    // toggleFavorite() {
    //   if (this.isFavorite === '0') {
    //     this.isFavorite === '1';
    //   } else {
    //     this.isFavorite = '0';
    //   }
    // }
    toggleFavorite() {
      if (this.isFriendFavorite === '0') {
        this.isFriendFavorite = '1';
      } else {
        this.isFriendFavorite = '0';
      }
    }
  }
};
</script>