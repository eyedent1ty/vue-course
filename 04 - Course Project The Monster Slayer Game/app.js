// If a function does not use any data property and will not be used for outting content to the template, you can declare it outside the Vue component. object
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
        this.playerHealth = 0;
        this.monsterHealth = 0;
      } else if (value <= 0) {
        this.winner = 'monster';
        this.playerHealth = 0;
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
        this.playerHealth = 0;
        this.monsterHealth = 0;
      } else if (value <= 0) {
        this.winner = 'player';
        this.monsterHealth = 0;
      }
    }
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
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(5, 15);
      this.playerHealth -= attackValue;
    }, 
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healthValue = getRandomValue(8, 20);
      if (this.playerHealth + healthValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healthValue;
      }
      this.attackPlayer();
    }
  }
});

app.mount('#game');