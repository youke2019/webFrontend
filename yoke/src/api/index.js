import ajax from "./ajax";

const BASE_URL = "/api";

// 登录
export const reqLogin = ({ account, password }) =>
  ajax(BASE_URL + "/manager/signin", { account, password });

// 注册
export const reqLogup = ({ account, password }) =>
    ajax(BASE_URL + "/manager/signup", { account, password });

// 改变用户状态
export const reqBanUser = (ID) => ajax(BASE_URL + "/users/ban", { ID }, "POST");

export const reqUnBanUser = (ID) => ajax(BASE_URL + "/users/unban", { ID }, "POST");

// 获取所有用户状态
export const reqGetUser = () => ajax(BASE_URL + "/users/all");

// 获取所有系统消息
export const reqGetMessage = (number) => ajax(BASE_URL + "/manager/systemMessage/find",{number});

// 获取所有评论， 建议获取的是所有被举报的
export const reqGetReportedComment = () => ajax(BASE_URL + "/report/getReported/comments");

// 获取所有评论， 建议获取的是所有已处理的
export const reqGetHandledComment = () => ajax(BASE_URL + "/report/getHandled/comments");

// 获取所有问题， 建议获取的是所有被举报的
export const reqGetReportedQuestion = () => ajax(BASE_URL + "/report/getReported/questions");

// 获取所有问题， 建议获取的是所有已处理的
export const reqGetHandledQuestion = () => ajax(BASE_URL + "/report/getHandled/questions");

// 获取所有回答， 建议获取的是所有被举报的
export const reqGetReportedAnswer = () => ajax(BASE_URL + "/report/getReported/answers");

// 获取所有回答， 建议获取的是所有已处理的
export const reqGetHandledAnswer = () => ajax(BASE_URL + "/report/getHandled/answers");

// 获取所有精彩瞬间， 建议获取的是所有被举报的
export const reqGetReportedView = () => ajax(BASE_URL + "/report/getReported/moments");

// 获取所有精彩瞬间， 建议获取的是所有已处理的
export const reqGetHandledView = () => ajax(BASE_URL + "/report/getHandled/moments");



// 获取单个视频  //这里为虚拟变量
export const reqGetOneVideo = (moment_id) => ajax( BASE_URL + "/courses/moments/findById" , {moment_id});

// 获取单个视频  //这里为虚拟变量
export const reqGetOneQuestion = (question_id) => ajax( BASE_URL + "/courses/questions/findById" , {question_id});

// 获取单个视频  //这里为虚拟变量
export const reqGetOneAnswer = (answer_id) => ajax( BASE_URL + "/courses/answers/findById" , {answer_id});

// 获取单个视频  //这里为虚拟变量
export const reqGetOneComment = (comment_id) => ajax( BASE_URL + "/courses/comments/findById" , {comment_id});



// 处理评论，或者ban 或者let off
export const reqHandleVideo = (report_id,handler) => ajax(BASE_URL + "/report/handle/moment", { report_id,handler });
// 处理评论，或者ban 或者let off
export const reqHandleQuestion = (course_question_report_id,handler) => ajax(BASE_URL + "/report/handle/question", { course_question_report_id,handler });
// 处理评论，或者ban 或者let off
export const reqHandleAnswer = (course_answer_report_id,handler) => ajax(BASE_URL + "/report/handle/answer", { course_answer_report_id,handler });
// 处理评论，或者ban 或者let off
export const reqHandleComment = (course_comment_report_id,handler) => ajax(BASE_URL + "/report/handle/comment", { course_comment_report_id,handler });


export const reqUpload = (file) => ajax(BASE_URL + "/manager/systemMessage/upload", { file }, "POST");


export const reqDeleteMessage = (message_id) => ajax( BASE_URL + "/manager/systemMessage/delete" , {message_id});


export const reqAddMessage = (admin_id,content,image_url) => ajax( BASE_URL + "/manager/systemMessage/add" , {admin_id,content,image_url},"POST");


export const reqGetFeedBack = () => ajax(BASE_URL + "/users/feedback/all");

