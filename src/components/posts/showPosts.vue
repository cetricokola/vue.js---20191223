<template>
    <div class="container py-3">
        <div class="col-md-6 ml-auto mr-auto">
            <div v-if="posts.length <1">
                You have no posts
                <p class="my-5">
                    <router-link to="/post">Create a post ..</router-link>
                </p>
            </div>
            <div v-else>
                <div v-for="post in posts" :key="post" v-bind:item="post" class="text-left">
                    <h2><em class="text-success">Author: </em> {{post.Title}}</h2>
                    <h4><em class="text-danger">Location: </em>{{post.Location}}</h4>
                    <p>"{{post.Message}}"</p>
                    <p class="text-danger del" @click="del(post.PostId)">Delete Post</p>
                    <p class="text-success del" @click="edit(post.PostId), reloadPage">Update Post</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {HTTP} from "../../http_common";
    import router from "../../router";

    export default {
        name: "showPosts",
        data: function () {
            return {
                posts: [],
                errors: [],
                post: '',
                count: 0
            }
        },
        methods: {
            reloadPage(){
                window.location.reload()
            },
            del: function (id) {
                // eslint-disable-next-line no-console
                console.log(id)
                HTTP.delete(`/delete_post/`,
                    {
                        params: {
                            post_Id: id
                        }
                    }
                )
                    .then(response => {
                        // eslint-disable-next-line no-console
                        console.log(response)
                        alert("Post deleted")
                        router.push('/get-posts')
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            edit: function (id) {
                router.push({name: 'EditPost', params: {id: id}})
            }
        },
        created() {
            HTTP.get(`/get-posts`)
                .then(response => {
                    // eslint-disable-next-line no-console
                    console.log(response.data.Posts)
                    this.posts = response.data.Posts
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }

</script>

<style scoped>
    .del {
        cursor: pointer;
    }
</style>
