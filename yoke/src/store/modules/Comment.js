import { reqGetReportedComment ,reqGetHandledComment} from "../../api";

const state = {
  ReportedComments: [],
  HandledComments: [],
  comment: {
    course_comment_id: -1,
    course_comment_content: "",
    course_id: "",
    course_comment_time: "",
    user_id: "",
    isbanned: false
  },
  index: -1
};

const actions = {
  getComments(context) {
    reqGetReportedComment().then(data => {
      context.commit("getReportedComments", data);
    });
    reqGetHandledComment().then(data => {
      context.commit("getHandledComments", data);
    });
  }
};

const mutations = {
  getReportedComments(state, res) {
    state.ReportedComments = res;
    console.log("getReportedComments")
    console.log(res);
  },
  getHandledComments(state, res) {
    state.HandledComments = res;
    console.log("getHandledComments")
    console.log(res);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
