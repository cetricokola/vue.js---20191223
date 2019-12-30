<template>
    
</template>

<script>
    export default {
        name: "Events",
    mounted: function () {
        this.attachDatepicker('startDateInput')
        this.attachDatepicker('endDateInput')
    },
    methods: {
        attachDatepicker: function (refName) {
            // eslint-disable-next-line no-undef
            var picker = new Pikaday({
                field: this.$refs[refName],
                format: 'YYYY-MM-DD'
            })

            this.$once('hook:beforeDestroy', function () {
                picker.destroy()
            })
        }
    }
    }
</script>

<style scoped>

</style>
