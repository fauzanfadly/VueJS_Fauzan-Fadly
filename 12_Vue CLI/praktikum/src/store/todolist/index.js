import actions from './actions';

const state = () => ({
  itemList: []
});

const getters = {
  getItemList(state) {
    return state.itemList;
  },
};

const mutations = {
  seIitemList(state, value) {
    return state.itemList = value;
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
}