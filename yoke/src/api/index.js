import ajax from "./ajax";

const BASE_URL = "/api";

// 1、登录
export const reqLogin = ({ account, password }) =>
  ajax(BASE_URL + "/admin/signIn", { account, password }, "POST");

// 2、用户登出
export const reqLogout = () => ajax(BASE_URL + "/admin/signOut");

// 3、改变用户状态
export const reqChangeUser = ID =>
  ajax(BASE_URL + "/admin/users/change", { ID }, "POST");

// 4、获取所有用户状态
export const reqGetUser = () => ajax(BASE_URL + "/admin/users/get");

// 5、获取所有评论， 建议获取的是所有被举报的
export const reqGetAllComment = () => ajax(BASE_URL + "/admin/comment/get");

// 6、获取单个评论
export const reqGetOneComment = () => ajax( BASE_URL + "/admin/comment/specific" )

// 7、处理评论，或者ban 或者let off
export const reqHandleComment = (commentType,comment_id,req) =>
  ajax(BASE_URL + "/admin/comment/handle", { commentType, comment_id,req });

// 8、获取所有的视频 （举报的)
export const reqGetAllVideo = () => ajax( BASE_URL + "/admin/video/get");

// 9、获取单个视频  //这里为虚拟变量
export const reqGetOneVideo = (video_id) => ajax( BASE_URL + "/admin/video/specific" , {video_id});

// 10、处理评论，或者ban 或者let off
export const reqHandleVideo = (video_id,req) =>
    ajax(BASE_URL + "/admin/video/handle", { video_id,req });
