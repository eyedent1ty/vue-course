<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <transition name="paragraph">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      isParagraphVisible: false,
      isBlockVisible: true,
      areUsersVisible: false
    };
  },
  methods: {
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
  /* transition: transform 0.3s ease-out; */
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
.animate {
  animation: slide-fade 2s ease-in infinite alternate;
}

.paragraph-enter-active {
  animation: slide-scale 0.3s ease-in;
}

.paragraph-leave-active {
  animation: slide-scale 0.3s ease-out;
}

.button-fade-enter-active {
  animation: button-fade 0.3s ease-out;
}

.button-fade-leave-active {
  animation: button-fade 0.3s ease-in reverse;
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
    opacity: 1
  }
}
</style>
