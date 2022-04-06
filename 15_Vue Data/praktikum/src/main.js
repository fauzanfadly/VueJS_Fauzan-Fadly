import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.prototype.moment = moment

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#f5f5f5"
      }
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
