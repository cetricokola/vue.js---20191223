<template>
    <div class="text-left">
        <p>{{description}}</p>
        <button class="btn btn-success mr-5" v-on:click="$emit('expand')">+</button>
        <button class="btn btn-success" v-on:click="$emit('shrink')"> -
        </button>
        <slot name="tag"></slot>
    </div>
</template>

<script>
    export default {
        name: "content_cmmf",
        props: {
            description: String
        }
    }
</script>

<style scoped>

</style>
