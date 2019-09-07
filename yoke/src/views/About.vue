<template>
    <div  id="t"  class="text-center">
        <div   class="form-signin" >
            <h1 class="h3 mb-6 font-weight-bold">添加管理员</h1>
            <label for="inputAccount" class="sr-only">Account</label>
            <input type="text" id="inputAccount" class="form-control" placeholder="Account" v-model="SignUp.account" required autofocus>
            <label for="inputPassword"  class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" v-model="SignUp.password" placeholder="Password" required autofocus>
            <label for="inputConfirmPassword" class="sr-only">confirm_password</label>
            <input type="password" id="inputConfirmPassword" class="form-control" v-model="SignUp.confirm_password" placeholder="Confirm Password" required autofocus>
            <button class="btn btn-group-lg btn-primary btn-block" type="submit" @click="url2" >添加</button>
            <router-link class="btn btn-group-lg btn-primary btn-block bg-secondary" type="button" to="Home">返回管理页</router-link>
        </div>
    </div>
</template>

<script>
    import {reqLogup} from "../api";

    export default {
        name: "Log",
        data() {
            return {
                SignUp: {
                    account: '',
                    password: '',
                    confirm_password: '',
                    email: '',
                }
            }
        },
        methods: {
            url2() {
                if (this.SignUp.password !== this.SignUp.confirm_password) {
                    this.$message({
                        message: '两次密码不相同',
                        type: 'warning',
                        duration: 1000,
                        showClose: true
                    })
                    return;
                }
                reqLogup({
                        "account": this.SignUp.account,
                        "password": this.SignUp.password,
                    }
                ).then((res) => {
                    let num = res.success;
                    let msg = res.error_msg;
                    if (num == false) {
                        this.$message({
                            message: msg,
                            type: 'warning',
                            duration: 1000,
                            showClose: true
                        })
                        return false;
                    } else {
                        this.$message({
                            message: '注册成功',
                            type: 'success',
                            duration: 1000,
                            showClose: true
                        })
                    }
                })
            },
        }
    }


</script>

<style scoped>
    html,
    template {
        height: 100%;
    }

    template {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }

    .form-signin {
        width: 100%;
        max-width: 450px;
        padding: 15px;
        margin: auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
        margin-bottom: 10px;
    }
</style>