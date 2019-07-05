<template>
  <div>
    User Pages
    <div class="container">
      <el-table
        :data="users"
        style="width: 100%;"
      >
        <el-table-column prop="account" label="账户" width="320">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="320">
        </el-table-column>
        <el-table-column align="right" prop="allowed" label="用户状态">
          <template slot-scope="scope">
            <div class="user_state">
              <el-switch
                style="display: block"
                v-model="scope.row.allowed"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="通行"
                inactive-text="禁用"
                @change="changeAllow(scope.row.allowed)"
              >
              </el-switch>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      users: [
        {
          account: 123,
          name: "fuck1",
          allowed: 0
        },
        {
          account: 11,
          name: "fuck2",
          allowed: 1
        }
      ]
    };
  },
  methods: {
    changeAllow(data) {
      console.log(data);
    }
  }
};
</script>
<style scoped>
.user_state {
  height: 28px;
}
</style>
