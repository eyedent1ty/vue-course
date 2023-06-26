const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '', 
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.clearEnteredGoalValue();
    },
    clearEnteredGoalValue() {
      this.enteredGoalValue = '';
    },
    // Removing an item to the list of goals
    // The main point is that, whenever you want to manipulate state or the content of the page, always look for the model of the Vue app and not in the template
    // The template will only serve as the template and the state and model are being handle by Vue app
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
