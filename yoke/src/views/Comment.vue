<template>
  <div>
    Comment Pages
    <div id="lhs">
      <div class="btype">To be processed</div>
      <div class="btype">To be processed</div>
      <div class="btype">To be processed</div>
    </div>
    <div id="rhs">
      <div id="box">
        <div class="container">
          <h1>Detail</h1>
          <h5>发布： user1</h5>
          <h5>位置：</h5>
          <h5>内容:</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment"
};
</script>

<style scoped>
body {
  background: whitesmoke;
}
#lhs {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 220px;
  float: left;
  width: 300px;
  background-color: whitesmoke;
}
#rhs {
  width: auto;
  margin-top: 100px;
  margin-left: 300px;
}

.btype {
  display: flex;
  height: 30px;
  width: 200px;
  background-color: burlywood;
  border: 2px solid whitesmoke;
  justify-content: center;
}
</style>
