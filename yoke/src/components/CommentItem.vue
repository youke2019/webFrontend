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
        props:{commentItem: Object},
        methods:{
            ban(){
                reqHandleComment(this.state.commentItem.commentType , this.state.commentItem.commentId , 0 );
            },
            shield(){
                reqHandleComment(this.state.commentItem.commentType , this.state.commentItem.commentId , 1 );
            }
        }
    }
</script>

<style scoped>

</style>