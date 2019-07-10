<template>
    <div id="box">
        <div class="container">
            <div>
                <h1>Detail</h1>
                <h5>发布者： </h5>
                <p>{{commentItem.ID}}</p>
                <h5>发布时间：</h5>
                <p>{{commentItem.commentTime}}</p>
                <h5>发布位置: </h5>
                <p>{{commentItem.commentType}} {{commentItem.TId}}</p>
                <h5>发布内容：</h5>
                <p>{{commentItem.commentContent}}</p>
            </div>
            <button @click="ban">禁止</button>
            <button @click="shield">屏蔽</button>
        </div>
    </div>
</template>

<script>
    import {reqHandleComment} from "../api";

    export default {
        name: "CommentItem",
        props:{
            commentItem: Object,
            index : Number
        },
        methods:{
            ban(){
                reqHandleComment({
                    "commentType":this.state.commentItem.commentType ,"commentId": this.state.commentItem.commentId ,"req": 0
                } ).then((res)=>{
                     console.log(res)
                     this.$store.commit('Comment/removeComment', this.state.index)
                    })
            },
            shield(){
                reqHandleComment({
                   "commentType": this.state.commentItem.commentType ,"commentId": this.state.commentItem.commentId , "req":1
                }).then((res)=>{
                    console.log(res)
                    this.$store.commit('Comment/removeComment', this.state.index)
                })
            }
        }
    }
</script>

<style scoped>

</style>