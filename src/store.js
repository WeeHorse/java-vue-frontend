import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tick: new Date(),
    increase: 0,
    payloads: [],
    fileUploadPreview: 'images/placeholder.png',
    magazines: []
  },
  // måste vara synkrona:
  mutations: {
    when (state, time) {
      state.tick = time
    },
    increase (state) {
      state.increase +=1;
    },
    gotData (state, payload) {
      state.payloads.push(payload);
    },
    gotMagazineData(state, payload){
      state.magazines = payload;
    },
    fileUploaded (state, file){
      state.fileUploadPreview = file;
    }
  },
  // får vara asynkrona
  actions: {
    one({ commit }) {
      commit('when', new Date('1971-01-01 12:12'));
    },
    two({ commit }) {
      commit('increase');
    },
    async actionA ({ commit }) {
      commit('gotData', await fetch('/rest/magazines').body);
    },
    async actionB ({ dispatch, commit }) {
      await dispatch('actionA') // wait for `actionA` to finish
      commit('gotData', await fetch('/rest/users').body);
    },
    async getMagazines({ commit }){
      commit('gotMagazineData', await fetch('/rest/magazines').body);
    },
    async fileUpload({ commit }, fileData){
      let result = await fetch('/rest/upload', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fileData)
      });
      commit('fileUploaded', result.body);
    }
  }
})
