<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary text-white">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand font-weight-bold">
                <router-link to="/" class="text-white">{{this.$parent.brand}}</router-link>
            </h1>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/log-in" class="text-white nav-link">Login</router-link>
                    </li>
                </ul>
                    <button class="btn " type="submit">
                        <router-link to="/" class="text-white">Create Account</router-link>
                    </button>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {

    }
</script>

<style scoped>
    button {
        border: 1px solid white;
    }
</style>
