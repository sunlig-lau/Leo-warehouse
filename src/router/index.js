import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Hangup from '@/components/view/AirConditioning/Hangup';
import Test from '@/components/view/AirConditioning/Test';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/AirConditioning/Hangup',
      children: [
        {
          path: '/AirConditioning/Hangup',
          name: 'Hangup',
          component: Hangup,
          meta: {requireAuth: true}
        },
        {
          path: '/AirConditioning/Test',
          name: 'Test',
          component: Test,
          meta: {requireAuth: true}
        }
      ]
    }
  ]
})
