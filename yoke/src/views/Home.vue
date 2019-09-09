<template>
    <el-container style="height:680px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>课程问题</template>
                    <el-submenu index="1-1">
                        <template slot="title">未处理</template>
                        <el-menu-item  v-for="(question, index) in ReportedQuestions" :key=index @click="showQuestion(question,index,0)">{{question.question_report_id}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-2">
                        <template slot="title">已处理</template>
                        <el-menu-item  v-for="(question, index) in HandledQuestions" :key=index @click="showQuestion(question,index,1)">{{question.question_report_id}}</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>课程回答</template>
                    <el-submenu index="2-1">
                        <template slot="title">未处理</template>
                        <el-menu-item v-for="(answer, index) in ReportedAnswers" :key=index @click="showAnswer(answer,index,0)">{{answer.answer_report_id}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2-2">
                        <template slot="title">已处理</template>
                        <el-menu-item v-for="(answer, index) in HandledAnswers" :key=index @click="showAnswer(answer,index,1)">{{answer.answer_report_id}}</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-menu"></i>课程评论</template>
                    <el-submenu index="3-1">
                        <template slot="title">未处理</template>
                        <el-menu-item v-for="(comment, index) in ReportedComments" :key=index @click="showComment(comment,index,0)">{{comment.course_comment_report_id}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3-2">
                        <template slot="title">已处理</template>
                        <el-menu-item v-for="(comment, index) in HandledComments" :key=index @click="showComment(comment,index,1)">{{comment.course_comment_report_id}}</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-menu"></i>精彩瞬间</template>
                    <el-submenu index="4-1">
                        <template slot="title">未处理</template>
                        <el-menu-item v-for="(view, index) in ReportedViews" :key=index @click="showView(view,index,0)">{{view.video_report_id}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4-2">
                        <template slot="title">已处理</template>
                        <el-menu-item v-for="(view, index) in HandledViews" :key=index @click="showView(view,index,1)">{{view.video_report_id}}</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title"><i class="el-icon-menu"></i>用户反馈</template>
                    <el-menu-item v-for="(feedback, index) in FeedBacks" :key=index @click="showFeedBack(feedback)">{{feedback.feedback_id}}</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-menu"></i>系统消息</template>
                    <el-menu-item v-for="(message, index) in Messages" :key=index @click="showMessage(message)">{{message.message_id}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: left; font-size: 12px">
                <div v-if="type==1"> 处理问题举报</div>
                <div v-if="type==2"> 处理回答举报</div>
                <div v-if="type==3"> 处理评论举报</div>
                <div v-if="type==4"> 处理精彩瞬间</div>
                <div v-if="type==5"> 用户权限管理</div>
                <div v-if="type==6"> 系统消息管理</div>
                <div v-if="type==7"> 发布系统消息</div>
            </el-header>
            <el-main>
                <div v-if="type==1">
                    <div class="row" v-if="itemQuestion!=null">
                        <div class="col-md-6" style="cursor: pointer" >
                            <div class="card-link">
                                <div class="author mb-2 mt-3">问题ID：{{itemQuestion.question_id}}   提问时间:{{itemQuestion.question_time}}</div>
                                <div class="author">提问内容:{{itemQuestion.question_content}}</div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row" v-if="item!=null">
                        <div class="col-md-2">
                            <div class="stock mt-2 ">举报者:</div>
                            <div class="stock ">举报时间</div>
                        </div>
                        <div class="col-md-2">
                            <div class="stock mt-2 ">{{item.user_id}}</div>
                            <div class="stock ">{{item.question_report_time}}</div>
                        </div>
                        <div class="col-md-6" style="cursor: pointer"  >
                            <div class="stock mt-2 " style="text-align: left">举报原因:</div>
                            <div class="stock">{{item.question_report_reason}}</div>
                        </div>
                    </div>
                    <hr>
                    <el-row class="btn-group mt-2 " style="float: left; margin-left: 100px" v-if="item!=null">
                        <el-button type="button" class="btn btn-default" @click="handleQuestion(item.question_report_id,0,index,handled)">解禁问题</el-button>
                        <el-button type="button" class="btn btn-default" @click="handleQuestion(item.question_report_id,1,index,handled)">封禁问题</el-button>
                    </el-row>
                </div>
                <div v-if="type==2">
                    <div class="row" v-if="itemQuestion!=null">
                        <div class="col-md-6" style="cursor: pointer" >
                            <div class="card-link">
                                <div class="author mb-2 mt-3">问题ID：{{itemQuestion.question_id}}   提问时间:{{itemQuestion.question_time}}</div>
                                <div class="author">提问内容:{{itemQuestion.question_content}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="itemAnswer!=null">
                        <div class="col-md-6" style="cursor: pointer" >
                            <div class="card-link">
                                <div class="author mt-3 mb-2">回答ID：{{itemAnswer.answer_id}}  回答时间:{{itemAnswer.answer_time}}</div>
                                <div class="author">回答内容:{{itemAnswer.answer_content}}</div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row" v-if="item!=null">
                        <div class="col-md-2">
                            <div class="stock mt-2 ">举报者:</div>
                            <div class="stock ">举报时间</div>
                        </div>
                        <div class="col-md-2">
                            <div class="stock mt-2 ">{{item.user_id}}</div>
                            <div class="stock ">{{item.answer_report_time}}</div>
                        </div>
                        <div class="col-md-6" style="cursor: pointer"  >
                            <div class="stock mt-2 " style="text-align: left">举报原因:</div>
                            <div class="stock">{{item.answer_report_reason}}</div>
                        </div>
                    </div>
                    <hr>
                    <el-row class="btn-group mt-2" style="float: left; margin-left: 100px" v-if="item!=null">
                        <el-button type="button" class="btn btn-default" @click="handleAnswer(item.answer_report_id,0,index,handled)">解禁回答</el-button>
                        <el-button type="button" class="btn btn-default" @click="handleAnswer(item.answer_report_id,1,index,handled)">封禁回答</el-button>
                    </el-row>
                </div>

                <div v-if="type==3">
                    <div class="row" v-if="itemComment!=null">
                        <div class="col-md-6" style="cursor: pointer" >
                            <div class="card-link">
                                <div class="author mt-3 mb-2">评论ID：{{itemComment.course_comment_id}}    评论时间:{{itemComment.course_comment_time}}</div>
                                <div class="author">评论内容:{{itemComment.course_comment_content}}</div>
                            </div>
                        </div>
                    </div>

                    <hr>
                    <div class="row" v-if="item!=null">
                        <div class="col-md-2">
                            <div class="stock mt-2 ">举报者:</div>
                            <div class="stock ">举报时间</div>
                        </div>
                        <div class="col-md-2">
                            <div class="stock mt-2 ">{{item.user_id}}</div>
                            <div class="stock ">{{item.course_comment_report_time}}</div>
                        </div>
                        <div class="col-md-6" style="cursor: pointer"  >
                            <div class="stock mt-2 " style="text-align: left">举报原因:</div>
                            <div class="stock">{{item.course_comment_report_reason}}</div>
                        </div>
                    </div>
                    <hr>
                    <el-row class="btn-group mt-2" style="float: left; margin-left: 100px" v-if="item!=null">
                        <el-button type="button" class="btn btn-default" @click="handleComment(item.course_comment_report_id,0,index,handled)">解禁评论</el-button>
                        <el-button type="button" class="btn btn-default" @click="handleComment(item.course_comment_report_id,1,index,handled)">封禁评论</el-button>
                    </el-row>
                </div>
                <div v-if="type==4">
                    <div class="row" v-if="itemMoment!=null">
                        <div class="imgbox col-md-2" style="cursor: pointer" >
                            <img :src="itemMoment.image_url" class="img-thumbnail" alt="Responsive image" v-if="itemMoment.video_type=='i'">
                            <video  :src="itemMoment.video_url" v-if="itemMoment.video_type=='v'" ></video>
                        </div>
                        <div class="col-md-6" style="cursor: pointer" >
                            <div class="card-link">
                                <div class="author mt-3 mb-2">精彩瞬间：{{itemMoment.video_id}}  发布时间:{{itemMoment.post_time}}</div>
                                <div class="author">发布内容:{{itemMoment.post_text}}</div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row" v-if="item!=null">
                        <div class="col-md-2">
                            <div class="stock mt-2 ">举报者:</div>
                            <div class="stock ">举报时间</div>
                        </div>
                        <div class="col-md-2">
                            <div class="stock mt-2 ">{{item.user_id}}</div>
                            <div class="stock ">{{item.video_report_time}}</div>
                        </div>
                        <div class="col-md-6" style="cursor: pointer"  >
                            <div class="stock mt-2 " style="text-align: left">举报原因:</div>
                            <div class="stock">{{item.video_report_reason}}</div>
                        </div>
                    </div>
                    <hr>
                    <el-row class="btn-group mt-2" style="float: left; margin-left: 100px" v-if="item!=null">
                        <el-button type="button" class="btn btn-default" @click="handleMoment(item.video_report_id,0,index,handled)">解禁评论</el-button>
                        <el-button type="button" class="btn btn-default" @click="handleMoment(item.video_report_id,1,index,handled)">封禁评论</el-button>
                    </el-row>

                </div>
                <div v-if="type==5" >
                    <div class="row" v-if="item!=null">
                        <div class="col-md-2">
                            <div class="stock mt-2 ">用户ID:</div>
                            <div class="stock ">用户姓名</div>
                            <div class="stock ">用户昵称</div>
                            <div class="stock ">用户性别</div>
                            <div class="stock ">所属学院</div>
                            <div class="stock ">所属专业</div>
                            <div class="stock ">入学年份</div>
                        </div>
                        <div class="col-md-2">
                            <div class="stock mt-2 ">{{item.ID}}</div>
                            <div class="stock mt-1">{{item.name}}</div>
                            <div class="stock mt-1">{{item.nickname}}</div>
                            <div class="stock mt-1">{{item.sex}}</div>
                            <div class="stock mt-1">{{item.department}}</div>
                            <div class="stock mt-1">{{item.major}}</div>
                            <div class="stock mt-1">{{item.admissionYear}}</div>
                        </div>

                    </div>
                    <hr>
                    <el-row class="btn-group mt-2" style="float: left; margin-left: 100px" v-if="item!=null">
                        <el-button type="button" class="btn btn-default" @click="handleUser(item.user_id,0)">封禁用户</el-button>
                        <el-button type="button" class="btn btn-default" @click="handleUser(item.user_id,1)">解禁用户</el-button>
                    </el-row>
                </div>
                <div v-if="type==6">
                    <div class="row" v-if="item!=null">
                        <div class="col-md-6" style="cursor: pointer" >
                            <div class="card-link">
                                <div class="author mt-3 mb-2">系统消息：{{item.message_id}}  发布时间:{{item.time}}</div>
                                <div class="author">发布内容:{{item.content}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="imgbox col-md-2" style="cursor: pointer" v-if="item.image_url!=''">
                        <img :src="item.image_url" class="img-thumbnail" alt="Responsive image" style="border: #1b1e21 1px" >
                    </div>
                    <el-row class="btn-group " style="float: left; margin-left: 100px" v-if="item!=null">
                        <el-button type="button" class="btn btn-default" @click="deleteMessage(item.message_id)">删除消息</el-button>

                    </el-row>
                </div>
                <div v-if="type==7" class="container" style="display: flex; justify-content: space-between; align-items: center; flex-direction: column">
                    <el-input
                            type="textarea"
                            :rows="2"
                            v-model="text"
                            placeholder="输入公告内容"
                    />
                    <el-button type="button" class="btn btn-default" @click="addMessage">发布消息</el-button>
                </div>
                <div v-if="type==8">
                    <div class="row" v-if="item!=null">
                        <div class="col-md-2">
                            <div class="stock mt-2 ">反馈者:</div>
                            <div class="stock ">反馈时间</div>
                        </div>
                        <div class="col-md-2">
                            <div class="stock mt-2 ">{{item.user_id}}</div>
                            <div class="stock ">{{item.time}}</div>
                        </div>
                        <div class="col-md-6" style="cursor: pointer"  >
                            <div class="stock mt-2 " style="text-align: left">反馈内容:</div>
                            <div class="stock">{{item.content}}</div>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container>


</template>

<script>
    import { mapState } from "vuex";
    import {
        reqAddMessage,
        reqBanUser, reqDeleteMessage,
        reqGetOneAnswer,
        reqGetOneComment,
        reqGetOneQuestion,
        reqGetOneVideo, reqHandleAnswer, reqHandleComment,
        reqHandleQuestion, reqHandleVideo, reqUnBanUser, reqUpload,
    } from "../api";
export default {
    name: "home",
    data() {
        return {
            type: 0,
            item: null,
            index: -1,
            handled: -1,
            handle: true,
            itemMoment: null,
            itemQuestion: null,
            itemAnswer: null,
            itemComment: null,
            image: null,
            imageVisible:false,
            text:"",
            fileList:null
        }

    },
    created() {
        this.$store.dispatch("Comment/getComments").then;
        this.$store.dispatch("Question/getQuestions").then;
        this.$store.dispatch("Answer/getAnswers").then;
        this.$store.dispatch("View/getViews").then;
        this.$store.dispatch("Person/getUsers").then;
        this.$store.dispatch("FeedBack/getFeedBack").then;
        this.$store.dispatch("Message/getMessage").then;
    },
    computed: {
        ...mapState({
            ReportedComments: state => state.Comment.ReportedComments,
            HandledComments: state => state.Comment.HandledComments,
            ReportedQuestions: state => state.Question.ReportedQuestions,
            HandledQuestions: state => state.Question.HandledQuestions,
            ReportedAnswers: state => state.Answer.ReportedAnswers,
            HandledAnswers: state => state.Answer.HandledAnswers,
            ReportedViews: state => state.View.ReportedViews,
            HandledViews: state => state.View.HandledViews,
            Users: state => state.Person.users,
            Messages: state => state.Message.messages,
            Admin_id: state => state.Person.user,
            FeedBacks: state => state.FeedBack.feedbacks
        })
    },
    methods: {
        showQuestion(data, index, handled) {
            this.handled = handled;
            this.index = index;
            this.type = 1;
            this.item = data;
            this.itemMoment = null;
            this.itemAnswer = null;
            this.itemComment = null;
            reqGetOneQuestion(data.question_id).then((res) => {
                this.itemQuestion = res;
            })
        },
        showAnswer(data, index, handled) {
            this.handled = handled;
            this.index = index;
            this.type = 2;
            this.item = data;
            this.itemMoment = null;
            this.itemComment = null;
            reqGetOneAnswer(data.answer_id).then((res) => {
                this.itemAnswer = res;
            })
            reqGetOneQuestion(this.itemAnswer.question_id).then((res) => {
                this.itemQuestion = res;
            })
        },
        showComment(data, index, handled) {
            this.handled = handled;
            this.index = index;
            this.type = 3;
            this.item = data;
            this.itemMoment = null;
            this.itemQuestion = null;
            this.itemAnswer = null;
            reqGetOneComment(data.course_comment_id).then((res) => {
                this.itemComment = res;
            })
        },
        showView(data, index, handled) {
            this.handled = handled;
            this.index = index;
            this.type = 4;
            this.item = data;
            this.itemQuestion = null;
            this.itemAnswer = null;
            this.itemComment = null;
            reqGetOneVideo(data.video_id).then((res) => {
                this.itemMoment = res;
            })
        },
        showUser(data) {
            this.type = 5;
            this.item = data;
            this.itemQuestion = null;
            this.itemAnswer = null;
            this.itemComment = null;
            this.itemMoment = null;
        },
        showMessage(data) {
            this.type = 6;
            this.item = data;
            this.itemQuestion = null;
            this.itemAnswer = null;
            this.itemComment = null;
            this.itemMoment = null;
        },
        showFeedBack(data){
          this.type = 8;
            this.item = data;
            this.itemQuestion = null;
            this.itemAnswer = null;
            this.itemComment = null;
            this.itemMoment = null;
        },
        handleQuestion(id, handle, index, handled) {
            reqHandleQuestion(id, handle).then();
            if (handled == 0) {
                let tmp = this.ReportedQuestions[index];
                this.ReportedQuestions.splice(index, 1);
                this.HandledQuestions.push(tmp);
            }
        },
        handleAnswer(id, handle, index, handled) {
            reqHandleAnswer(id, handle).then();
            if (handled == 0) {
                let tmp = this.ReportedAnswers[index];
                this.ReportedAnswers.splice(index, 1);
                this.HandledAnswers.push(tmp);
            }
        },
        handleComment(id, handle, index, handled) {
            reqHandleComment(id, handle).then();
            if (handled == 0) {
                let tmp = this.ReportedComments[index];
                this.ReportedComments.splice(index, 1);
                this.HandledComments.push(tmp);
            }
        },
        handleMoment(id, handle, index, handled) {
            reqHandleVideo(id, handle).then();
            if (handled == 0) {
                let tmp = this.ReportedViews[index];
                this.ReportedViews.splice(index, 1);
                this.HandledViews.push(tmp);
            }
        },
        handleUser(id, handle) {
            if (handle == 0) {
                reqBanUser(id).then();
            } else {
                reqUnBanUser(id).then();
            }
        },
        changeType() {
            this.type = 7;
        },
        deleteMessage(data){
            reqDeleteMessage(data).then(()=>{
                console.log("send delete");
                this.$store.dispatch("Message/getMessage").then;
            })
        },
        addMessage() {
            reqAddMessage(1, this.text, "").then();
            this.$store.dispatch("Message/getMessage").then;
        }
    ,
    upload(item) {
            console.log(item)
            reqUpload(item.file).then((res)=>{
                this.image = res;
                console.log("upload file")
                console.log(res)
            })
        }
    }
};
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .imgbox{
        font-size: 0;
        width: 200px;
        height: 200px;
        text-align: center;
    }
    .imgbox img{
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    .name{
        font-family: 黑体;
        font-size: 24px;
    }

    .author{
        font-family: 仿宋;
        font-size: 15px;
    }

    .outline{
        font-family: 等线;
        font-size: 12px;
        opacity: 0.6;
    }

    .isbn{
        font-size:10px;
        font-family: Arial;
    }

    .stock{
        font-size:15px;
        font-family: 仿宋;
    }

    .price{
        font-size: 20px;
        font-family: 黑体;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

</style>