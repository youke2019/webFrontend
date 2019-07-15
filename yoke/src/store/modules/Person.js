import { reqGetUser } from "../../api";

const state = {
  isLogin: -1,
  user: null,
  users: [
    {
      ID: 123,
      name: "fuck1",
      banned: 0
    },
    {
      ID: 11,
      name: "fuck2",
      banned: 1
    }
  ]
};

const actions = {
  getUsers(context) {
    reqGetUser().then(data => {
      context.commit("getUsers", data);
    });
  }
};
const mutations = {
  getUsers(state, res) {
    state.users = res.data.users;
    console.log(res);
  },
  getUser(state, index) {
    return state.users[index].ID;
  },
  changeLogin(state, index) {
    state.isLogin = index;
  },
  signout(state) {
    state.isLogin = -1;
    state.users.splice(0);
  },
  signIn(state, user) {
    state.user = user;
  },
  changeAllow(state, index) {
    state.users[index].allowed = !state.users[index].allowed;
    console.log(state.users[index].account);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
