import { reqGetMessage } from "../../api";

const state = {
    messages: [

    ]
};

const actions = {
    getMessage(context) {
        reqGetMessage(3).then(data => {
            context.commit("getMessages", data);
        });
    }
};
const mutations = {
    getMessages(state, res) {
        state.messages = res;
        console.log("getAllMessages")
        console.log(res);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
