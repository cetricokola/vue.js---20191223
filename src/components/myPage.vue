<template>
    <div>
        <div class="col-md-6 ml-auto mr-auto my-5">
            <h1 class="my-3">Please enter the student name</h1>
            <div v-if="checkIfNameIsNotEmpty() > 0">
                <p>Number of letters in the name: {{num}}</p>
            </div>
            <form>
                <div class="form-group">
                    <label>Student Name</label>
                    <input type="email" class="form-control form-control-lg" aria-describedby="emailHelp"
                           placeholder="Enter name" v-model="student_name">
                </div>
                <button v-bind:disabled="isEmpty()" v-on:click="msg()" @click.prevent="addData" type="submit"
                        class="btn btn-primary col-md-4">
                    Submit
                </button>
            </form>
        </div>
        <div class="col-md-6 ml-auto mr-auto">
            <h2>Names of the Students</h2>
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student Name</th>
                </tr>
                </thead>
                <tbody>
                <div v-for="student_name in student" :key="student_name" v-bind:item="student">
                    <tr>
                        <th scope="row">{{counter + 1}}</th>
                        <td>
                            <p>{{student_name}}</p>
                        </td>
                    </tr>
                </div>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                student: [],
                student_name: '',
                num: '',
                counter: 0,
                state: true
            }
        },
        methods: {
            addData() {
                this.student.push(
                    this.student_name
                )
            },
            msg() {
                alert("Student name =>" + " " + "  " + this.student_name + " " + "" + "submitted successfully")
            },
            checkIfNameIsNotEmpty() {
                this.num = this.student_name.length
                return this.num
            },
            isEmpty() {
                if (this.student_name.length > 0){

                    this.state = false
                }else {
                    this.state = true
                }
            }
        }
    }
</script>
