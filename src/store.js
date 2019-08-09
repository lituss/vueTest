import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: ['pepet'],
    messages: []

  },
  mutations: {
    addUser(state,user){
      state.userList.push(user);
    },
    addMessage(state,message){
      state.messages.push(message);
    }

  },
  actions: {
    a_addUser({commit},user){
      commit('addUser',user);
    },
    a_addMessage({commit},message){
      commit('addMessage',message);
    }
  },
    getters: {
      getUserList(state){return state.userList}
    }
})
