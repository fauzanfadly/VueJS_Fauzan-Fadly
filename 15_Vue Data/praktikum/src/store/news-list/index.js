import actions from './actions';

const state = () => ({
  listNews: [],
  isLoading: true,
});

const getters = {
  getListNews(state) {
    return state.listNews;
  },
  getLoading(state) {
    return state.isLoading;
  },
}

const mutations = {
  setListNews(state, params) {
    state.listNews = params;
  },
  setLoading(state, params) {
    state.isLoading = params;
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}