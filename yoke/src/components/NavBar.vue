<template>
  <div>
    <nav class="navbar navbar-light">

        <button type="button" class="btn btn-default btn-lg">
          <span class="iconfont icon-home"></span>
          Yoke 在线管理平台
        </button>
        <a href="yoke://login?access_token=aaa"> YOKE</a>
      <div>
        <div class="row mr-0" v-if="isLogin==1">
          <el-dropdown class="mr-3" style="cursor: pointer" trigger="click">
            <span class="el-dropdown-link">
              <i class="iconfont icon-guanliyuan text-primary">管理员</i>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div>管理员{{Admin_id}}</div>
              </el-dropdown-item>
                <el-dropdown-item>
                    <div>
                        <span class="iconfont icon-manage"></span>
                        <router-link to="/About">注册管理员</router-link>
                    </div>
                </el-dropdown-item>
              <el-dropdown-item>
                <div @click="logout">
                  <span class="iconfont icon-tuichu text-danger"></span>退出登录
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
export default {
  name: "NavBar",
  data() {
    return {
      login: true
    };
  },
    computed: {
        ...mapState({
            Admin_id: state => state.Person.user,
            isLogin: state => state.Person.isLogin
        })
    },
    methods:{
        logout () {
            this.$store.commit('Person/changeLogin')
            this.$router.push('/Login')
        }
    }
};
</script>

<style scoped></style>
