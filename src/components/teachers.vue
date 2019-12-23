<template>
    <div class="col-md-6 ml-auto mr-auto py-5">
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Teacher's Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Stream</th>
                </tr>
                </thead>
                <tbody v-for="data in teachers" :key="data" v-bind:item="data">
                <tr>
                    <th scope="row">{{data.code}}</th>
                    <td>{{data.name}}</td>
                    <td>{{data.subject}}</td>
                    <td>{{data.stream}}</td>
                </tr>
                </tbody>
            </table>
        </div>
</template>
<script>
    export default {
        data() {
            return {
                teachers: [
                    {
                        code: 1,
                        name: "Benson",
                        subject: "Mathematics",
                        stream: "North"
                    },
                    {
                        code: 2,
                        name: "Cetric",
                        subject: "Biology",
                        stream: "East"
                    },
                    {
                        code: 3,
                        name: "Mike",
                        subject: "CRE",
                        stream: "West"
                    },
                    {
                        code: 4,
                        name: "Matildah",
                        subject: "Physics",
                        stream: "South"
                    }
                ]
            }
        }
    }
</script>
