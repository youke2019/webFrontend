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

// 5、获取所有评论
export const reqGetAllComment = () => ajax(BASE_URL + "/admin/comment/get");

// 6、获取单个评论
export const reqGetOneComment = () => ajax( BASE_URL + "/admin/comment/specific" )

// 7、处理评论，或者ban 或者let off
export const reqHandleComment = (commentType,comment_id,req) =>
  ajax(BASE_URL + "/admin/comment/handle", { commentType, comment_id,req });

// 8、日期筛选评论详情
export const reqDateDetailCommentFilter = (beginDate, endDate, account) =>
  ajax(BASE_URL + "/admin/comment/dateDetail", { beginDate, endDate, account });
