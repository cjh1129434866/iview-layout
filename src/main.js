import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import router from './router'
import devArticle from './components/dev-article.vue'

Vue.config.productionTip = false

Vue.component('dev-article', devArticle)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
