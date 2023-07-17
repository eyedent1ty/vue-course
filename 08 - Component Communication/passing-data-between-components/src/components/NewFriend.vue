<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="first-name">First name: </label>
      <input id="first-name" type="text" v-model="firstName" />
    </div>

    <div>
      <label for="last-name">Last name: </label>
      <input id="last-name" type="text" v-model="lastName" />
    </div>

    <div>
      <label for="phone-number">Phone number: </label>
      <input id="phone-number" type="text" v-model="phone" />
    </div>

    <div>
      <label for="email-address">Email address: </label>
      <input id="email-address" type="email" v-model="email" />
    </div>

    <div>
      <label for="is-favorite">is Favorite? </label>
      <input id="is-favorite" type="checkbox" v-model="isFavorite" />
    </div>

    <button type="submit">Add friend</button>
  </form>
</template>

<script>
export default {
  emits: {
    'add-friend': (newFriendContact) => {
      if (newFriendContact) {
        return true;
      }
      console.warn('Friend argument for add-friend emitted event missing');
      return false;
    }
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      isFavorite: false
    };
  },
  methods: {
    submitData() {
      const newFriendContact = {
        id: this.firstName,
        name: `${this.firstName} ${this.lastName}`,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite
      };

      this.$emit('add-friend', newFriendContact);
    }
  }
};
</script>