<template>
  <div>
    User Pages
    <div>
      <ul>
        <li
          v-for="(user, index) in users"
          :key="index"
          style="display: flex; justify-content: space-around;align-items: center;margin-top: 15px; border-bottom: 1px solid gray;"
        >
          <p>{{ user.account }}</p>
          <p v-if="user.allowed">已允许</p>
          <p v-else>已禁用</p>
          <el-switch
            v-model="user.allowed"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </li>
      </ul>
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
          allowed: 0
        },
        {
          account: 11,
          allowed: 1
        }
      ]
    };
  }
};
</script>

<style scoped></style>
