<template>
  <div>
    Comment Pages
    <div id="lhs">
        <ui>
            <li  v-for="(comment,index) in comments" :key="index" >
                <div class="btype" @click="detial(comment,index)">
                    <p>举报者：{comment.ID}</p>
                    <p>举报时间: {comment.comment_time}</p>
                </div>
            </li>
        </ui>
    </div>
    <div id="rhs">
        <CommentItem v-if="commentItem != null" :comment="commentItem" :index="index"/>
    </div>
  </div>
</template>

<script>
    import {mapState} from  "vuex"
import CommentItem from "../components/CommentItem";
export default {
    name: "Comment",
    components: {CommentItem},
    data(){
      return{
          commentItem: null,
          index : 0
      }
    },
    computed:{
        ...mapState({
            comments: state => state.Comment.comments,
        }),
    },
    methods:{
        detail(comment,index){
            this.state.commentItem = comment
            this.state.index = index
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
  display: flex;
  width: 200px;
  background-color: #FFFFCC ;
  border: 2px solid whitesmoke;
  justify-content: center;
    align-items: center;
}
</style>
