<template>
    <div class="col-md-4 ml-auto mr-auto mt-5 text-left">
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="form-group">
                <label for="pass">Password</label>
                <input type="password" class="form-control" id="pass" v-model="password">
            </div>
        </form>
        <button class="btn btn-primary" @click="login">Log in</button>
        <p class="my-5">
            <router-link to="/cytonn-money-market-fund">Invest here ..</router-link>
        </p>
    </div>
</template>

<script>
    import {HTTP} from '../../http_common';
    import router from '../../router';
    import store from "../../store/store";

    export default {
        name: "signin",
        store,
        data: function () {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login: function () {
                HTTP.post('/account/login', {
                    username: this.username,
                    password: this.password
                })
                    .then(function (response) {
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
                    })
                    .catch(function (error) {
                        // eslint-disable-next-line no-console
                        console.log(error);
                    });
            },
            logins: function () {
                const fd = new FormData()
                fd.append("username", this.username)
                fd.append("password", this.password)
                this.$store.dispatch('sendPost', fd)
                    .then((response) => {
                        // eslint-disable-next-line no-console
                        console.log(response)
                        // alert("Successfully logged in")
                        // router.push('/get-posts')
                    })
                    .catch((err) => {
                        // eslint-disable-next-line no-console
                        console.log(err)
                    });

            }
        }
    }
</script>

<style scoped>

</style>
