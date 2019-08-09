<template>
  <div>
    <nav class="navbar navbar-light">
      <router-link to="/Home">
        <button type="button" class="btn btn-default btn-lg">
          <span class="iconfont icon-home"></span>
          Yoke 在线管理平台
        </button>
      </router-link>
      <ul class="nav nav-fill nav-pills" id="lis">
        <li class="nav-item">
          <router-link class="nav-link" to="/Search">
            <button type="button" class="btn btn-default btn-lg">
              <span class="iconfont icon-sousuo"></span>
              Search
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Comment">
            <button type="button" class="btn btn-default btn-lg">
              <span class="iconfont icon-xuexiao_kemu"></span>
              Comment
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Video">
            <button type="button" class="btn btn-default btn-lg">
              <span class="iconfont icon-xuexiao_kemu"></span>
              Video
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="User">
            <button type="button" class="btn btn-default btn-lg">
              <span class="iconfont icon-manage"></span>
              Users
            </button>
          </router-link>
        </li>
      </ul>
      <div>
        <div class="row mr-0">
          <el-dropdown class="mr-3" style="cursor: pointer" trigger="click">
            <span class="el-dropdown-link">
              <i class="iconfont icon-guanliyuan text-primary">管理员</i>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div>管理员</div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div>
                  <span class="iconfont icon-project-copy"></span>
                  <router-link to="/About">职能与守则</router-link>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div>
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
export default {
  name: "NavBar",
  data() {
    return {
      login: true
    };
  }
};
</script>

<style scoped></style>
