import Vue from 'vue'
import router from 'vue-router'
import Teachers from './components/teachers'
import  Mypage from './components/myPage'

Vue.use(router);

let Router = new router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Mypage',
            component: Mypage
        },
        {
            path: '/teachers',
            name: 'Teachers',
            component: Teachers
        }
    ]
})

export default Router;
