// If a function does not use any data property and will not be used for outting content to the template, you can declare it outside the Vue component. object
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  computed: {
    monsterBarStyles() {
      return {
        width: `${this.monsterHealth}%`
      };
    },
    playerBarStyles() {
      return {
        width: `${this.playerHealth}%`
      };
    }
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(5, 15);
      this.playerHealth -= attackValue;
    }
  }
});

app.mount('#game');