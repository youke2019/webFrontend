<template>
  <div id="t" class="text-center">
    <div class="form-signin">
      <h1 class="h3 mb-6 font-weight-bold">please sign in</h1>
      <label for="inputEmail" class="sr-only">Account</label>
      <input
        type="text"
        id="inputEmail"
        class="form-control"
        placeholder="Account"
        v-model="SignIn.account"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model="SignIn.password"
        required
        autofocus
      />
      <hr />
      <router-link class="nav-link" to="/Home">fake Log in</router-link>
      <button
        class="btn btn-group-lg btn-primary btn-block bg-primary"
        type="submit"
        @click="login"
      >
        Log in
      </button>
    </div>
  </div>
</template>

<script>
    import {reqLogin} from "../api";

    export default {
  name: "Login",
  data() {
    return {
      SignIn: {
        account: "",
        password: ""
      }
    };
  },
    methods:{
        login(){
            reqLogin( {
                "account": this.SignIn.account, "password": this.SignIn.password
            })
                .then((res) => {
                    let num = res.id;
                    switch (num) {
                        case -1://forbid
                            this.$message({
                                message: '错误的用户名或密码',
                                type: 'warning',
                                duration: 1000,
                                showClose: true
                            })
                            return false;
                        default: //allowed
                            this.$store.commit('Person/changeLogin', num);
                            this.$store.commit('Person/signIn',res);
                            this.$message({
                                message: '登陆成功',
                                type: 'success',
                                duration: 1000,
                                showClose: true
                            })
                            this.$router.push('/Home');

                    }
                })
        },
    }
};
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
  justify-content: center;
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
.form-signin {
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
#t {
  position: relative;
  top: 100px;
}
</style>
