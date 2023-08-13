import { createRouter, createWebHistory } from 'vue-router';

import Coacheslist from './pages/CoachesList.vue';
import CoachDetails from './pages/CoachDetails.vue';
import CoachRegistration from './pages/CoachRegistration.vue';
import ContactCoach from './pages/ContactCoach.vue';
import RequestsReceived from './pages/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: Coacheslist
    },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [
        {
          path: 'contact',
          component: ContactCoach
        }
      ]
    },
    {
      path: '/register',
      component: CoachRegistration
    },

    {
      path: '/requests',
      component: RequestsReceived
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

export default router;
