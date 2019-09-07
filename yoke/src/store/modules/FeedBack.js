import {reqGetFeedBack} from "../../api";

const state = {
    feedbacks: [

    ]
};

const actions = {
    getFeedBack(context) {
        reqGetFeedBack().then(data => {
            context.commit("getFeedBacks", data);
        });
    }
};
const mutations = {
    getFeedBacks(state, res) {
        state.feedbacks = res;
        console.log("getAllFeedBacks")
        console.log(res);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
