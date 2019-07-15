import { reqGetAllComment } from "../../api";

const state = {
  comments: [],
  comment: null
};

const actions = {
  getComments(context) {
    reqGetAllComment().then(data => {
      context.commit("getComments", data);
    });
  }
};

const mutations = {
  getComments(state, res) {
    state.comments = res.data.comments;
    console.log(res);
  },
  removeComment(state, index) {
    state.comments.splice(index, 1);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
