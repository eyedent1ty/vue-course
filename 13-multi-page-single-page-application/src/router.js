import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      meta: {
        needsAuth: true
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('/users RouteRecordRaw.beforeEnter executed');
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0
    };
  }
});

// The logic will be executed when the route changes
router.beforeEach((to, from, next) => {
  console.log('Router.prototype.beforeEach executed');

  if (to.meta.needsAuth) {
    console.log('Needs auth!');
  }

  next();
});

router.afterEach(() => {
  console.log('Router.prototype.afterEach executed');
});

export default router;