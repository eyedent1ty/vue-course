import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

const app = createApp(App);

app.use(router);

app.component('base-modal', BaseModal);

// By initial, the router starts with an empty page
// This removes the transition of the route when the page is first loaded
router.isReady()
  .then(() => {
    // Here the router already knows what route to render
    app.mount('#app');
  })

