import { reqGetHandledQuestion ,reqGetReportedQuestion} from "../../api";

const state = {
    ReportedQuestions: [],
    HandledQuestions: [],
    index: -1
};

const actions = {
    getQuestions(context) {
        reqGetReportedQuestion().then(data => {
            context.commit("getReportedQuestions", data);
        });
        reqGetHandledQuestion().then(data => {
            context.commit("getHandledQuestions", data);
        });
    }
};

const mutations = {
    getReportedQuestions(state, res) {
        state.ReportedQuestions = res;
        console.log("getReportedQuestions")
        console.log(res);
    },
    getHandledQuestions(state, res) {
        state.HandledQuestions = res;
        console.log("getHandledQuestions")
        console.log(res);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
