import { reqGetReportedView ,reqGetHandledView} from "../../api";

const state = {
    ReportedViews: [],
    HandledViews: [],
    index: -1
};

const actions = {
    getViews(context) {
        reqGetReportedView().then(data => {
            context.commit("getReportedViews", data);
        });
        reqGetHandledView().then(data => {
            context.commit("getHandledViews", data);
        });
    }
};

const mutations = {
    getReportedViews(state, res) {
        state.ReportedViews = res;
        console.log("getReportedViews")
        console.log(res);
    },
    getHandledViews(state, res) {
        state.HandledViews = res;
        console.log("getHandledViews")
        console.log(res);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
