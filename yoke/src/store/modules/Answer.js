import { reqGetHandledAnswer ,reqGetReportedAnswer} from "../../api";

const state = {
    ReportedAnswers: [],
    HandledAnswers: [],
    index: -1
};

const actions = {
    getAnswers(context) {
        reqGetHandledAnswer().then(data => {
            context.commit("getHandledAnswers", data);
        });
        console.log("wtffffffffffff")
        reqGetReportedAnswer().then(data => {
            context.commit("getReportedAnswers", data);
        });
    }
};

const mutations = {
    getReportedAnswers(state, res) {
        state.ReportedAnswers = res;
        console.log("getReportedAnswers")
        console.log(res);
    },
    getHandledAnswers(state, res) {
        state.HandledAnswers = res;
        console.log("getHandledAnswers")
        console.log(res);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
