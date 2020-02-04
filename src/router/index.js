import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../application/Home/index.vue';
import Recommend from '../application/Recommend/index.vue';
import Rank from '../application/Rank/index.vue';
import Singers from '../application/Singers/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/recommend',
    children: [
      {
        path: '/recommend',
        name: 'Recommend',
        component: Recommend,
      },
      {
        path: '/rank',
        name: 'Rank',
        component: Rank,
      },
      {
        path: '/singers',
        name: 'Singers',
        component: Singers,
      },
    ],
  },

];

const router = new VueRouter({
  linkActiveClass: 'selected',
  routes,
});

export default router;
