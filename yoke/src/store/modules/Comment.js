import { reqGetAllComment } from "../../api";

const state = {
  comments: [],
  comment: null,
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
