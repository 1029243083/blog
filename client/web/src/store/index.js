import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList: [],
    User:{}
  },
  mutations: {
    addList(state, data) {
      state.articleList.push(...data);
    },
    changeList(state, data) {
      state.articleList = data;
    },
    changeUser(state,data){
      state.User = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
