<template>
    <div id="box">
        <div class="container">
            <div>
                <h1>Detail</h1>
                <h5>发布者： </h5>
                <p>{ID}</p>
                <h5>发布时间：</h5>
                <p>{commentType}</p>
                <h5>发布位置: </h5>
                <p>{commentType}</p>
                <h5>发布内容：</h5>
                <p>{commentContent}3</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentItem",
        data() {
            return {
                Comment: {
                    ID: "",
                    commentType: "",
                    commentContent:"",
                    commentTime:""
                }
            };
        }
    }
</script>

<style scoped>

</style>