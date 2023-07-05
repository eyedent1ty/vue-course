const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() { 
      // Referencing the HTML DOM representation of an element
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteFood }}</p>
  `,
  data() {
    return {
      favoriteFood: 'Pizza'
    };
  }
});

app2.mount('#app2');

// This component shows the reactivity system of Vue when using a data property to the template
const app3 = Vue.createApp({
  data() {
    return {
      message: ''
    };
  },
  methods: {
    onInputMessage(event) {
      this.message = event.target.value;
    }
  }
}).mount('#app3');


// How proxy works and how to create reactive system

// const player = {
//   name: 'John Daniel',
//   ign: 'eyedent1ty'
// };

// const handler = {
//   set(target, key, value) {
//     if (key === 'ign') {
//       console.log(`original object (target): ${target[key]}`);
//       console.log(`proxy object (proxy): ${value}`);
//     }
//   }
// };

// const proxy = new Proxy(player, handler);

// player.ign = 'Mirai';

// console.log(proxy);

// console.log(player === proxy);


