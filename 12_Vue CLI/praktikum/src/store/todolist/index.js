import actions from './actions';
import mutations from './mutations';

const state = () => ({
  itemList: []
});

const getters = {
  getItemList(state) {
    return state.itemList;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
}