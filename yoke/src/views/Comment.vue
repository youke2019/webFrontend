<template>
  <div>
    Comment Pages
    <div id="lhs">
      <ol>
        <li v-for="(comment, index) in comments" :key=index>
          <div class="btype" @click="detail(comment, index)">
            <div>举报者：{{comment.course_comment_id}}</div>
            <div>举报时间: {{comment.course_comment_time}}</div>
          </div>
        </li>
      </ol>
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
      comments: state => state.Comment.comments
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
  flex-direction: column;
  display: flex;
  width: 200px;
  border: 2px solid whitesmoke;
  justify-content: center;
  align-items: center;
}
</style>
