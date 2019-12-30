<template>
    <div class="col-md-4 ml-auto mr-auto mt-5" >
        <form class="text-left">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="form-group">
                <label for="pass">Password</label>
                <input type="password" class="form-control" id="pass" v-model="password">
            </div>
            <buton class="btn btn-primary">Log in </buton>
        <p class="my-5"><router-link to="/cytonn-money-market-fund">Invest here ..</router-link></p>
        </form>
    </div>
</template>

<script>
    export default {
        name: "signin"
    }
</script>

<style scoped>

</style>
