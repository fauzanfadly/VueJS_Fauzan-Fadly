const state = () => ({
  news: {}
})

const mutations = {
  setNews (state, params) {
    state.news = params
  }
}

const actions = {
  getDetail (store, params) {
    store.commit('setNews', params)
  }
}

export default {
  state,
  mutations,
  actions
}
