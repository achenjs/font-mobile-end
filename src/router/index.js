import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home/index';
import Search from '@/containers/Search/index';
import Region from '@/containers/Region/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/Search',
      component: Search,
    },
    {
      name: 'Region',
      path: '/Region',
      component: Region,
    },
  ],
});
