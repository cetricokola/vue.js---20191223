<template>
    <div class="mr-auto ml-auto col-md-6 py-3 text-left">
        <form @submit.prevent="createPost">
            <div class="form-group">
                <label for="username">Title</label>
                <input type="text" class="form-control" id="username" v-model="title">
            </div>
            <div class="form-group">
                <label for="email">Location</label>
                <input type="text" class="form-control" id="email" v-model="location">
            </div>
            <div class="form-group">
            <textarea class="txt p-3"
                      id="textarea"
                      v-model="message"
                      placeholder="Post body..."
                      rows="6"
                      max-rows="6"
            />
            </div>
            <button type="submit" class="btn btn-primary">Post</button>
        </form>
    </div>
</template>

<script>
    import store from "../../store/store";
    import {HTTP} from "../../http_common";
    import router from "../../router";

    export default {
        name: "posts",
        store,
        components: {},
        data: function () {
            return {
                title: '',
                location: '',
                message: ''
            };
        },
        methods: {
            createPost: function () {
                HTTP.post('/post', {
                    title: this.title,
                    location: this.location,
                    message: this.message,
                })
                    .then(function (response) {
                        alert(response.data.message)
                        router.push('/get-posts')
                    })
                    .catch(function (error) {
                        // eslint-disable-next-line no-console
                        console.log(error);
                    });
            },

        }
    }
</script>

<style scoped>
    .txt {
        border: none;
        background: #f1f0ef;
        width: 100%;
        border-radius: 15px;
    }
</style>
