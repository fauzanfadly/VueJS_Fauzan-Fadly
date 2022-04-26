import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    loading: false,
  },
  mutations: {
    setLoading (state, data) {
      state.loading = data
    }
  },
  actions: {
    loading (store, data) {
      return store.commit('setLoading', data)
    }
  }
})