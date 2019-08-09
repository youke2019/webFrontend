import { reqGetAllComment } from "../../api";

const state = {
  comments: [],
  comment: {
    course_comment_id: -1,
    course_comment_content: "",
    course_id: "",
    course_comment_time: "",
    user_id: "",
    isbanned: false
  },
  index:-1
};

const actions = {
  getComments(context) {
    reqGetAllComment().then(data => {
      console.log(data);
      context.commit("getComments", data);
    });
  }
};

const mutations = {
  getComments(state, res) {
    state.comments = res;
    console.log(res);
  },
  removeComment(state, index) {
    state.comments.splice(index, 1);
  },
  comment(state,comment,index){
    state.comment = comment;
    state.index = index;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
