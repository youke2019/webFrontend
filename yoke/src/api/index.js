import ajax from "./ajax";

const BASE_URL = "/api";

// 1、登录
export const reqLogin = ({ account, password }) =>
  ajax(BASE_URL + "/admin/signIn", { account, password }, "POST");

// 2、用户登出
export const reqLogout = () => ajax(BASE_URL + "/admin/signOut");

// 3、改变用户状态
export const reqChangeUser = account =>
  ajax(BASE_URL + "/user/change", { account }, "POST");

// 4、获取所有用户状态
export const reqGetUserState = () => ajax(BASE_URL + "/user/states");

// 5、获取所有评论
export const reqGetAllComment = () => ajax(BASE_URL + "/comment/getAll");

// 6、搜索评论
export const reqSearchComment = filter =>
  ajax(BASE_URL + "/comment/search", { filter });

// 18、日期筛选评论
export const reqDateCommentFilter = (beginDate, endDate, account) =>
  ajax(BASE_URL + "/comment/date", { beginDate, endDate, account });

// 19、日期筛选评论详情
export const reqDateDetailCommentFilter = (beginDate, endDate, account) =>
  ajax(BASE_URL + "/comment/dateDetail", { beginDate, endDate, account });
