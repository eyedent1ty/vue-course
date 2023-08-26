import { createRouter, createWebHistory } from 'vue-router';

import Coacheslist from './pages/CoachesList.vue';
import CoachDetail from './pages/CoachDetail.vue';
import CoachRegistration from './pages/CoachRegistration.vue';
import ContactCoach from './pages/ContactCoach.vue';
import RequestsReceived from './pages/RequestsReceived.vue';
import UserAuth from './pages/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index';

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
      component: CoachDetail,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
          props: true
        }
      ],
      props: true
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: {
        requiresAuthenticated: true
      }
    },

    {
      path: '/requests',
      component: RequestsReceived,
      meta: {
        requiresAuthenticated: true
      }
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: {
        requiresUnauthenticated: true
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuthenticated && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauthenticated && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
