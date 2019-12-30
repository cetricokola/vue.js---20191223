<template>
    <div class="text-left">
        <h2 class="my-5">Subscribe to our mailing list...</h2>
        <form class="">
            <div class="form-group">
                <input type="email" class="form-control col-md-6" id="amt" placeholder="Your Email Address"
                       ref="subscribe">
            </div>
            <button type="submit" class="btn btn-success" v-if="counter" v-on:click="this.$parent.focus"> 0">Subscribe</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "contactUs",
        data: function () {
            return {
                counter: 0
            }
        },
        created() {
            this.counter = this.$parent.counter
        }
    }
</script>

<style scoped>

</style>
