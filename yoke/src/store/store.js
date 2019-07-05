import Vue from "vue";
import Vuex from "vuex";
import Person from "./modules/Person";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Person
  }
});
