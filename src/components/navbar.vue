<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand text-white font-weight-bold"><router-link to="/">View App</router-link></h1>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <button class="btn btn-outline-success  ml-auto" type="submit">
                    <router-link to="/teachers">View Teachers</router-link>
                </button>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {}
</script>
