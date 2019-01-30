import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import i18n from './config/i18n'

Vue.config.productionTip = false
Vue.use(iView)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
