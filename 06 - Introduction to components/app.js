const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
          detailsAreVisible: false
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
          detailsAreVisible: false
        }
      ]
    };
  },
  methods: {
    toggleDetails(id) {
      const friend = this.friends.find((currentFriend) => {
        return currentFriend.id === id;
      });

      friend.detailsAreVisible = !friend.detailsAreVisible;
    }
  } 
});

app.mount('#app');