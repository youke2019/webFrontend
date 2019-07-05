<template>
  <div>
    <div class="row container" style="display: flex; width: 100%; justify-content: center;align-items: center;">
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." />
          <span class="input-group-btn">
            <el-button plain>搜索用户</el-button>
          </span>
        </div>
        <!-- /input-group -->
      </div>
      <!-- /.col-lg-6 -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped></style>
