import Vue from 'vue'
import Router from 'vue-router'
import i18n from './config/i18n'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: i18n.t('page.home.title')
      },
      component: Home
    }
  ]
})
