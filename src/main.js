import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Hotjar from 'vue-hotjar'

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// Hotjar
Vue.use(Hotjar, {
    id: '2740085', // Hotjar Site ID
    sProduction: true,
    snippetVersion: 6,
})

// Analytics
const analytics = Analytics({
    app: 'App',
    plugins: [
        googleAnalytics({
            trackingId: 'UA-101119806-1',
        }),
    ],
})
analytics.page()
