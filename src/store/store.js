import Vue from 'vue';
import Vuex from 'vuex';
import {HTTP} from '../http_common';
import router from "../router";
// import router from '../../router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        token: JSON.parse(localStorage.getItem('token'))
    },
    mutations: {
        pushPost(formData) {
            return new Promise((resolve, reject) => {
                HTTP.post('/account/login', formData)
                    .then(response => {
                        alert(response.data.message)
                        // eslint-disable-next-line no-console
                        console.log(response.data.generatedToken.Token)
                        localStorage.setItem('token', JSON.stringify(response.data.generatedToken.Token));
                        // eslint-disable-next-line no-console
                        console.log(JSON.parse(localStorage.getItem('token')))
                        if (response.data.status == true) {
                            router.push('/get-posts')
                        } else {
                            router.push('/log-in')
                        }
                        // eslint-disable-next-line no-console
                        // console.log(response.data)
                        resolve()
                    })
                    .catch(error => reject(
                        // eslint-disable-next-line no-console
                        console.log(error)
                    ))
            })
        },
    },
    actions: {
        sendPost(context, formData) {
            context.commit({
                type: 'pushPost',
                formData
            })
        }
    }
})
export default store;
