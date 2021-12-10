import '@babel/polyfill'
import './plugins/bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Hotjar from 'vue-hotjar'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// Hotjar
Vue.use(Hotjar, {
    id: '2714566', // Hotjar Site ID
    isProduction: true,
    snippetVersion: 6,
})

// VueGtag
Vue.use(VueGtag, {
    config: {
        id: 'UA-101119806-1',
        params: {
            send_page_view: false,
        },
    },
})

// import Analytics from 'analytics'
// import googleAnalytics from '@analytics/google-analytics'
// Analytics
// const analytics = Analytics({
//     app: 'App',
//     plugins: [
//         googleAnalytics({
//             trackingId: 'UA-101119806-1',
//         }),
//     ],
// })
// analytics.page()
