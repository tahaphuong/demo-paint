import { createApp } from 'vue'
import App from './App.vue'

import VueKeyCloak from '@dsb-norge/vue-keycloak-js'

createApp(App)
.use(VueKeyCloak, {
  config: {
    realm: 'vue-paint-demo',
    url: 'http://localhost:8080/auth/',
    clientId: 'account'
  },
  onReady: kc => {
    console.log(kc)
    createApp(App).mount('#app')
  }
})
//....