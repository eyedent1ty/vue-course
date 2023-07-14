<template>
  <li>
    <h2>{{ name }} {{ isFriendFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle favorite</button>
    <button @click="toggleDetails">
      {{ isShowDetailsActive ? "Hide" : "Show" }} Details
    </button>
    <ul v-show="isShowDetailsActive">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel Lopez",
        phone: "0123 4567 90",
        email: "manuel@localhost.com",
      },
      isShowDetailsActive: false,
      isFriendFavorite: this.isFavorite,
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
      this.isFriendFavorite = !this.isFriendFavorite;
    },
  },
  // The props are converted as properties of the component instance, same level with the data properties and methods
  mounted() {
    // Display the proxy object of the component instance
    console.log(this);
  },
};
</script>