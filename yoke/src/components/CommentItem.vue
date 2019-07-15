<template>
  <div id="box">
    <div class="container" v-if= " index != -1">
      <h1>Detail</h1>
      <h5>发布者：</h5>
      <p>{{ commentItem.course_comment_id }}</p>
      <h5>发布时间：</h5>
      <p>{{ commentItem.course_comment_time }}</p>
      <h5>发布位置:</h5>
      <h5>发布内容：</h5>
      <p>{{ commentItem.course_comment_Content }}</p>
      <button @click="ban">禁止</button>
      <button @click="shield">屏蔽</button>
    </div>
  </div>
</template>

<script>
import { reqHandleComment } from "../api";
import { mapState } from "vuex";
export default {
  name: "CommentItem",
  computed: {
    ...mapState({
      commentItem: state => state.Comment.comment,
      index: state => state.Comment.index
    })
  },
  methods: {
    ban() {
      reqHandleComment({
        commentId: this.state.commentItem.course_comment_id,
        req: 0
      }).then(res => {
        console.log(res);
        this.$store.commit("Comment/removeComment", this.state.index);
      });
    },
    shield() {
      reqHandleComment({
        commentId: this.state.commentItem.commentId,
        req: 1
      }).then(res => {
        console.log(res);
        this.$store.commit("Comment/removeComment", this.state.index);
      });
    }
  }
};
</script>

<style scoped></style>
