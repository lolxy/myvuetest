import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstPage from '@/pages/FirstPage'

Vue.use(Router)

/**
 * The routes
 *
 * @type {object} The routes
 */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/firstpage',
      name: 'FirstPage',
      component: FirstPage
    }
  ]
})
