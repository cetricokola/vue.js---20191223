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
                <input type="password" class="form-control" id="exampleInputPassword1">
                <small id="passHelp" class="form-text text-muted">Password should be 8 or more characters including
                    upper and locwer cases</small>
            </div>
            <button type="submit" class="btn btn-primary px-5">Signup</button>
        </form>
        <p class="my-5"><router-link to="/cytonn-money-market-fund">Invest here ..</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "signup"
    }
</script>

<style scoped>

</style>
