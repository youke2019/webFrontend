<template>
  <div>
    <div id="lhs">
        <div v-for="(comment, index) in comments" :key=index>
          <div class="btype" @click="detail(comment, index)">
             举报时间: {{comment.course_comment_time}}
          </div>
        </div>
    </div>
    <div id="rhs">
      <CommentItem/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommentItem from "../components/CommentItem";
export default {
  name: "Comment",
  components: { CommentItem },
  data() {
    return {
      commentItem: null,
      index: -1
    };
  },
  created() {
    this.$store.dispatch("Comment/getComments").then;
  },
  computed: {
    ...mapState({
      comments: state => state.Comment.ReportedComments
    })
  },
  methods: {
    detail(comment, index) {
      this.$store.commit("Comment/comment",comment,index )
    }
  }
};
</script>

<style scoped>
body {
  background: whitesmoke;
    overflow:auto;
}
#lhs {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  float: left;
  width: 400px;
  background-color: whitesmoke;
    overflow:auto;

}
#rhs {
  width: auto;
  margin-left: 400px;
}

.btype {
  flex-direction: column;
  display: flex;
  border: 2px solid whitesmoke;
  justify-content: center;
  align-items: center;
}
</style>
