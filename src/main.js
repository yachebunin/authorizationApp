import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vuetify } from './plugins'
import VueApollo from 'vue-apollo'
import apolloClient from '@/services/gql/client.js'
Vue.config.productionTip = false

const apolloProvider = new VueApollo({ defaultClient: apolloClient })


new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
