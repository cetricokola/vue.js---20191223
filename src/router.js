import Vue from 'vue'
import router from 'vue-router'

Vue.use(router);

let Router = new router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Signup',
            component: () => import ('./components/signup')
        },
        {
            path: '/cytonn-money-market-fund',
            name: 'Cmmf',
            component: () => import ('./components/cmmf')
        },
        {
            path: '/log-in',
            name: 'Sigin',
            component: () => import ('./components/signin')
        }
    ]
})
export default Router;
