<template>
  <div>
    User Pages
    <div class="container">
      <el-table :data="users" style="width: 100%;">
        <el-table-column prop="ID" label="账户" width="320"></el-table-column>
        <el-table-column prop="name" label="用户名" width="320">
        </el-table-column>
        <el-table-column align="right" prop="allowed" label="用户状态">
          <template slot-scope="scope">
            <div class="user_state">
              <el-switch
                style="display: block"
                v-model="scope.row.banned"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="通行"
                inactive-text="禁用"
                @change="changeAllow(scope.row.ID, scope.row.banned)"
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
import { mapState } from "vuex";
import { reqChangeUser } from "../api";

export default {
  name: "User",
  data() {
    return {};
  },
  create() {
    this.$store.dispatch("Person/gerUsers").then();
  },
  methods: {
    changeAllow(ID, banned) {
      reqChangeUser({
        ID: ID
      }).then(data => {
        if (data !== banned) {
          this.$store.dispatch("Person/getUsers").then(() => {
            this.$message.success("用户权限更改成功");
          });
        } else {
          this.$message.error("用户权限更改失败");
        }
      });
    }
  },
  computed: {
    ...mapState({
      users: state => state.Person.users
    })
  }
};
</script>
<style scoped>
.user_state {
  height: 28px;
}
</style>
