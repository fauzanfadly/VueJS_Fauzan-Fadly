import actions from './actions';

const state = () => ({
  theme: "Dark"
});

const getters = {
  getTheme(state) {
    return state.theme;
  },
};

const mutations = {
  setTheme(state, value) {
    return state.theme = value;
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
}