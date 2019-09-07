import Vue from "vue";
import Vuex from "vuex";
import Person from "./modules/Person";
import Comment from "./modules/Comment";
import Answer from "./modules/Answer";
import View from "./modules/View";
import Question from "./modules/Question"
import Message from "./modules/Message"
import FeedBack from "./modules/FeedBack"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Person,
    Comment,
    Answer,
    View,
    Question,
      Message,
      FeedBack
  }
});
