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
      this.message = this.currentUserInput;
    },
  },
});


// How proxy works and how to create reactive system
// app.mount('#app');

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


