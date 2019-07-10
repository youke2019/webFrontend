import Vue from "vue";
import Vuex from "vuex";
import Person from "./modules/Person";
import Comment from "./modules/Comment";
import Picture from "./modules/Picture";
import Video from "./modules/Video";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Person,
    Comment,
    Picture,
    Video
  }
});
