import Vue from 'vue'
import router from 'vue-router'
Vue.use(router);

let Router = new router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Signup',
            component: () => import ('./components/authentication/signup')
        },
        {
            path: '/cytonn-money-market-fund',
            name: 'Cmmf',
            component: () => import ('./components/cmmf')
        },
        {
            path: '/log-in',
            name: 'Sigin',
            component: () => import ('./components/authentication/signin')
        },
        {
            path: '/post',
            name: 'Post',
            component: () => import ('./components/posts/posts')
        },
        {
            path: '/get-posts',
            name: 'ShowPost',
            component: () => import ('./components/posts/showPosts')
        },
        {
            path: '/edit_post/:id',
            name: 'EditPost',
            component: () => import ('./components/posts/EditPost'),
            props: true
        }
    ]
})
export default Router;
