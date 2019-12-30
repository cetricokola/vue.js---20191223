<template>
    <div class="container">
        <h2 class="my-5">Cytonn Money Market Fund</h2>
        <div class="row justify-content-between">
            <div class="col-md-5" :style="{fontSize :font + 'em'}">
                <content_cmmf
                        v-slot="tag"
                        v-on:expand="font += 0.1"
                        v-on:shrink="font -= 0.1"
                        v-bind:description="decription"
                ></content_cmmf>
                <h6 class="text-left my-5">Let us amplify your Investment for a modern world.</h6>
            </div>
            <div class="col-md-6 text-left">
                <form action="">
                    <div class="form-group">
                        <label for="appl">Select Application Type</label>
                        <select class="form-control" id="appl">
                            <option>Individual Application</option>
                            <option>Joint Application</option>
                            <option>Corporate Application</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="prod">Select Product To Invest</label>
                        <select class="form-control" id="prod">
                            <option>Cytonn Money Market Fund</option>
                            <option>Cytonn Balanced Fund</option>
                            <option>Cytonn Equity Fund</option>
                            <option>Cytonn High Yield Fund</option>
                            <option>Cytonn Money Market Fund (USD)</option>
                            <option>Cytonn HYS - KES</option>
                            <option>Cytonn HYS - USD</option>
                            <option>Cytonn HYS - GBP</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="amt">Ammount to Invest</label>
                        <input type="email" class="form-control" id="amt" placeholder="1,000,000">
                    </div>
                </form>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div @click="selectedComponent = 'CytonnFoundation'" class="p-2 m-2 btn btn-primary">Cytonn Foundation</div>
            <div @click="selectedComponent = 'CytonnReport'" class="p-2 m-2 btn btn-primary">Cytonn Report</div>
            <div @click="selectedComponent = 'CytonnYoungLeaders'" class="p-2 m-2 btn btn-primary">Cytonn Young Leaderss
                Programme
            </div>
        </div>
        <div class="mt-3">
            <component :is="selectedComponent"></component>
        </div>
        <div class="py-5">
            <ContactUs></ContactUs>
        </div>
    </div>
</template>
<script>
    export default {
        name: "cmmf",
        components: {
            content_cmmf: () => import('../components/content_cmmf'),
            CytonnFoundation: () => import('../components/cytonn_foundation'),
            CytonnReport: () => import('../components/cytonn_report'),
            CytonnYoungLeaders: () => import('../components/cytonnYLP'),
            ContactUs: () => import('../components/contactUs')
        },
        data: function () {
            return {
                font: 1,
                decription: "We look to deliver high level current income while at the same time safeguarding our investor’s capital and liquidity. To outperform the income yield available, we invest in interest-bearing securities and other short-term money market instruments.",
                selectedComponent: 'CytonnFoundation',
                counter: 0
            }
        },
        methods: {
            focus: function () {
                this.$refs.subscribe.addEventListener("click", function() {
                    this.counter = 1
                });
            }
        }
    }
</script>

<style scoped>

</style>
