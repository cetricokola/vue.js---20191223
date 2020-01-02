<template>
    <div>
        <form @submit.prevent="updatePost">
            <div class="form-group">
                <label for="username">Title</label>
                <input type="text" class="form-control" id="username" value=post.Title v-model="title">
            </div>
            <div class="form-group">
                <label for="email">Location</label>
                <input type="text" class="form-control" id="email" value=post.Location v-model="location">
            </div>
            <div class="form-group">
            <textarea class="txt p-3"
                      id="textarea"
                      v-model="message"
                      placeholder="Post body..."
                      rows="6"
                      max-rows="6"
                      value=post.Message
            />
            </div>
            <button type="submit" class="btn btn-primary">Post</button>
        </form>
        <p>Postings: {{post}}</p>
        <p>Id: {{id}}</p>
    </div>
</template>

<script>
    import {HTTP} from "../../http_common";

    export default {
        name: "EditPost",
        data: function () {
            return {
                post: [],
                error: '',
                id: ''
            }
        },
        created() {
            this.id = this.$route.params.id
            // eslint-disable-next-line no-console
            console.log(this.id)
            HTTP.get(`/fetch_post/`,
                {
                    params: {
                        post_Id: this.$route.params.id
                    }
                })
                .then(response => {
                    alert(response.data.Posts)
                    // eslint-disable-next-line no-console
                    console.log(response.data.Posts)
                    this.post = response.data.Posts
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }

    }
</script>

<style scoped>

</style>
