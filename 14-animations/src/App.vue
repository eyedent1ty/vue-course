<template>
  <!-- <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="isParagraphVisible">This is a test paragraph!</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <transition name="button-fade" mode="out-in">
      <button @click="showUsers" v-if="!areUsersVisible">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div> -->
  <router-view v-slot="slotProps">
    <transition name="page-fade">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import UsersList from './components/UsersList.vue';

export default {
  // components: {
  //   UsersList
  // },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      isParagraphVisible: false,
      isBlockVisible: true,
      areUsersVisible: false,
      enterInterval: null,
      leaveInterval: null,
      paragraphOpacity: 0
    };
  },
  methods: {
    enterCancelled(el) {
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      el.style.opacity = this.paragraphOpacity;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        this.paragraphOpacity = round * 0.01
        el.style.opacity = this.paragraphOpacity;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter()');
      console.log(el);
    },
    beforeLeave(el) {
      el.style.opacity = this.paragraphOpacity;
    },
    leave(el, done) {
      let round = this.paragraphOpacity * 100;

      this.leaveInterval = setInterval(() => {
        this.paragraphOpacity = round * 0.01;
        el.style.opacity = this.paragraphOpacity;
        round--;
        if (round < 0) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave()');
      console.log(el);
    },
    showUsers() {
      this.areUsersVisible = true;
    },
    hideUsers() {
      this.areUsersVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.animate {
  animation: slide-fade 2s ease-in infinite alternate;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.button-fade-enter-active {
  animation: button-fade 0.3s ease-out;
}

.button-fade-leave-active {
  animation: button-fade 0.3s ease-in reverse;
}

.page-fade-enter-from {
  opacity: 0;
}

.page-fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.page-fade-enter-to {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-150px, 0);
  }

  100% {
    transform: translate(150px, 0);
  }
}

@keyframes button-fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
