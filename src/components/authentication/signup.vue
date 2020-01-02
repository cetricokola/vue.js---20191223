<template>
    <div class="col-md-5 ml-auto mr-auto text-left mt-5">
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                <small id="passHelp" class="form-text text-muted">Password should be 8 or more characters including
                    upper and locwer cases</small>
            </div>
        </form>
        <button class="btn btn-primary px-5" @click="reg">Signup</button>
        <p class="my-5">
            <router-link to="/cytonn-money-market-fund">Invest here ..</router-link>
        </p>
    </div>
</template>

<script>
    import {HTTP} from '../../http_common';
    import router from '../../router';


    export default {
        name: "signup",
        data: function () {
            return {
                username: '',
                email: '',
                password: '',
                errors: []
            }
        },
        methods: {
            reg: function () {
                HTTP.post('/account/signup', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                })
                    .then(function (response) {
                        alert(response.data.message)
                        if (response.data.status  == true){
                            router.push('/log-in')
                        }
                        router.push('/')
                    })
                    .catch(function (error) {
                        // eslint-disable-next-line no-console
                        console.log(error);
                    });
            }
        }

    }
</script>

<style scoped>

</style>
