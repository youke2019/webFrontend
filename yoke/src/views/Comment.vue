<template>
  <div>
    Comment Pages
    <div id="lhs">
    <ui>
        <li v-for=""
    </ui>
    </div>
    <div id="rhs">
        <CommentItem>

        </CommentItem>
    </div>
  </div>
</template>

<script>
import CommentItem from "../components/CommentItem";
export default {
  name: "Comment",
    components: {CommentItem},
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
  background-color: #FFFFCC ;
  border: 2px solid whitesmoke;
  justify-content: center;
}
</style>
