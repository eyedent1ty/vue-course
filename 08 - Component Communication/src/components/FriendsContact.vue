<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
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
    id: {
      type: String,
      required: true
    },
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
      isShowDetailsActive: false,
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
      this.$emit('toggle-favorite', this.id);
    },
  },
  // The props are converted as properties of the component instance, same level with the data properties and methods
  mounted() {
    // Display the proxy object of the component instance
    console.log(this);
  },
};
</script>